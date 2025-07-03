# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build Vite app
RUN npm run build

# Use NGINX to serve the app
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
