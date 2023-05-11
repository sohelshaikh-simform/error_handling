const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 8000;
const path=require('path')
const errorhandle = require("./utils/errohandle");
const useRouter=require('./route/user')


app.set("view engine","ejs");
app.set('views',path.join(__dirname,"views"))

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))
app.use('/',useRouter)
// const getVariable = () => {
//   return "sohel";
// };


// app.get("/", (req, res, next) => {
//   let user = getVariable();
//   try {
//     if (user) {
//       res.send(user);
//     }
//     else{
//         console.log("hi");
//         throw new Error("User not found.")
//     }
//   } catch(err) {
//     next(err);
//     // throw Error("something wrong");
//   }
// });
app.use('/',errorhandle);
app.listen(port, () => {
  console.log("app is listening on port 9000");
});
