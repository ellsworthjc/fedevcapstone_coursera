import Nav from './Nav.js';
import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<Link to="/">
				<img className="logo" src={require('../assets/icons_assets/Logo.svg').default} alt="working logo"/>
			</Link>
			<Nav/>
		</header>
	)
}
export default Header;