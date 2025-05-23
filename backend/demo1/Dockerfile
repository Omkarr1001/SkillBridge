# Stage 1: Build the app
FROM maven:3.9.4-eclipse-temurin-21 AS build

WORKDIR /app/backend/demo1

COPY backend/demo1/ .

RUN mvn clean package -DskipTests

# Stage 2: Run the app
FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY --from=build /app/backend/demo1/target/demo1-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]
