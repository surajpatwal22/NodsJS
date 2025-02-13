// src/middleware/auth.js
const adminAuth = (req, res, next) => {
    if (req.path.startsWith('/auth')) {
      return next();
    }
  
    if (req.session && req.session.user) {
      return next();
    }
  
    return res.redirect('/admin/auth/login');
  };
  
  export default adminAuth;
  