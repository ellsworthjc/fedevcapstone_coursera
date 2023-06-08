import { Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Booking from "./Booking.js";

export default function Main() {
	return (
		<main>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/booking" element={<Booking />} />
			</Routes>
			<p className="display-title">Display Title</p>
			<p className="sub-title">Sub Title</p>
			<p className="lead-text">Lead Text</p>
			<p className="section-title">Section Title</p>
			<p className="section-category">Section Category</p>
			<p className="card-title">Card Title</p>
			<p className="p-text">Paragraph Text</p>
			<p className="highlight-text">Highlight Text</p>
		</main>
	)
}
