import express from 'express';
import pkg from 'body-parser'; 
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config(); 

const { json } = pkg; 

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



// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
