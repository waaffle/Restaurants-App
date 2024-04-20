import { Link } from "react-router-dom";

export const HomePage = () => {
    return <div>
        Home Page
        <br></br>
        <Link to="/restaurants">К ресторанам</Link>
    </div>
};