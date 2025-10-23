import React, { useState, useRef, useEffect } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

/**
 * Reusable Dropdown Component
 *
 * @param {Object} props
 * @param {React.ReactNode} props.trigger - Custom trigger element or text for the dropdown button
 * @param {Array} props.items - Array of items to display in dropdown
 * @param {Function} props.onSelect - Callback function when an item is selected
 * @param {string} props.className - Additional classes for the dropdown container
 * @param {string} props.buttonClassName - Additional classes for the dropdown button
 * @param {string} props.menuClassName - Additional classes for the dropdown menu
 * @param {string} props.itemClassName - Additional classes for dropdown items
 * @param {string} props.position - Position of dropdown menu ('left' or 'right'), default 'left'
 * @param {React.ReactNode} props.icon - Icon to display in the button
 * @param {boolean} props.showArrow - Whether to show dropdown arrow, default true
 * @param {Function} props.renderItem - Custom render function for each item
 * @param {boolean} props.closeOnSelect - Whether to close dropdown after selecting item, default true
 */
const Dropdown = ({
  trigger,
  items = [],
  onSelect,
  className = "",
  buttonClassName = "",
  menuClassName = "",
  itemClassName = "",
  position = "left",
  icon,
  showArrow = true,
  renderItem,
  closeOnSelect = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleItemClick = (item, index) => {
    if (onSelect) {
      onSelect(item, index);
    }
    if (closeOnSelect) {
      setIsOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className={`flex items-center gap-2 ${buttonClassName}`}
      >
        {icon && <span>{icon}</span>}
        <span>{trigger}</span>
        {showArrow && (
          <MdOutlineKeyboardArrowDown
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute ${
            position === "right" ? "right-0" : "left-0"
          } top-full mt-1 bg-white shadow-lg rounded-md py-1 z-50 border border-border min-w-[180px] ${menuClassName}`}
        >
          {items.length > 0 ? (
            items.map((item, index) => (
              <div
                key={index}
                onClick={() => handleItemClick(item, index)}
                className={`cursor-pointer ${itemClassName}`}
              >
                {renderItem ? (
                  renderItem(item, index)
                ) : (
                  <div className="px-4 py-2 hover:bg-bg-light hover:text-primary-500 transition-colors text-sm text-text-900">
                    {typeof item === "string" ? item : item.label || item.name}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-sm text-text-600">No items</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
