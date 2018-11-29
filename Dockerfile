# base image
FROM node:9.6.1

COPY . /app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
# COPY src /usr/src/app/src
# COPY public /usr/src/app/public

# set working directory
WORKDIR /app

# install and cache app dependencies
RUN npm install
RUN npm install react-scripts@1.1.1 -g

# start app
CMD ["npm", "run build"]