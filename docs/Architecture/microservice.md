Yes. For Placely, you can structure the backend in a service-oriented / modular architecture, where each major domain has its own folder.

One important distinction: if everything runs inside one Node.js process, it's a modular monolith, not true microservices. You can start with this structure and later split each module into an independent service.

For your project, I'd recommend starting with this because it's much easier to develop and deploy.

Recommended Placely structure
server/
│
├── src/
│   │
│   ├── app.js
│   ├── server.js
│   │
│   ├── config/
│   │   ├── mongodb.js
│   │   ├── postgres.js
│   │   └── env.js
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   ├── error.middleware.js
│   │   └── rateLimit.middleware.js
│   │
│   ├── utils/
│   │   ├── ApiError.js
│   │   ├── ApiResponse.js
│   │   └── asyncHandler.js
│   │
│   ├── student/
│   │   ├── student.controller.js
│   │   ├── student.service.js
│   │   ├── student.routes.js
│   │   ├── student.model.js
│   │   └── student.validation.js
│   │
│   ├── auth/
│   │   ├── auth.controller.js
│   │   ├── auth.service.js
│   │   ├── auth.routes.js
│   │   ├── auth.validation.js
│   │   └── auth.middleware.js
│   │
│   ├── exam/
│   │   ├── exam.controller.js
│   │   ├── exam.service.js
│   │   ├── exam.routes.js
│   │   ├── exam.model.js
│   │   └── exam.validation.js
│   │
│   ├── question/
│   │   ├── question.controller.js
│   │   ├── question.service.js
│   │   ├── question.routes.js
│   │   └── question.model.js
│   │
│   ├── result/
│   │   ├── result.controller.js
│   │   ├── result.service.js
│   │   ├── result.routes.js
│   │   └── result.model.js
│   │
│   ├── leaderboard/
│   │   ├── leaderboard.controller.js
│   │   ├── leaderboard.service.js
│   │   └── leaderboard.routes.js
│   │
│   └── admin/
│       ├── admin.controller.js
│       ├── admin.service.js
│       └── admin.routes.js
│
├── .env
├── .gitignore
├── package.json
└── README.md
How a request flows

For example:

POST /api/students
        │
        ▼
student.routes.js
        │
        ▼
student.controller.js
        │
        ▼
student.service.js
        │
        ▼
student.model.js
        │
        ▼
MongoDB

The controller should not contain your database/business logic.

For example:

// student.routes.js


router.post("/", createStudent);
// student.controller.js


export const createStudent = async (req, res) => {
    const student = await studentService.createStudent(req.body);


    res.status(201).json({
        success: true,
        data: student
    });
};
// student.service.js


export const createStudent = async (data) => {
    // validation/business logic
    // database operation


    return Student.create(data);
};

This separation becomes very useful as Placely grows.

Where MongoDB and PostgreSQL fit

You can have different databases for different domains.

For example:

                    Placely Backend
                          │
       ┌──────────────────┼──────────────────┐
       │                  │                  │
       ▼                  ▼                  ▼
    Student             Exam              Result
       │                  │                  │
       ▼                  ▼                  ▼
   MongoDB           PostgreSQL         PostgreSQL

I would structure it approximately like:

student/
   ├── controller
   ├── service
   ├── routes
   ├── model
   └── validation


exam/
   ├── controller
   ├── service
   ├── routes
   ├── model
   └── validation
But don't create a separate database connection inside every folder

Instead:

src/
├── config/
│   ├── mongodb.js
│   └── postgres.js
│
├── student/
│   └── student.model.js
│
└── exam/
    └── exam.model.js

The modules use the appropriate database connection.

If you want TRUE microservices

Then the structure is different.

Instead of:

server/
└── src/
    ├── student/
    ├── exam/
    ├── result/
    └── admin/

you would have:

placely/
│
├── api-gateway/
│   ├── src/
│   └── package.json
│
├── student-service/
│   ├── src/
│   │   ├── controller/
│   │   ├── service/
│   │   ├── routes/
│   │   ├── model/
│   │   └── app.js
│   └── package.json
│
├── exam-service/
│   ├── src/
│   │   ├── controller/
│   │   ├── service/
│   │   ├── routes/
│   │   ├── model/
│   │   └── app.js
│   └── package.json
│
├── result-service/
│   ├── src/
│   └── package.json
│
├── leaderboard-service/
│   ├── src/
│   └── package.json
│
└── docker-compose.yml

Then each service is an independent Node.js application:

                    Client
                      │
                      ▼
                API Gateway
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
 Student Service  Exam Service  Result Service
        │             │             │
        ▼             ▼             ▼
    MongoDB       PostgreSQL     PostgreSQL

For communication, services can use:

HTTP/REST
       or
Message Queue
       │
       ├── RabbitMQ
       └── Kafka

And for your mock exam's high concurrency, Redis can sit alongside the exam service:

                  Exam Service
                       │
              ┌────────┴────────┐
              ▼                 ▼
            Redis           PostgreSQL
       active exam state    permanent data
       timer/cache          results/attempts
What I'd recommend for you

Don't jump directly into 6–7 microservices.

For a college project like Placely, start with a modular monolith:

server/
└── src/
    ├── student/
    ├── auth/
    ├── exam/
    ├── question/
    ├── result/
    ├── leaderboard/
    └── admin/

Keep each module independent internally.

Once the project grows, you can extract:

student → student-service
exam → exam-service
result → result-service
leaderboard → leaderboard-service