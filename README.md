# Credit Manager App Fullstack

Live demo:
<h>

AWS Link (frontend) : http://ec2-18-222-30-245.us-east-2.compute.amazonaws.com:3000/

AWS Link (backend-swagger) : http://ec2-18-222-30-245.us-east-2.compute.amazonaws.com:8080/swagger-ui.html

A very simple implementation of a credit loan application.

Admins can add credit score information from backend directly. Customers can apply for a credit loan using the ui component. The demo is deployed on AWS and docker images of services are [here](https://hub.docker.com/layers/emrebulbul23/generic-imgs/front5) and [here](https://hub.docker.com/layers/emrebulbul23/generic-imgs/credit-manager-app4). IT uses MongoDB as the database and can be accessed from port 27017 on localhost. Backend side is unit tested with JUnit5.

Tech Stack:
* Next.js React TypeScript
* Java
* Spring Boot
* MongoDB
* AWS

Features include:
* Add, update, get customer credit score.
* Apply for a credit loan.
* API Documentation with [OpenApi Swagger](https://swagger.io/).
* Frontend with [Next.js](https://nextjs.org/), [React](https://reactjs.org/), and [TypeScript](https://www.typescriptlang.org/)

Run on local with:
```
//frontend
 npm run build 
 npm start 
 
 // backend
 java -jar target/credit-manager-app-0.0.1-SNAPSHOT.jar
```

Demo national ids:
- 123
- 1234
- 12345
- 12345678

Missing features:
- i18n support,
- Input validation on ui side,
- ...
