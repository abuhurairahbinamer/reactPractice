import { Link } from "react-router-dom";

// import {Link} from "react-router-dom";
const About=()=>{

    return(
        <>
        <nav>
        {/* <ul>
            <li>
                <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/about'>about</Link>
                </li>
                <li>
                <Link to='/contacts'>contact</Link>
                </li>
        </ul> */}
        </nav>
        <h1>about page</h1>
        <Link to='/contacts'>move to contact</Link>
        </>
    )
    
    
    }
    
    export default About;