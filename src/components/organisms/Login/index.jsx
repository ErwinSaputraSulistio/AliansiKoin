import css from './styles.module.css';
import { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';
// ATOMS
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
// IMAGES
import AK from '../../../assets/images/AK.png';

export default function LoginOrganism() {
   const history = useHistory()
   const [loginInput, setLoginInput] = useState({username: null, password: null})
   // LOGIN FUNCTION
   const loginChange = (e) => {
      setLoginInput({...loginInput, [e.target.name]: e.target.value})
   }
   const loginRequest = (e) => {
      e.preventDefault()
      axios.post(process.env.REACT_APP_AK_API + "/auth/login", loginInput, { header: {"Access-Control-Allow-Origin": "*"} })
      .then((res) => { 
         localStorage.setItem("token", res.data.token)
         Swal.fire("Berhasil!", res.data.message, "success")
         .then(() => { history.push("/") })
      })
      .catch((err) => { 
         Swal.fire("Gagal?!", err.response.data.message, "error") 
      })
   }
   // RETURN
   return(
      <form className={"displayColumn " + css.loginOrganism} onSubmit={ (e) => { loginRequest(e) } }>
         <div>
            <img src={AK} style={{width: "50%"}}/>
            <Input
               change={ (e) => { loginChange(e) } }
               classGap={css.loginGap}
               classInput={"defaultSmallText " + css.loginInput}
               classLabel={css.loginLabel}
               label="Username"
               name="username"
               placeholder="Input your username here ..."
               type="text"
               value={loginInput.username}
            />
            <Input
               change={ (e) => { loginChange(e) } }
               classGap={css.loginGap}
               classInput={"defaultSmallText " + css.loginInput}
               classLabel={css.loginLabel}
               label="Password"
               name="password"
               placeholder="Input your password here ..."
               type="password"
               value={loginInput.password}
            />
         </div>
         <Button 
            buttonBorder="0.1vw solid white" 
            buttonColor="#3CB371" 
            buttonName="Login" 
            customClass={"poppinsFont " + css.loginBtn} 
            textColor="white"
         />
      </form>
   )
}