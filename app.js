import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import router from "./routes/admin.route.js";
import product from "./routes/product.route.js";
import cate from "./routes/category.route.js";

const app= express();

app.set("view engine","ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({secret:"demo100"}))
app.use("/admin",router);
app.use("/product",product)
app.use("/category",cate);

app.listen(3002,()=>{
    console.log("Server started...");
});