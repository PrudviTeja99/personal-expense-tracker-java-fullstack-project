FROM openjdk:21-jdk-slim
WORKDIR /app
COPY target/*.jar app.jar
ENV SERVER_PORT=8080
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]