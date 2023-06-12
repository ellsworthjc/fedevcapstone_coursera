import { useReducer } from "react";
import { Routes, Route, redirect } from "react-router-dom";
import Home from "./Home.js";
import Booking from "./Booking.js";
import ConfirmedBooking from "./ConfirmedBooking.js";

export default function Main() {

	const updateTimes = (availableTimes, action) => {
		switch (action.type) {
			case "date":
				console.log("update");
				const date = new Date(action.dateValue);
				return fetchAPI(date);
			default:
				console.log("default");
				return availableTimes;
		}
	}

	const seededRandom = function (seed) {
		var m = 2**35 - 31;
		var a = 185852;
		var s = seed % m;
		return function () {
			return (s = s * a % m) / m;
		};
	}
	const fetchAPI = function(date) {
		let result = [];
		let random = seededRandom(date.getDate());

		for(let i = 17; i <= 23; i++) {
			if(random() < 0.5) {
				result.push(i + ':00');
			}
			if(random() < 0.5) {
				result.push(i + ':30');
			}
		}
		return result;
	};
	const submitAPI = function(formData) {
		return true;
	};

	const submitForm = (e, values) => {
		e.preventDefault();
		console.log('submitted', values);
		console.log(submitAPI(values));
		return redirect("/confirmation");
	}

	const initializeTimes= () => {
		const today = new Date();
		const times = fetchAPI(today);
		return times;
	}

	const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes());

	return (
		<main>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/booking" element={<Booking availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitForm={submitForm} />} />
				<Route path="/confirmation" element={<ConfirmedBooking />} />
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
