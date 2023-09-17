import {Link} from "react-router-dom";
const home=()=>{

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


    <h1>home page</h1>
    <Link to='/'>index page</Link>
    </>
)


}

export default home