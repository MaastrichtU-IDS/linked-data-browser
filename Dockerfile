## Build the website
FROM node:12

# Should only reinstall npms if package.json or yarn.lock change
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn && mkdir /webapp && mv ./node_modules ./webapp

WORKDIR /webapp
COPY . .

# Artifacts goes to /build folder
RUN yarn build

CMD ["yarn", "start"]

EXPOSE 5000


# ## Deploy the website using nginx
#FROM node:12 as builder
# FROM nginx:1.17.7-alpine

# # Copy our default nginx config
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# # Copy build folder from 'builder' to the default nginx public folder
# RUN rm -rf /usr/share/nginx/html/*
# COPY --from=builder /webapp/web-build/ /usr/share/nginx/html

# CMD ["nginx", "-g", "daemon off;"]
