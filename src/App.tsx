import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Recipe from "./screens/Recipe";
import Contact from "./screens/Contact";
import Introduction from "./screens/Introduction";
import Blog from "./screens/Blog";

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
					path="/lien-lac"
					element={<Contact />}
				/>
				<Route
					path="/gioi-thieu"
					element={<Introduction />}
				/>
				<Route
					path="/blog"
					element={<Blog />}
				/>
			</Routes>
		</BrowserRouter>
	);
}
