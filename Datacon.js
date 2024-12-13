import mysql from "mysql2";

const pool = mysql.createPool({
    user: "root",
    password: "mtpkjn@999",
    database: "admindata",
    host: "localhost"
});

export default pool;