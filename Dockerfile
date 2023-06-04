FROM node:20-alpine3.17

WORKDIR /app

COPY package.json /app/
COPY tsconfig.json /app/
RUN npm install
COPY . /app/

EXPOSE 8080

RUN npx tsc
CMD ["npm", "run", "start"]