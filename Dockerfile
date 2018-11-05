FROM node:8-alpine

RUN apk update --no-cache
RUN apk add tzdata
RUN apk add git
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /home/app
RUN mkdir -p /home/app/exports

RUN npm config set registry=https://registry.npm.taobao.org
COPY package.json /home/app/package.json
COPY package-lock.json /home/app/package-lock.json
RUN cd /home/app && \
    npm install --production

COPY client /home/app/client
COPY server /home/app/server
COPY common /home/app/common

CMD node .
