import css from './styles.module.css';
// ATOMS
import Button from '../../atoms/Button';

export default function LoginRegisterSwitch({ auth, login, register }) {
   return(
      <div className={"displayRow " + css.loginRegisterSwitchBorder}>
         <div className={css.loginRegisterSwitchAnimation} auth={auth}/>
         <Button 
            buttonBorder="none" 
            buttonColor="transparent" 
            buttonName="Login" 
            clickFunction={login} 
            customClass={"poppinsFont " + css.loginBtn} 
            textColor={auth === "Login" ? "white" : "#3CB371"}
         />
         <Button 
            buttonBorder="none" 
            buttonColor="transparent" 
            buttonName="Register" 
            clickFunction={register} 
            customClass={"poppinsFont " + css.registerBtn} 
            textColor={auth === "Register" ? "white" : "#3CB371"}
         />
      </div>
   )
}