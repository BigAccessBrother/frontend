# base image
FROM node:9.6.1

COPY package.json /app/package.json

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# set working directory
WORKDIR /app

# install and cache app dependencies
RUN npm install
RUN npm install react-scripts@1.1.1 -g

COPY . /app

RUN npm run build