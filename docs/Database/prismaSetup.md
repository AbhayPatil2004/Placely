Architecture
Client (Next.js)
       │
       ▼
Express.js Backend
       │
   Prisma ORM
       │
Neon PostgreSQL
Step 1: Create a Neon Database
Go to https://neon.tech
Sign in with GitHub.
Click Create Project.
Choose:
Project Name: placely
Region: closest to your users (e.g., Mumbai/Singapore)
After creation, copy the connection string.

It looks like:

postgresql://username:password@ep-xxxxx.ap-southeast-1.aws.neon.tech/placely?sslmode=require
Step 2: Install Prisma
npm install prisma @prisma/client

Initialize Prisma:

npx prisma init

This creates:

prisma/
    schema.prisma

.env
Step 3: Add Neon URL

In .env

DATABASE_URL="postgresql://username:password@ep-xxxx.neon.tech/placely?sslmode=require"
Step 4: Configure Prisma

prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
Step 5: Create Your First Model

Example:

model User {
  id        String   @id @default(cuid())
  name      String
  email     String   @unique
  password  String
  createdAt DateTime @default(now())
}
Step 6: Push Schema to Neon

Instead of using a local database:

npx prisma db push

This creates the tables directly in Neon.

Step 7: Generate Prisma Client
npx prisma generate
Step 8: Create Prisma Instance
src/
    config/
        prisma.js
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = prisma;
Step 9: Use in Express

Example:

const prisma = require("../config/prisma");

const users = await prisma.user.findMany();

console.log(users);

Create a user:

await prisma.user.create({
    data: {
        name: "Abhay",
        email: "abhay@gmail.com",
        password: "123456"
    }
});
Step 10: Run the Server
npm run dev

If everything is configured correctly, your backend connects directly to Neon.

Step 11: View Data

You can:

Use the Neon Dashboard to browse tables.
Or use Prisma Studio:
npx prisma studio

This opens a browser UI to view and edit your database.

Typical Backend Folder Structure
server/
│
├── prisma/
│   └── schema.prisma
│
├── src/
│   ├── config/
│   │     prisma.js
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── models/
│   ├── app.js
│   └── server.js
│
├── .env
├── package.json
└── README.md
Useful Prisma Commands
# Initialize Prisma
npx prisma init

# Push schema to Neon
npx prisma db push

# Create migration (recommended for production)
npx prisma migrate dev --name init

# Generate Prisma Client
npx prisma generate

# Open database UI
npx prisma studio

# Reset database (development only)
npx prisma migrate reset
db push vs migrate
Development / quick prototyping: npx prisma db push
Team projects and production (recommended for Placely): npx prisma migrate dev to create versioned migrations, then apply them in production with npx prisma migrate deploy.