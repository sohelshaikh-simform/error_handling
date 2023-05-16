
const home = (req, res, ) => {
    res.render('index')
};

const userSubmit=(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const emailRegex=/^[A-z0-9._]+@[A-z0-9-]+\.[a-z]{2,3}$/
    const passwordRegex=/^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W)/
    // check email if not match Credential throw error
    if(!emailRegex.test(email)){
        // return res.render('index',{
        //     msg:"Please enter valid email"
        // })
        throw new Error("Please enter valid email");
    }
    
    // check password if not match credentail throw error
    else if(!passwordRegex.test(password)){
        // return res.render('index',{
        //     msg:'password must be 6 digit long and Contain at least one digit,capital,small and special Character'
        // })
        throw new Error ("password must be 6 digit long and Contain at least one digit,capital,small and special Character")
    }

    // if email and password valid then show Successfully register
    else{
        return res.render('index',{
            msg:"Successfully Register"
        })
    }
    console.log(email,password);    
}

module.exports={home,userSubmit}