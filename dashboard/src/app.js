import express from 'express'; 
import adminRouter from './routes/admin.js';
import path from "path";
import { fileURLToPath } from "url";
import session from 'express-session';

const app = express();

const PORT = process.env.PORT||3000 ;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "..", "public")));
// console.log("Static files are served from:", path.join(__dirname, "..", "public"));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'your-secret-key', 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));

app.use('/admin', adminRouter);
// app.use('/user', userRouter);


app.get('/', (req, res) => {
    res.render('frontend/index');
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });