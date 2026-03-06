# Step 1: Base image select karein (Java version ke hisaab se)
FROM eclipse-temurin:21

# Step 2: Container ke andar ek folder banayein
# WORKDIR /app

# Step 3: Apni JAR file ko container mein copy karein
COPY target/Drive-0.0.1-SNAPSHOT.jar app.jar

# Step 4: Application ko run karne kr"]i command
ENTRYPOINT ["java","-jar","app.jar"]