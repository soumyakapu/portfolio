import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () =>{
    return(
        <nav className= 'navbar navbar-expand-sm bg-success justify-content-end'>
            <div className=' p-2 badge rounded-pill bg-info '><NavLink to={'/'} >Home</NavLink></div>
            {/* <div className=' p-2 badge rounded-pill bg-info'><NavLink to={'/about'} >About</NavLink></div> */}
            <div className=" p-2 badge rounded-pill bg-info"> <NavLink to={'/portfolio'} >Portfolio</NavLink></div>
           
        </nav>
    )
}
export default Navbar