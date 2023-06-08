import { Link } from "react-router-dom";
import SpecialItem from "../components/SpecialItem";

const specialsData = [
	{
		title: "Greek Salad",
		description: "Fresh, tangy, and Mediterranean bliss in a bowl.",
		price: 12.95,
		image: require("../assets/icons_assets/greek-salad.jpg"),
	},
	{
		title: "Bruschetta",
		description: "Toasted bread topped with vibrant tomatoes, basil, and olive oil.",
		price: 12.99,
		image: require("../assets/icons_assets/bruschetta.jpg"),
	},
	{
		title: "Lemon Dessert",
		description: "A heavenly blend of zesty citrus goodness and sweet indulgence.",
		price: 12.25,
		image: require("../assets/icons_assets/lemon-dessert.jpg"),
	}
]

let specials = [];
for (let item of specialsData) {
	specials.push(<SpecialItem key={item.title} itemData={item} />)
}

export default function SpecialsSection() {
	return (
		<section className="specials-section">
			<div className="grid-2">
				<p className="display-title">This Week's Specials</p>
				<Link to="/booking" className="button">Reserve a Table</Link>
			</div>
			<div className="grid-3">
				{specials}
			</div>
		</section>
	)
}