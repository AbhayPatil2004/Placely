FROM eclipse-temurin:21-jdk


WORKDIR /app

COPY runner.sh /runner.sh
RUN chmod +x /runner.sh

ENTRYPOINT [ "/runner.sh" ]