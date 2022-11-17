import { useState } from "react";
import "./App.css";
import Button from "./components/BUTTON/Button";
import Form from "./components/form/Form";
import Input from "./components/input/Input";
function App() {

const[user, setUser]=useState({name:"",password:""});

const handleChange=(e)=>{

  if (e.target.type==="text") {
    setUser({ ...user,name:e.target.value});
  console.log(user);

  }
    else if (e.target.type==="password"){

    setUser({ ...user,password:e.target.value});
  console.log(user);

  }
  

}
const handleClick=()=>{

if (user.name==="") {
  alert("kullanıcı adı giriniz");
}
else if (user.password==="") {
  alert("şifre giriniz");
}
 else {
  alert("kullanıcı adınız "+user.name+" "+"şifreniz "+user.password);
}

}
  return (
  <div className="App"> 
  
  <Form>
  <h6 className="display-1" >Giriş formu</h6>
  <Input type={"text"}
   value={user.name} 
   placeHolder={"kullanıcı adınızı giriniz:"}
    onChange={handleChange} /> 
  <Input
   type={"password"} 
   placeHolder={"şifrenizi giriniz:"}  
    value={user.password} 
onChange={handleChange}
/> 
  <br/>
 <Button onClick={
handleClick
}
 />
 </Form>


 
    </div>
  )
}

export default App;
