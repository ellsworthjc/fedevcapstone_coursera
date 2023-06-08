import './App.css';
import Header from './blocks/Header';
import Main from './Main.js';
import Footer from './blocks/Footer';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
	<BrowserRouter>
		<Header />
		<Main />
		<Footer />
	</BrowserRouter>
    </>
  );
}

export default App;
