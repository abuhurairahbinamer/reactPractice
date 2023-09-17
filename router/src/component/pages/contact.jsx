import {Link} from "react-router-dom";
const Contact=()=>{

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
        <h1>conatct page</h1>
        <Link to='/about'>move to about</Link>
        </>
    )
    
    
    }
    
    export default Contact;