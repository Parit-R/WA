import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'signup',
    port: 3307
});

app.post('/SignIn', (req, res) => {
    console.log(req.body);
    const sql = "INSERT INTO login (name, email, password) VALUES (?, ?, ?)";
    db.query(sql, [req.body.name, req.body.email, req.body.password], (err, result) => {
        if (err) {
            console.error("MySQL Error: ", err);
            return res.status(500).json({ error: err.message });
        }
        return res.json({ message: "Sign In success", result });
    });
});

app.post('/Login', (req, res) => {
    console.log(req.body);
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            console.error("MySQL Error: ", err);
            return res.status(500).json({ error: err.message });
        }
        if (data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("fail");
        }
    });
});

app.listen(8081, () => {
    console.log("Server running on port 8081");
});
