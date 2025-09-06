FROM node:20-alpine
WORKDIR /app

# Install deps (use ci if lockfile exists; fallback to install)
COPY package*.json ./
RUN npm ci --no-audit --no-fund || npm install

# Copy source
COPY . .

# Point Relay/Vite to the API service name from Compose
ENV VITE_GRAPHQL_HTTP_URL=http://api:8080/graphql
ENV VITE_GRAPHQL_WS_URL=ws://api:8080/graphql

EXPOSE 5173

# Compile Relay artifacts from local schema.graphql and start Vite
CMD ["sh", "-c", "npm run relay && npm run dev -- --host 0.0.0.0"]