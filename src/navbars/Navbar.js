import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () =>{
    return(
        <div className= 'bg-info my-div'>
            <NavLink to={'/'} >Home</NavLink>
            <NavLink to={'/about'} >About</NavLink>
            <NavLink to={'/portfolio'} >Portfolio</NavLink>
        </div>
    )
}
export default Navbar