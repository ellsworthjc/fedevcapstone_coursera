import { useState, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Booking from "./Booking.js";

export default function Main() {

	const updateTimes = (availableTimes, action) => {
		switch (action.type) {
			case "date":
				console.log("update");
				return availableTimes;
			default:
				console.log("default");
				return availableTimes;
		}
	}

	const initializeTimes = [
		"9:00",
		"10:00",
		"11:00",
		"12:00",
		"14:00",
		"15:00",
		"13:00",
		"16:00",
		"17:00",
		"18:00",
		"19:00",
		"20:00"
	];

	const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes);

	return (
		<main>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/booking" element={<Booking availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />} />
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
