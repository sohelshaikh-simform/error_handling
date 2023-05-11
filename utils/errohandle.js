// const errorhandle = (err, req, res, next) => {
//   res.status(404).send(err.message);
// };
const errorhandle=(req,res)=>{
    const email=req.body.email;
      const password=req.body.password;
      const emailRegex=/^[A-z0-9._]+@[A-z0-9-]+\.[a-z]{2,3}$/
      const passwordRegex=/^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W)$/
      if(!emailRegex.test(email)){
          return res.render('index',{
              msg:"Please enter valid email"
          })
      }
      if(!passwordRegex.test(password)){
          return res.render('index',{
              msg:'password must be 6 digit long and Contain at least one digit,capital,small and special Character'
          })
      }
      res.render('index',{
          msg:"Successfully Register"
      })
      console.log(email,password);    
  }
  
  module.exports = errorhandle;
  