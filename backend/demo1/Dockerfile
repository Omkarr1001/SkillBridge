# Stage 1: Build the app
FROM maven:3.8.5-openjdk-17 AS build

# Set working directory to where the pom.xml exists
WORKDIR /app/backend/demo1

# Copy only the backend/demo1 folder contents into the container
COPY backend/demo1/ .

# Build the project skipping tests
RUN mvn clean package -DskipTests

# Stage 2: Run the app
FROM openjdk:17-jdk-slim

WORKDIR /app

# Copy the jar from the build stage
COPY --from=build /app/backend/demo1/target/demo1-0.0.1-SNAPSHOT.jar app.jar

# Run the jar
ENTRYPOINT ["java", "-jar", "app.jar"]
