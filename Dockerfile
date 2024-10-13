# Estágio de build
FROM node:20 as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Estágio de produção
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

# Se você tiver uma configuração personalizada do nginx, descomente a linha abaixo
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
