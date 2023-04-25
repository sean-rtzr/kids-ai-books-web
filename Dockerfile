FROM node:16.18.0

RUN mkdir -p /usr/src/kids-ai-books-web
WORKDIR /usr/src/kids-ai-books-web
COPY . .

RUN npm install -g pm2
RUN npm ci && npm cache clean --force
RUN npm run build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=32720

EXPOSE 32720 

ENTRYPOINT ["npm", "run", "start"]
