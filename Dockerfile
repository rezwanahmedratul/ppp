# ==========================================
# Stage 1: Build static distribution files
# ==========================================
FROM node:22-slim AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files and build production bundle
COPY . .
RUN npm run build

# ==========================================
# Stage 2: Lightweight Nginx runtime server
# ==========================================
FROM nginx:1.27-alpine AS runner

# Remove default nginx boilerplate website
RUN rm -rf /usr/share/nginx/html/*

# Copy built application assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy tailored SPA Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose standard HTTP port
EXPOSE 80

# Health check endpoint for Docker & container orchestrators
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/healthz || exit 1

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
