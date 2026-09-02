Step 1: Create a Prisma Client

src/config/prisma.js

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = prisma;
Step 2: Example User Model

prisma/schema.prisma

model User {
  id        String   @id @default(cuid())
  name      String
  email     String   @unique
  password  String
  createdAt DateTime @default(now())
}

Run:

npx prisma db push
npx prisma generate
CREATE
const prisma = require("../config/prisma");

const createUser = async (req, res) => {
    try {
        const user = await prisma.user.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
        });

        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
READ ALL
const getUsers = async (req, res) => {
    const users = await prisma.user.findMany();

    res.json(users);
};
READ ONE
const getUser = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.params.id
        }
    });

    res.json(user);
};

Find by email:

const user = await prisma.user.findUnique({
    where: {
        email: "abc@gmail.com"
    }
});
UPDATE
const updateUser = async (req, res) => {
    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name
        }
    });

    res.json(user);
};

Update multiple fields:

await prisma.user.update({
    where: {
        id: req.params.id
    },
    data: {
        name: "Abhay",
        password: "newpassword"
    }
});
DELETE
const deleteUser = async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    });

    res.json({
        message: "User Deleted"
    });
};
Routes
const express = require("express");
const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
Common Prisma Queries
Find with condition
const users = await prisma.user.findMany({
    where: {
        name: "Abhay"
    }
});
Select specific fields
const users = await prisma.user.findMany({
    select: {
        id: true,
        name: true,
        email: true
    }
});
Pagination
const users = await prisma.user.findMany({
    skip: 0,
    take: 10
});
Order By
const users = await prisma.user.findMany({
    orderBy: {
        createdAt: "desc"
    }
});
Recommended Folder Structure for Placely
server/
│
├── prisma/
│   └── schema.prisma
│
├── src/
│   ├── config/
│   │   └── prisma.js
│   ├── controllers/
│   │   └── user.controller.js
│   ├── services/
│   │   └── user.service.js
│   ├── routes/
│   │   └── user.routes.js
│   ├── middleware/
│   ├── utils/
│   ├── app.js
│   └── server.js
│
├── .env
├── package.json
└── prisma.config.ts