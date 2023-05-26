import Nav from './Nav.js';

function Header() {
	return (
		<header>
			<img class="logo" src={process.env.PUBLIC_URL + "/logo.png"}/>
			<Nav/>
		</header>
	)
}
export default Header;