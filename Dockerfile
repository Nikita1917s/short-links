FROM node:16-alpine AS ui-build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 3000

# COPY ./dist ./dist
# RUN npm run client:build
CMD [ "node", "app.js" ]
