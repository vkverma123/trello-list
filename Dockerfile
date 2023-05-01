FROM node:16-alpine3.12 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build && npm test

FROM node:16-alpine3.12
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder /app/package*.json ./
RUN npm install
COPY --from=builder /app/dist  ./dist
CMD ["node", "/app/dist/server.js" ]