#version define
FROM node:18-alpine

#set the working director inside container
WORKDIR /app

#copying package.json and package-lock.json inside container
COPY package*.json ./

#npm install
RUN npm install

COPY . .


EXPOSE 3000

#run command
CMD [ "npm", "run", "dev" ]