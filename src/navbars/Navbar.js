import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () =>{
    return(
        <nav className= 'nav bg-info  nav'>
            <div className='mb-2 home-nav '><NavLink to={'/'} >Home</NavLink></div>
            <div className='mb-2 about-nav '><NavLink to={'/about'} >About</NavLink></div>
            <div className="mb-2 port-nav"> <NavLink to={'/portfolio'} >Portfolio</NavLink></div>
           
        </nav>
    )
}
export default Navbar