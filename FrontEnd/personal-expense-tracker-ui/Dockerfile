# stage 1, build angular app
FROM node:latest as build-stage
WORKDIR /app
COPY ./package**.json /app/
RUN npm install
COPY ./ /app/
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration

# stage 2 , setup nginx for angular app
FROM nginx:latest
COPY --from=build-stage /app/dist/out /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf