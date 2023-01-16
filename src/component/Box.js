import { ListOfCourse } from '../Data/ListOfCourse'
import '../styles/Box.css'
import { NavLink } from "react-router-dom";
function Box(){
    let activeStyle = {
        color: "red"
    };
    let noneStyle={
        textDecoration:"none",
        color: "black"
    };

    
    return <div>
        <ul className='coursList'>
            {ListOfCourse.map((Cours)=>(
                <li key={Cours.id} className='CoursItem'><NavLink to={Cours.name} style={({ isActive }) =>
                isActive ? activeStyle : noneStyle
              }>{Cours.name}</NavLink></li>
            ))}
        </ul>
        <p> Pour le fonctionnement de l'application, je me suis inspiré de la méthode des gobelet, qui inventé par le journaliste scientifique Sébastien Bohler dans les années 70. Elle s'appuie sur les flashes crad et les révisions espacées pour mieux mémoriser les informations.</p>
    </div>

    
        
    
}
export default Box