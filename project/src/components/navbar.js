import {NavLink} from 'react-router-dom'
const Navbar =() =>{
    const navLinkStyles=({ isActive}) =>{
        return{
            fontWeight : isActive? 'bold': 'normal',
            textDecoration: isActive? 'none' : 'underline',
        }
    }
    return(
        <nav>
            <NavLink style={navLinkStyles} to='/'>
            Home
            </NavLink>
            <NavLink style={navLinkStyles} to='/about'>
            About
            </NavLink>
            <NavLink style={navLinkStyles} to='/product'>
            Product
             </NavLink>
         </nav>
    
        

    )
}
export default Navbar