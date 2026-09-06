FROM python:3.12-alpine

WORKDIR /app

COPY runner.sh /runner.sh

RUN chmod +x /runner.sh

ENTRYPOINT ["/runner.sh"]