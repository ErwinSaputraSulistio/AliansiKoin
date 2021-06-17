import css from './styles.module.css';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
// ATOMS
import Button from '../../atoms/Button';
// IMAGES
import NotFoundImg from '../../../assets/images/NotFound.jpg';

export default function NotFound() {
   const history = useHistory();
   useEffect(() => {
      document.title = "Aliansi Koin - Not Found"
   }, []);
   const logout = () => {
      localStorage.clear()
      Swal.fire("Sukses!", "Logout berhasil!", "success")
      .then(() => { history.push("/auth") })
   }
   return(
      <div className={"displayColumn poppinsFont showInAnimation " + css.notFoundTemplate}>
         <div className="centerText displayColumn slideLeft">
            <span className="defaultBigText">Oops?!</span>
            <i className="defaultSmallText" style={{color: "#9F9F9F", margin: "1vw"}}>It seems like that the page you're looking for isn't exist ...</i>
         </div>
         <img className={"slideRight " + css.notFoundImg} src={NotFoundImg}/>
         <div className={css.notFoundBtnArea}>
            <Button 
               buttonBorder="0.1vw solid #3CB371" 
               buttonColor="white" 
               buttonName="Back to Home" 
               clickFunction={ () => { history.push("/") } } 
               customClass={"poppinsFont slideLeft " + css.notFoundBtn} 
               textColor="#3CB371"
            />
            {localStorage.getItem("token") !== null ?
            <Button 
               buttonBorder="0.1vw solid white" 
               buttonColor="indianred" 
               buttonName="Logout"
               clickFunction={ () => { logout() } }
               customClass={"poppinsFont slideRight " + css.notFoundBtn} 
               textColor="white"
            />
            :
            <Button 
               buttonBorder="0.1vw solid white" 
               buttonColor="#3CB371" 
               buttonName="Login"
               clickFunction={ () => { history.push("/auth") } }
               customClass={"poppinsFont slideRight " + css.notFoundBtn} 
               textColor="white"
            />
            }
         </div>
      </div>
   );
}