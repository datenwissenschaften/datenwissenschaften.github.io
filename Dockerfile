FROM node:latest as build
WORKDIR /usr/local/app
COPY "package.json" "package.json"
RUN npm install --force
COPY ./ /usr/local/app/
RUN npm run build

FROM nginx:latest

LABEL maintainer="martin.franke@datenwissenschaften.com"
LABEL version="1.0"
LABEL description="Datenwissenschaften Website"
LABEL name="datenwissenschaften/website"

COPY --from=build /usr/local/app/dist/datenwissenschaften/browser /usr/share/nginx/html
EXPOSE 80
