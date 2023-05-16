const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 8000;
const path=require('path')
const errorhandle = require("./utils/errorhandle");
const useRouter=require('./route/user')


app.set("view engine","ejs");
app.set('views',path.join(__dirname,"views"))

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))
app.use('/',useRouter)

app.use('/',errorhandle);
app.listen(port, () => {
  console.log("app is listening on port 9000");
});
