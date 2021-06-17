import css from './styles.module.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
// MOLECULES
import LoginRegisterSwitch from '../../molecules/LoginRegisterSwitch';
// ORGANISMS
import Login from '../../organisms/Login';
import Register from '../../organisms/Register';

export default function Auth() {
   const history = useHistory()
   const [authIs, switchAuthTo] = useState("Login")
   useEffect(() => { 
      localStorage.getItem("token") !== null && Swal.fire("Hmm?!", "Anda sudah login, jika ingin ganti akun harap logout dulu!", "warning").then(() => { history.push("/") })
      document.title = "Aliansi Koin" + (authIs === "Login" ? " - Login" : authIs === "Register" ? " - Register" : null)
   }, [authIs]);
   return(
      <div className={"displayColumn showInAnimation " + css.authTemplate}>
         <LoginRegisterSwitch 
            auth = { authIs }
            login = { () => { switchAuthTo("Login") } } 
            register = { () => { switchAuthTo("Register") } }
         />
         <div className={css.authFormArea} auth={authIs}>
               <div class={css.authFormInside}>
                  <div class={css.authLoginSide}>
                     <Login/>
                  </div>
                  <div class={css.authRegisterSide}>
                     <Register/>
                  </div>
               </div>
         </div>
      </div>
   );
}