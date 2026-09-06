FROM node:22-alpine

WORKDIR /app

# COPY code.js /app/code.js
COPY runner.sh /runner.sh

RUN chmod +x /runner.sh

ENTRYPOINT ["/runner.sh"]