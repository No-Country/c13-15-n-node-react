import {NavLink} from 'react-router-dom'


const Navbar = () => {
    return (
        <header>
            <nav>
                <div>
                    {/* lugar para logo o borrar */}
                </div>
                <div>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                    <NavLink to='/register'>Register</NavLink>
                    <NavLink to='/calendario'>Calendario</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Navbar