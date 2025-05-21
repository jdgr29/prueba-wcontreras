import mysql from "mysql";

export const dbconnection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"daniel123",
    database:"prueba",
})

// const connection = dbconnection.query("SELECT * FROM products", (err, fields, rows)=> {
//     if(err) {
//         console.error("error connection db", err, JSON.stringify(err));
//     }
//     console.log("db info", fields) //INFO;
// });





console.log("my", mysql);