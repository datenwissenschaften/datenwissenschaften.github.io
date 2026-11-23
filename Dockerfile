FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build && node scripts/csp-hash.mjs dist security-headers.conf

FROM nginx:1.29-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/security-headers.conf /etc/nginx/snippets/security-headers.conf
COPY --from=build /app/dist/page-paths.map /etc/nginx/snippets/page-paths.map
# Replace the image's default welcome and 50x pages with the site.
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /usr/share/nginx/html/page-paths.map && nginx -t
EXPOSE 5000
