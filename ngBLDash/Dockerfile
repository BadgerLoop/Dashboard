FROM node:4-wheezy
#FROM ubuntu:14.04
#FROM nginx:debian

#RUN rm /etc/nginx/conf.d/default.conf
#RUN rm /etc/nginx/conf.d/example_ssl.conf

COPY . /usr/share/nginx/html
COPY nginx.conf /etc/nginx

WORKDIR /usr/share/nginx/html
#RUN apt-get update && \
#	apt-get install -y software-properties-common && \
#	add-apt-repository -y ppa:nginx/stable && \
#	sudo apt-get install -y nodejs && \
#	sudo apt-get install -y npm && \
#   sudo apt-get install -y build-essential

RUN npm install -g grunt-cli
RUN npm install -g bower
RUN bower install --allow-root
RUN npm install 

CMD grunt serve

# Expose ports.
EXPOSE 80
EXPOSE 443