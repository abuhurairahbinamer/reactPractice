import { Outlet, Link } from "react-router-dom";
 const Fun=()=>{

    return(
        <>
        <nav>
        <ul>
            <li>
                <Link to='/home'>Home</Link>
                </li>
                <li>
                <Link to='/about'>about</Link>
                </li>
                <li>
                <Link to='/contacts'>contact</Link>
                </li>
        </ul>
        </nav>

<hr />

        <Outlet/>
        </>
    )
    
    
    }
    
    export default Fun;