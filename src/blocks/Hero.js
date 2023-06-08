import { Link } from "react-router-dom";

export default function Hero() {
	return (
		<section className="bg-green">
			<div className="grid-2">
				<div>
					<p className="display-title text-yellow">Little Lemon</p>
					<p className="sub-title">Chicago</p>
					<p className="section-category">We are a family owned Mediterranean restaurant, focused on tradition recipes served with a modern twist.</p>
					<Link to="/booking" className="button">Reserve a Table</Link>
				</div>
				<div>
					<img className="hero-image" src={require('../assets/food-1.jpg')} alt="food item"/>
				</div>
			</div>
		</section>
	)
}