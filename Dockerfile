# frontend/Dockerfile
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Important: expose on all network interfaces
ENV HOST=0.0.0.0
EXPOSE 5173

CMD ["npm", "run", "dev"]
