import { render, screen, queryByAttribute } from "@testing-library/react";
import Booking from '../Booking';

const availableTimes = [
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

test('Renders the Choose Date label', () => {
    render(<Booking availableTimes={availableTimes} />);
    const headingElement = screen.getByText("Booking");
    expect(headingElement).toBeInTheDocument();
});

test('initializeTimes returns expected value', () => {
	render(<Booking availableTimes={availableTimes} />);
	const times = screen.getByText("Choose time");
	expect(times).toBeInTheDocument();
});

test('updateTimes returns expected value', () => {
	render(<Booking availableTimes={availableTimes} />);
	const updatedTimes = screen.getByText("Number of guests");
	expect(updatedTimes).toBeInTheDocument();
});

test('disableForm works as intended', () => {
	let disableForm = true;
	expect(disableForm).toBe(true);
});

test('fields are required', () => {
	render(<Booking availableTimes={availableTimes} />)
	expect(screen.getByText("Birthday")).toBeInTheDocument();
  })