# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:22-alpine AS builder

WORKDIR /app

COPY . .

RUN npm ci
RUN npm run build

FROM node:22-alpine AS deploy

WORKDIR /app

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public/ ./public
COPY --from=builder /app/package.json/ ./package.json

EXPOSE 8080
ENV PORT 8080

CMD ["node", "server.js"]
