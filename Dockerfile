# Stage 1: Build stage
FROM node:22-alpine AS builder

WORKDIR /usr/src/app

# Copy package manifests
COPY package*.json ./

# Install all dependencies (including devDependencies for compiling TS)
RUN npm ci

# Copy application sources
COPY . .

# Build the NestJS app (compiles to dist/ folder)
RUN npm run build

# Prune development dependencies (removes devDependencies from node_modules in-place, no network downloads)
RUN npm prune --omit=dev

# Stage 2: Production stage
FROM node:22-alpine

WORKDIR /usr/src/app

# Set Node environment to production
ENV NODE_ENV=production

# Copy package manifests
COPY package*.json ./

# Copy production node_modules and compiled dist folders from the builder stage
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist

# Expose port (port 4000 as run on your server or 3000 as default)
EXPOSE 4000

# Run the compiled application
CMD ["node", "dist/main"]
