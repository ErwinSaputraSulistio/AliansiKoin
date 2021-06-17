export default function Input({change, classGap, classInput, classLabel, label, name, placeholder, type, value}) {
   return(
      <div className={"displayColumn " + classGap}>
         <label className={"poppinsFont " + classLabel} for={name} style={{textAlign: "left"}}>{label}</label>
         <input className={"poppinsFont " + classInput} id={name} name={name} onChange={change} placeholder={placeholder} required type={type} value={value}/>
      </div>
   )
}