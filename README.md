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

# 🚀 Quick Start

Prerequisites: Java 17+, Node 18+, MySQL 8.0+, Maven 3.8+

Backend:

git clone https://github.com/yourusername/drive.git

cd drive/backend

# Create DB: CREATE DATABASE drive_db;

mvn spring-boot:run

Frontend:

cd frontend

npm install

npm start

Backend: http://localhost:8080

Frontend: http://localhost:3000

# 📁 Project Structure
drive/
├── backend/

│   ├── src/main/java/

│   └── pom.xml

└── frontend/

    ├── src/
    
    └── package.json

# 🗄 Database

CREATE TABLE files (

    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    
    file_name VARCHAR(255),
    
    file_type VARCHAR(50),
    
    file_size BIGINT,
    
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    file_path VARCHAR(500)
    
);

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


## 🔗 GitHub Instructions

1. Clone Repository

git clone https://github.com/rajnish-chauhan/drive.git

cd drive

2. Backend Setup

cd backend

Create MySQL DB

mysql -u root -p

CREATE DATABASE drive_db;

exit

Update src/main/resources/application.properties with DB credentials

mvn spring-boot:run

3. Frontend Setup

cd frontend

npm install

npm start

4. Access App

Backend: http://localhost:8080

Frontend: http://localhost:3000
