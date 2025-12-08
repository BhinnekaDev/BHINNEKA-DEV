# Stage 1 — Build App
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files first → faster cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source
COPY . .

# Build
RUN npm run build

# Stage 2 — Production
FROM node:18-alpine AS runner

WORKDIR /app

# Copy only important files from build stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Set env production
ENV NODE_ENV=production
ENV PORT=3001

EXPOSE 3001

CMD ["npm", "start"]
