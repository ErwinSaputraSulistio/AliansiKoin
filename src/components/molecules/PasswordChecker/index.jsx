import css from './styles.module.css'

export default function PasswordChecker({ length, password, strength }) {
   // RETURN
   return(
      <div>
         <div className={"displayRow " + css.passwordStrengthZone} style={ 
            password === "" ? {visibility: "hidden"}
            :
            null
         }>
            <div 
               style={
                  length === true && strength === 0 ? {background: "indianred"}
                  :
                  length === true && strength === 1 ? {background: "yellow"}
                  :
                  length === true && strength === 2 ? {background: "#3CB371"}
                  :
                  null
               }
               className={css.passwordStrengthBorder}
            />
            <div 
               style={
                  length === true && strength === 1 ? {background: "yellow"}
                  :
                  length === true && strength === 2 ? {background: "#3CB371"}
                  :
                  null
               }
               className={css.passwordStrengthBorder}
            />
            <div 
               style={length === true && strength === 2 ? {background: "#3CB371"} : null} 
               className={css.passwordStrengthBorder}
            />
         </div>
         <div className={css.passwordStrengthText} style={ 
            password === "" ? {visibility: "hidden"}
            :
            null
         }>
            Password strength : 
            <span style={{color: "#9F9F9F"}}>
               {
               length === true && strength === 0 ? " Weak"
               :
               length === true && strength === 1 ? " Normal"
               :
               length === true && strength === 2 ? " Strong (recommended)"
               :
               " Too short"
               }
            </span>
         </div>
      </div>
   )
}