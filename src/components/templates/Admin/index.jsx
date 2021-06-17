import css from './styles.module.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';
// ATOMS
import Button from '../../atoms/Button'

export default function Admin() {
   const history = useHistory()
   const [isAdmin, setIsAdmin] = useState(false)
   const [userList, setUserList] = useState([])
   const adminOnly = () => {
      Swal.fire("Eits?!", "Cuma admin yang boleh akses halaman ini yah ~", "warning") 
      .then(() => { history.push("/home") })
   }
   useEffect(() => {
      document.title = "Aliansi Koin - Admin Page"
      if(localStorage.getItem("token") === null) { adminOnly() }
      else {
         axios.get(process.env.REACT_APP_AK_API + "/auth/check", { headers: {"x-access-token": localStorage.getItem("token")} })
         .then((res) => { 
            if(res.data.info.admin === true) { 
               setIsAdmin(true)
               axios.get(process.env.REACT_APP_AK_API + "/user/list", { headers: {"x-access-token": localStorage.getItem("token")} })
               .then((res) => { setUserList(res.data.users) })
               .catch((err) => { console.log(err.response.data.message) })
            }
            else { adminOnly() }
          })
         .catch((err) => { 
            console.log(err.response.data.message)
            adminOnly() 
         })
      }
   }, [])
   return(
      <div className={"poppinsFont showInAnimation " + css.adminPage}>
         {isAdmin === true ?
         <div className="displayColumn" style={{alignItems: "center"}}>
            <u className="defaultMediumText" style={{fontWeight: "bold"}}>Admin Page</u>
            <span className="defaultSmallText" style={{textAlign: "center"}}>"See the list of available users here."</span>
            <Button 
               buttonBorder="0.1vw solid white" 
               buttonColor="indianred" 
               buttonName="Back to Home"
               clickFunction={ () => { history.push("/home") } }
               customClass={"poppinsFont showInAnimation " + css.adminBtn}
               textColor="white"
            />
            <table>
               <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Admin</th>
               </tr>
               {
                  userList.map((item) => {
                     return(
                        <tr>
                           <td className={css.adminUserId}>{item._id}</td>
                           <td>{item.username}</td>
                           <td>{item.admin.toString()}</td>
                        </tr>
                     )
                  })
               }
            </table>
         </div>
         :
         null
         }
      </div>
   )
}