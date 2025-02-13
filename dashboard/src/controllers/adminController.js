import db from '../../config/db.js';
export const showLoginPage = (req, res) => {
    res.render('admin/auth/login');
  };


  export const login = async (req, res) => {
    const { email, password } = req.body;
    
    try {
      const [rows] = await db.execute(
        'SELECT * FROM users WHERE email = ? AND passwordtext = ?',
        [email, password]
      );
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

  
  