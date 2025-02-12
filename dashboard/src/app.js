import express from 'express'; 
import adminRouter from './routes/admin.js';
import userRouter from './routes/user.js';

const app = express();

const PORT = process.env.PORT||3000 ;

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.urlencoded({ extended: true }));

app.use('/admin', adminRouter);
app.use('/user', userRouter);


app.get('/', (req, res) => {
    res.render('frontend/index');
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });