

const home = (req, res, ) => {
    res.render('index')
//   let user = getVariable();
//   try {
//     if (user) {
//       res.send(user);
//     } else {
//       console.log("hi");
//       throw new Error("User not found.");
//     }
//   } catch (err) {
//     next(err);
//     // throw Error("something wrong");
//   }
};
const userSubmit=(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const emailRegex=/^[A-z0-9._]+@[A-z0-9-]+\.[a-z]{2,3}$/
    const passwordRegex=/^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W)/
    if(!emailRegex.test(email)){
        return res.render('index',{
            msg:"Please enter valid email"
        })
    }
    else if(!passwordRegex.test(password)){
        return res.render('index',{
            msg:'password must be 6 digit long and Contain at least one digit,capital,small and special Character'
        })
    }
    else{
        return res.render('index',{
            msg:"Successfully Register"
        })
    }
    console.log(email,password);    
}
module.exports={home,userSubmit}