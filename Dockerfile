FROM madnificent/ember:4.12.1-node_18 as builder

LABEL maintainer="info@redpencil.io"

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN ember build -prod

FROM semtech/static-file-service

# ENV STATIC_FOLDERS_REGEX "^/(assets|font|files)/"

ENV EMBER_AUTHORIZATION_KIND="on"

COPY --from=builder /app/dist /data
