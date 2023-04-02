import express from "express";

const userRouter = express.Router();

userRouter.use((req, res, next) => {
  console.log('handler users');
  next();
})

userRouter.post('/login', (req, res, next) => {
  res.send('login')
})

userRouter.post('/register', (req, res, next) => {
  res.send('register')
})

export { userRouter };