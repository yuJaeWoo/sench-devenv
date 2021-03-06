FROM node:alpine

COPY ./package.json ./


RUN npm install --save --legacy-peer-deps

RUN sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 443 -j REDIRECT --to-port 4000
RUN sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 4000

COPY ./ ./

#nodemon 사용
CMD ["npm", "start"]