FROM node:10-alpine

RUN mkdir -p /usr/src/services/api/node_modules && chown -R node:node /usr/src/services/api

WORKDIR /usr/src/services/api

COPY package*.json /usr/src/services/api/

ENV PATH /usr/src/services/api/node_modules/.bin:$PATH

USER root

RUN npm install --no-optional 
# && npm cache clean --force

COPY --chown=node:node . .

RUN npm run build-ts
RUN npm run serve

EXPOSE 4000

RUN source .env
