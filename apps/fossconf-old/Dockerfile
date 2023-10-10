FROM node:14-alpine

WORKDIR /app/

COPY package.json /app/
COPY package-lock.json /app/

RUN npm install

COPY .idea/ /app/.idea
COPY public/ /app/public
COPY src/ /app/src
COPY index.html /app/
COPY postcss.config.js /app/
COPY tailwind.config.js /app/
COPY vite.config.js /app/

EXPOSE 5173

CMD ["npm", "start"]