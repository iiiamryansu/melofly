FROM node:22 AS builder
WORKDIR /app

RUN npm install -g bun

COPY package.json bun.lock ./

RUN bun install

COPY . .

RUN bun run build

FROM nginx:alpine AS runner

COPY --from=builder /app/dist /usr/share/nginx/html

ENV HOST=0.0.0.0
ENV PORT=80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
