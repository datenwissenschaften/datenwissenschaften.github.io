# Stage 1: Build the Angular application
FROM node:20 as build

WORKDIR /angular-app

COPY package.json package-lock.json ./
RUN npm install --force

COPY . .
RUN npm run build --prod

# Stage 2: Serve the Angular application with Express
FROM node:20-alpine

LABEL maintainer="martin.franke@datenwissenschaften.com"
LABEL version="1.0"
LABEL description="Datenwissenschaften Website"
LABEL name="datenwissenschaften/website"

WORKDIR /app

COPY express-proxy-server/package.json express-proxy-server/package-lock.json ./
RUN npm install --production

COPY --from=build /angular-app/dist/datenwissenschaften/browser ./dist/datenwissenschaften/browser
COPY express-proxy-server/server.js .

EXPOSE 3000

CMD ["node", "server.js"]
