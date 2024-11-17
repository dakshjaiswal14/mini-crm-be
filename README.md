# Mini CRM Backend (Please switch to master branch for source code)

Welcome to the backend repository for the Mini CRM & Campaign Management App! This project was developed as part of the Xeno SDE Internship assignment. The backend provides APIs for customer data ingestion, audience segmentation, campaign management, and message delivery with a focus on scalability and efficiency.

---

## 🚀 Features

### 1. **Data Ingestion API**
- Accepts and stores customer and order data in the database.
- Validates data and pushes it to a message broker for scalability.
- Demonstrated using Postman for seamless testing.

### 2. **Audience & Campaign Management**
- Define audience segments using complex conditions (e.g., AND/OR logic, customer spending, and visit frequency).
- Calculate audience size before saving a segment.
- View campaign history and statistics on a dedicated page.

### 3. **Message Delivery**
- Save audience data in the `communications_log` table.
- Send personalized messages (e.g., "Hi [Name], here’s 10% off on your next order!").
- Integrates a delivery receipt API with random statuses (90% SENT, 10% FAILED) to update message delivery statuses in the database.
- Batch updates for database efficiency using a pub-sub model.

---


## ⚙️ Tech Stack
- **Backend**: Node.js with Express.js & Typescript
- **Database**: MySQL
- **Pub/Sub** : Redis Cloud 
- **Authentication**: Clerk

---

## 📂 API Endpoints Sheet -> https://docs.google.com/spreadsheets/d/19ib9i5n7d3F5N1tKb7QAipsAUh-ata1L/edit?usp=sharing&ouid=112657696824750535318&rtpof=true&sd=true

### Base URL: `https://mini-crm-be.onrender.com`
