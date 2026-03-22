# Stage 1: Build
FROM node:20-alpine AS builder

# System dependencies for native Node modules (canvas, sharp, etc.)
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    git

# Set working directory
WORKDIR /app

# Copy package manifests (cache npm install layer)
COPY package.json package-lock.json ./

# Install dependencies (clean install, respects lock file)
RUN npm ci

# Copy source code
COPY . .

# Build static site into ./public
RUN npm run build


# Stage 2: Serve
FROM nginx:1.27-alpine AS serve

# Copy built static files from build stage
COPY --from=builder /app/public /usr/share/nginx/html

# Optional custom Nginx config
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]