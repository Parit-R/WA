import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'signup',
    port: 3307
});

app.post('/Register', (req, res) => {
    console.log(req.body);
    const checkEmail = "SELECT * FROM login WHERE email = ?";
    db.query(checkEmail, [req.body.email], (err, data) => {
        if (err) {
            console.error("MySQL Error: ", err);
            return res.status(500).json({ error: err.message });
        }
        if (data.length > 0) {
            return res.json({ Error: "Email already exists" });
        }
        const sql = "INSERT INTO login (name, email, password) VALUES (?, ?, ?)";
        bcrypt.hash(req.body.password.toString(), 10, (err, hash) => {
            if (err) return res.json({ Error: "Error hash" });
            const values = [
                req.body.name,
                req.body.email,
                hash
            ]
            db.query(sql, values, (err, result) => {
                if (err) {
                    console.error("MySQL Error: ", err);
                    return res.status(500).json({ error: err.message });
                }
                return res.json({ message: "Register Success", Status: "Success", result });
            });
        });
    });
});

app.post('/add', (req, res) => {
   console.log(req.body);
    const values = [
                req.body.name,
                req.body.text,
                req.body.url
            ]
    const sql = "INSERT INTO data (name, text, url) VALUES (?, ?, ?)";
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error("MySQL Error: ", err);
            return res.status(500).json({ error: err.message });
        }
       return res.json({ message: "Register Success", Status: "Success", data });
    });
});

app.get("/About", (req, res) => {
  db.query("SELECT * FROM data ORDER BY name ASC", (err, result) => {
    if (err) return res.json({ error: err });
    return res.json(result);
  });
});
app.post('/Login', (req, res) => {
    console.log(req.body);
    const sql = "SELECT * FROM login WHERE email = ?";
    db.query(sql, [req.body.email], (err, data) => {
        if (err) {
            console.error("MySQL Error: ", err);
            return res.status(500).json({ error: err.message });
        }
        if (data.length > 0) {//เจอ
            bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
                if (err) return res.json({ Error: "Password compare Error" });
                if (response) {
                    const name = data[0].name;
                    const token = jwt.sign({name}, "jwt-key", {expiresIn: '1d'});
                    res.cookie('token', token);
                    return res.json({ Status: "Success" });
                } else {
                    return res.json({ Error: "Password not mach" });
                }
            })
        } else {//ไ่่เจอ
            return res.json({ Error: "This Email not Exit" });
        }
    });
});

app.listen(8081, () => {
    console.log("Server running on port 8081");
});
