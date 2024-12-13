import Admin from "../model/Admin.js";

export const dashboardPageAction = (request,response,next)=>{
   response.render('dashboard.ejs');
}

export const signInPage = (request,response,next)=>{
    response.render("signin.ejs");
};
export const signInAction = (request,response,next)=>{
    let {email,password} = request.body;
    let admin = new Admin(null,email,password); 
    admin.validation()
    .then(result=>{
      if(result.length!=0){
        request.session.currentUsereemail = result[0].email;
        request.session.currentUserpassword = result[0].password;
        request.session.isLoggedIn = true;
        response.redirect("/admin/dashboard");
      } 
      else
        response.redirect("/admin/sign-in");  
    }).catch(err=>{
      console.log(err);
    });
}
