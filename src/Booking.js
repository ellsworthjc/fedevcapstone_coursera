import { useState } from "react";
import AvailableTimes from "./components/AvailableTimes";

export default function Booking(props) {
	const formStyle = {
		display: "grid",
		maxWidth: "200px",
		gap: "20px"
	}

	const [values, setValues] = useState({
		date: "",
		time: "",
		guests: "",
		occasion: ""
	});

	const handler = (e, field) => {
		if (field == "date") {
			props.setAvailableTimes({
				type: "date",
				dateValue: e.target.value
			})
		}
		setValues({
			...values,
			[field]: e.target.value
		});
	}

	return (
		<section>
			<p className="display-title">Booking</p>
			<form style={formStyle}>
				<label htmlFor="res-date">Choose date</label>
				<input type="date" id="res-date" onChange={e => handler(e, 'date')} value={values.date}/>
				<label htmlFor="res-time">Choose time</label>
				<AvailableTimes availableTimes={props.availableTimes} value={values.time} onChange={e => handler(e, 'time')} />
				<label htmlFor="guests">Number of guests</label>
				<input type="number" placeholder="1" min="1" max="10" id="guests" value={values.guests} onChange={e => handler(e, 'guests')}/>
				<label htmlFor="occasion">Occasion</label>
				<select id="occasion" value={values.occasion} onChange={e => handler(e, 'occasion')}>
					<option>Birthday</option>
					<option>Anniversary</option>
				</select>
				<input type="submit" value="Make Your reservation"/>
			</form>
		</section>
	)
}