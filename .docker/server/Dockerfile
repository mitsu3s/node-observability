FROM node:22

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm install -g ts-node typescript

EXPOSE 9010

CMD ["ts-node", "--require", "./tracing/tracing.ts", "server/server.ts"]
