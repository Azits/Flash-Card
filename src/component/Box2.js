import '../styles/Box.css'
import {  NavLink} from 'react-router-dom';
const Box2=(prop)=>{
    let activeStyle = {
        color: "red"
    };
    let noneStyle={
        textDecoration:"none",
        color: "black"
    };
    
    return  <>
        <ul className='coursList'>
            {prop.matiere.map((Chapiter)=>(
                <li key={Chapiter} className='CoursItem'><NavLink to={`/${Chapiter}`} style={({ isActive }) =>
                isActive ? activeStyle : noneStyle
              }>{Chapiter}</NavLink></li>
            ))}
        </ul>
    </>
}

export default Box2;