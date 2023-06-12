import { useState, useEffect } from "react";
import AvailableTimes from "./components/AvailableTimes";

export default function Booking(props) {
	const formStyle = {
		display: "grid",
		maxWidth: "200px",
		gap: "20px"
	}

	const today = new Date().toISOString().split('T')[0];
	const [values, setValues] = useState({
		date: today,
		time: props.availableTimes[0],
		guests: "1",
		occasion: "Birthday"
	});

	const handler = (e, field) => {
		if (field === "date") {
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

	let [disableForm, setDisableForm] = useState(true);
	const validate = () => {
		if (values.guests > 10) {
			setDisableForm(true);
			return;
		}
		if (values.occasion === "") {
			setDisableForm(true);
			return;
		}
		if (values.date === "") {
			setDisableForm(true);
			return;
		}
		if (values.time === "") {
			setDisableForm(true);
			return;
		}
		setDisableForm(false);
		return;
	}

	useEffect(() => {
		validate();
	}, [values]);

	return (
		<section>
			<p className="display-title">Booking</p>
			<form style={formStyle} onSubmit={e => props.submitForm(e, values)}>
				<label htmlFor="res-date">Choose date</label>
				<input type="date" id="res-date" onChange={e => handler(e, 'date')} value={values.date} required/>
				<label htmlFor="res-time">Choose time</label>
				<AvailableTimes availableTimes={props.availableTimes} value={values.time} onChange={e => handler(e, 'time')} />
				<label htmlFor="guests">Number of guests</label>
				<input type="number" placeholder="1" min="1" max="10" id="guests" value={values.guests} onChange={e => handler(e, 'guests')} required/>
				<label htmlFor="occasion">Occasion</label>
				<select id="occasion" value={values.occasion} onChange={e => handler(e, 'occasion')} required>
					<option>Birthday</option>
					<option>Anniversary</option>
				</select>
				<input type="submit" value="Make Your reservation" disabled={disableForm} aria-label="On Click"/>
			</form>
		</section>
	)
}