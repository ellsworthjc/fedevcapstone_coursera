export default function AvailableTimes(props) {
	const {availableTimes: availableTimes, onChange: onChange, value: value} = props;
	return (
		<select id="res-time " value={value} onChange={onChange}>
			{availableTimes.map((time) => (<option key={time} value={time}>{time}</option>))}
		</select>
	)
}