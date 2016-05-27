FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY /dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

# Expose ports.
EXPOSE 80
EXPOSE 443