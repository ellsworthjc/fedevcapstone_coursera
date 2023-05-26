import Nav from './Nav.js';
import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<Link to="/">
				<img className="logo" src={process.env.PUBLIC_URL + "/logo.png"} alt="little lemon logo"/>
			</Link>
			<Nav/>
		</header>
	)
}
export default Header;