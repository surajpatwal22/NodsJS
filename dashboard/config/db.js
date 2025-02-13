import mysql from 'mysql2';



const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'ksquiz_24122024',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const promisePool = pool.promise();
promisePool.getConnection()
  .then(connection => {
    console.log('Database connected successfully!');
    connection.release(); 
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });

export default promisePool;
