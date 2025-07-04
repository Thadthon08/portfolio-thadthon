FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --verbose

# Copy source code
COPY . .

RUN npm run build

# Use NGINX to serve the app
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
