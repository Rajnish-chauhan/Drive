Drive - Personal File Storage System

Full-stack file manager with React, Spring Boot & MySQL. Upload, search, download & delete PDF/text files.

# ✨ Features

File Upload (PDF, TXT)

File Search by name

File Download

File Delete

Responsive UI

# 🛠 Tech Stack

Frontend: React, HTML, CSS, JS

Backend: Java 17+, Spring Boot

Database: MySQL 8.0

Build: Maven

Git/GitHub


# 📁 Project Structure
drive/
├── backend/

│   ├── src/main/java/

│   └── pom.xml

└── frontend/

    ├── src/
    
    └── package.json


# 🔍 API Endpoints

| Method | Endpoint                    | Description   |
| ------ | --------------------------- | ------------- |
| POST   | /api/files/upload           | Upload file   |
| GET    | /api/files                  | List files    |
| GET    | /api/files/search?q={query} | Search files  |
| GET    | /api/files/{id}/download    | Download file |
| DELETE | /api/files/{id}             | Delete file   |

# 🌐 Future Plans

DOCX, PPTX, JPG, PNG support

AWS S3/GCP/Azure integration

File sharing

Folders

File preview

🔒 Security

File type validation

Size limits

SQL injection protection


# 🚀 Quick Start

Prerequisites: Java 17+, Node 18+, MySQL 8.0+, Maven 3.8+

Backend:

git clone https://github.com/rajnish-chauhan/drive.git

cd drive/backend

Create DB: CREATE DATABASE drive_db;

mvn spring-boot:run

Frontend:

cd frontend

npm install

npm start

Backend: http://localhost:8080

Frontend: http://localhost:3000
