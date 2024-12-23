import express from 'express';
import pkg from 'body-parser'; // Correct import for CommonJS module
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config(); // Correct import for `dotenv`

const { json } = pkg; // Destructure `json` from the default export of body-parser

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(json());

app.post('/students', async (req, res) => {
    try {
      const { student_name, cohort, courses, date_joined, last_login, status } = req.body;
  
      const newStudent = await prisma.students.create({
        data: {
          student_name,
          cohort,
          courses,
          date_joined,
          last_login,
          status,
        },
      });
  
      res.status(201).json(newStudent);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

app.get('/students', async (req, res) => {
  try {
    const  students= await prisma.students.findMany();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// app.put('/users/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, email } = req.body;
//     const user = await prisma.user.update({
//       where: { id: parseInt(id) },
//       data: { name, email },
//     });
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.delete('/users/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     await prisma.user.delete({ where: { id: parseInt(id) } });
//     res.status(204).send();
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
