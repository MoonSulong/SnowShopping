# React & Firebase & Netlify E-commerce System
- Designed and implemented an interactive shopping page using React, React Router and Redux
![demo](https://raw.githubusercontent.com/MoonSulong/EventRecommendation/master/img/web.gif)

## Table of contents
- [React \& Firebase \& Netlify E-commerce System](#react--firebase--netlify-e-commerce-system)
  - [Table of contents](#table-of-contents)
  - [1. Project Description](#1-project-description)
  - [2. Infrastructure Design](#2-infrastructure-design)
  - [4. Database Implementation](#4-database-implementation)
  - [5. Design pattern](#5-design-pattern)
  - [Acknowledgement](#acknowledgement)

## 1. Project Description 
- Designed and implemented an interactive shopping page using React, React Router and Redux
- Utilized Firebase Authentication to ensure secure user registration, login, and account management
- Leveraged Firestore, a NoSQL document database, to improve real-time updates, scalability, and performance
- Deployed the application on Netlify with a CI/CD pipeline to ensure continuous availability and reliability
## 2. Infrastructure Design
- 3-tier architecture
   * Presentation tier: React
   * Data tier: Firebase
   * Logic tier: Javascript
- Deployment: Netlify

## 4. Database Implementation
- FireStore - NoSQL
   * **users** - store user information.
   * **items** - store item information.
   * **category** - store item-category relationship

## 5. Design pattern
   * **Observer pattern**: `onAuthStateChange`
   * **Context pattern**: `Provider`

## Acknowledgement
-  Project ideas credit to Yihua
