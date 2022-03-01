FROM nginx:latest as nx-monorepo

RUN ls /etc/nginx
RUN cat /etc/nginx/nginx.conf

COPY ./nginx.conf /etc/nginx/conf.d/angular-ui.conf
COPY . /usr/share/nginx/html

RUN cat /etc/nginx/conf.d/angular-ui.conf

EXPOSE 8080
