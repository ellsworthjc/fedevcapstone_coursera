import { Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Specials from "./Specials.js";
import Reviews from "./Reviews.js";
import Booking from "./Booking.js";

export default function Main() {
	return (
		<main>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/specials" element={<Specials />} />
				<Route path="/reviews" element={<Reviews />} />
				<Route path="/booking" element={<Booking />} />
			</Routes>
		</main>
	)
}
