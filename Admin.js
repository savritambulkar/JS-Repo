import pool from "../Database/Datacon.js"
export default class Admin{
     constructor(id,email,password){
        this.id=id
        this.email=email
        this.password=password
     }


validation(){
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
            if(!err){
             let sql="select * from Login WHERE  email = ? AND password =?";
             con.query(sql,[this.email , this.password],(err,result)=>{
                con.release();
                if(!err){
                    resolve(result)
                }
                else{
                    reject(err);
                }
             })
            }
             else{
                reject(err);
            }
        })
    })
}
}