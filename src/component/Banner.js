import '../styles/Banner.css'
import Logo from '../asset/LOGO.png'

function Banner(prop){
    return <div className="Banner">
            <h1>{prop.title}</h1>
    </div>
}
export default Banner