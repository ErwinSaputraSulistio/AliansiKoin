export default function Button({ buttonBorder, buttonColor, buttonName, customClass, clickFunction, textColor }) {
   return(
      <input 
         className={"defaultBtn defaultSmallText hoverThis " + customClass} 
         onClick={clickFunction} 
         style={{background: buttonColor, border: buttonBorder, color: textColor}}
         type="submit"
         value={buttonName}
      />
   )
}