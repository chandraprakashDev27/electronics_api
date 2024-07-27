const mysql = require('mysql2');

// MySQL connection
const db = mysql.createConnection({
    host: 'gateway01.ap-southeast-1.prod.aws.tidbcloud.com',
    user: '4Briw6qhHbDVRai.root', // replace with your MySQL username
    password: 'jOwh11OI7YQTCeVL', // replace with your MySQL password
    database: 'electronics',
    port:"4000"
 // replace with your database name
});

// Uncomment if you want to check database connection
db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

module.exports={
    db
}