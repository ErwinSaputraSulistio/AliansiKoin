import css from './styles.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
// ATOMS
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
// MOLECULES
import PasswordChecker from '../../molecules/PasswordChecker';
// IMAGES
import AK from '../../../assets/images/AK.png';

export default function RegisterOrganism() {
   const [registerInput, setRegisterInput] = useState({username: "", password: ""})
   // REGISTER FUNCTION
   const registerChange = (e) => {
      setRegisterInput({...registerInput, [e.target.name]: e.target.value})
   }
   const registerRequest = (e) => {
      e.preventDefault()
      if(registerInput.username.length < 6 || registerInput.username.length > 30) { Swal.fire("Gagal?!", "Membatalkan proses registrasi akun baru, username terlalu pendek atau kepanjangan!", "error") }
      else if(pw.length < 8) { Swal.fire("Gagal?!", "Membatalkan proses registrasi akun baru, password terlalu singkat!", "error") }
      else if(passwordStrength < 1) { Swal.fire("Gagal?!", "Membatalkan proses registrasi akun baru, password terlalu lemah!", "error") }
      else {
         axios.post(process.env.REACT_APP_AK_API + "/auth/register", registerInput, { header: {"Access-Control-Allow-Origin": "*"} })
         .then((res) => { 
            Swal.fire("Berhasil!", res.data.message, "success") 
            .then(() => { window.location = "/auth" })
         })
         .catch((err) => { Swal.fire("Gagal?!", err.response.data.message, "error") })
      }
   }
   // PASSWORD STRENGTH CHECKER
   const pw = registerInput.password
   const [lengthInPW, setLengthInPW] = useState(false)
   const [capitalInPW, setCapitalInPW] = useState(false)
   const [numberInPW, setNumberInPW] = useState(false)
   const twoFactorInPW = [capitalInPW, numberInPW]
   const checkAnyCapitalInPassword = (pass) => { return /[A-Z]/.test(pass) }
   const checkAnyNumberInPassword = (pass) => { return /[0-9]/.test(pass) }
   const passwordStrength = twoFactorInPW.filter((value) => value).length
   // USE EFFECT - CHECK PASSWORD STRENGH CHANGES
   useEffect(() => {
      // IF CONDITIONS ARE MET (true)
      pw.length >= 8 && setLengthInPW(true)
      checkAnyCapitalInPassword(pw) === true && setCapitalInPW(true)
      checkAnyNumberInPassword(pw) === true && setNumberInPW(true)
      // IF CONDITIONS ARE NOT MET (false)
      pw.length < 8 && setLengthInPW(false)
      checkAnyCapitalInPassword(pw) === false && setCapitalInPW(false)
      checkAnyNumberInPassword(pw) === false && setNumberInPW(false)
   }, [pw])
   // RETURN
   return(
      <form className={"displayColumn " + css.registerOrganism} onSubmit={ (e) => { registerRequest(e) } }>
         <div>
            <img src={AK} style={{width: "50%"}}/>
            <Input
               change={ (e) => { registerChange(e) } }
               classGap={css.registerGap}
               classInput={"defaultSmallText " + css.registerInput}
               classLabel={css.registerLabel}
               label="New Username"
               name="username"
               placeholder="Create your username here ..."
               type="text"
               value={registerInput.username}
            />
            <div className={"poppinsFont defaultSmallText"} style={registerInput.username === "" ? {visibility: "hidden"} : {textAlign: "left"}}>
               {
               registerInput.username.length < 6 ? <span style={{color: "indianred"}}>Name is too short</span>
               :
               registerInput.username.length > 30 ? <span style={{color: "indianred"}}>Name is too long</span>
               :
               <span style={{color: "#3CB371"}}>Name length is acceptable</span>
               }
            </div>
            <Input
               change={ (e) => { registerChange(e) } }
               classGap={css.registerGap}
               classInput={"defaultSmallText " + css.registerInput}
               classLabel={css.registerLabel}
               label="New Password"
               name="password"
               placeholder="Create your password here ..."
               type="password"
               value={registerInput.password}
            />
            <PasswordChecker length={lengthInPW} password={pw} strength={passwordStrength}/>
         </div>
         <Button 
            buttonBorder="0.1vw solid white" 
            buttonColor="#3CB371" 
            buttonName="Register" 
            customClass={"poppinsFont " + css.registerBtn} 
            textColor="white"
         />
      </form>
   )
}