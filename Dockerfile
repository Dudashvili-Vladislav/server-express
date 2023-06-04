# FROM node:12
FROM node:12.22.6-alpine3.11

# RUN apk --no-cache --update --virtual build-dependencies add \
#     python \
#     make \
#     g++ \
#     py3-pip

WORKDIR /app

COPY package.json /app/
COPY tsconfig.json /app/
RUN npm install
COPY . /app/

EXPOSE 8080

RUN npx tsc
CMD ["npm", "run", "start"]