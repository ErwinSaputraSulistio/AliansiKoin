import css from './styles.module.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';
// ATOMS
import Button from '../../atoms/Button'
// IMAGES
import AK from '../../../assets/images/AK.png'

export default function Navbar() {
   const history = useHistory()
   const [userData, setUserData] = useState({})
   const logout = () => {
      localStorage.clear()
      Swal.fire("Sukses!", "Logout berhasil!", "success")
      .then(() => { history.push("/auth") })
   }
   useEffect(() => {
      axios.get(process.env.REACT_APP_AK_API + "/auth/check", {headers: {"x-access-token": localStorage.getItem("token")}})
      .then((res) => { setUserData(res.data.info) })
      .catch((err) => { console.log(err.response.data.message) })
   }, [])
   return(
      <div className={"displayRow " + css.navbarReusable}>
         <img className={css.navLogo} src={AK}/>
         <div>
            {localStorage.getItem("token") !== null ? 
            <div className="displayRow" style={{alignItems: "center"}}>
               <span className={"defaultSmallText " + css.welcomeUser}>Hai, selamat datang {userData.username}!</span>
               {
               userData.admin === true && 
               <Button 
                  buttonBorder="0.1vw solid white" 
                  buttonColor="#3CB371" 
                  buttonName="Admin" 
                  clickFunction={ () => { history.push("/admin") } } 
                  customClass={"poppinsFont " + css.navBtn} 
                  textColor="white"
               />
               }
               <Button 
                  buttonBorder="0.1vw solid white" 
                  buttonColor="indianred" 
                  buttonName="Logout" 
                  clickFunction={ () => { logout() } } 
                  customClass={"poppinsFont " + css.navBtn} 
                  textColor="white"
               />
            </div>
            :
            <Button 
               buttonBorder="0.1vw solid white" 
               buttonColor="#3CB371" 
               buttonName="Login" 
               clickFunction={ () => { history.push("/auth") } } 
               customClass={"poppinsFont " + css.navBtn} 
               textColor="white"
            />
            }
         </div>
      </div>
   )
}