import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Recipe from "./screens/Recipe";
import Summary from "./screens/Summary";
import Contact from "./screens/Contact";
import Introduction from "./screens/Introduction";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/trang-chu"
					element={<Home />}
				/>
				<Route
					path="/cong-thuc"
					element={<Recipe />}
				/>
				<Route
					path="/tong-hop"
					element={<Summary />}
				/>
				<Route
					path="/lien-lac"
					element={<Contact />}
				/>
				<Route
					path="/gioi-thieu"
					element={<Introduction />}
				/>
			</Routes>
		</BrowserRouter>
	);
}
