FROM bitnami/apache:latest

USER root

RUN apt-get update
RUN curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
RUN sudo apt-get install -y nodejs
RUN ln -s /usr/bin/nodejs /usr/sbin/node

RUN node -v
RUN npm -v