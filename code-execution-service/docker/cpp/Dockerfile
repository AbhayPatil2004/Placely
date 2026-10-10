FROM gcc:latest

WORKDIR /app

COPY runner.sh /runner.sh

RUN chmod +x /runner.sh

ENTRYPOINT ["/runner.sh"]