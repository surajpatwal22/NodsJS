import db from '../../config/db.js';
export const showLoginPage = (req, res) => {
    res.render('admin/auth/login');
  };

  export const showRegisterPage = (req, res) => {
    res.render('admin/auth/register');
  };

  export const register = async (req, res) => {
    const { username, email, password } = req.body;
    
    try {
      const [rows] = await db.execute(
        `INSERT INTO users (name, email, password)
         SELECT ?, ?, ? FROM DUAL
         WHERE NOT EXISTS (SELECT 1 FROM users WHERE email = ?)`,
        [username, email, password, email]
      );
      
      if (rows.affectedRows === 0) {
        return res.render('admin/auth/register', { error: 'Email already exists' });
      } else {
        return res.render('admin/auth/login', { success: 'User registered successfully' });
      }
    } catch (err) {
      console.error(err);
      return res.render('admin/auth/register', { error: 'Something went wrong' });
    }
  };
  
  export const login = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    
    try {
      const [rows] = await db.execute(
        'SELECT * FROM users WHERE email = ? AND passwordtext = ?',
        [email, password]
      );
      // console.log(rows);
      if (rows.length > 0) {
        req.session.user = { id: rows[0].id, username: rows[0].email };
        console.log(rows);
        return res.redirect('/admin/dashboard');
      } else {
        return res.render('admin/auth/login', { error: 'Invalid credentials' });
      }
    } catch (err) {
      console.error(err);
      return res.render('admin/auth/login', { error: 'Something went wrong' });
    }
  };

  export const showDashboard = (req, res) => {
    res.render('admin/index');
  };

  
  