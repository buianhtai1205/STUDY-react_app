import { Routes, Route, Link } from 'react-router-dom';

import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./components/MyComponent";
import React from "react";
import Counter from "./components/Counter";
import RandomGift from "./components/RandomGift";
import RegisterCourse from "./components/RegisterCourse";
import ToDoList from "./components/ToDoList";
import MountedAndUnmounted from "./components/MountedAndUnmounted";
import Clock from "./components/Clock";
import AddProduct from "./components/AddProduct";
import UpDown from "./components/UpDown";
import ToDoWithReducer from "./components/ToDoWithReducer";
import ContextStudy from "./components/ContextStudy";
import PlayVideo from "./components/PlayVideo";
import StudyCss from "./components/StudyCss";

import HomePage from "./pages/Home";
import NewsPage from "./pages/News";
import ContactPage from "./pages/Contact";


const App = () => {
	return (
		<div className="app">
			<nav className="nav-bar">
				<h1>Sidebar</h1>
				<ul>
					<li>	
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/news">News</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<Link to="/StudyCss" >StudyCss</Link>
					</li>
					<li>
						<Link to="/PlayVideo" >PlayVideo</Link>
					</li>
					<li>
						<Link to="/ContextStudy" >ContextStudy</Link>
					</li>
					<li>
						<Link to="/ToDoWithReducer" >ToDoWithReducer</Link>
					</li>
					<li>
						<Link to="/UpDown" >UpDown</Link>
					</li>
					<li>
						<Link to="/AddProduct" >AddProduct</Link>
					</li>
					<li>
						<Link to="/MountedAndUnmounted" >MountedAndUnmounted</Link>
					</li>
					<li>
						<Link to="/MyComponent" >MyComponent</Link>
					</li>
					<li>
						<Link to="/RandomGift" >RandomGift</Link>
					</li>
					<li>
						<Link to="/RegisterCourse" >RegisterCourse</Link>
					</li>
					<li>
						<Link to="/ToDoList" >ToDoList</Link>
					</li>
					<li>
						<Link to="/Clock" >Clock</Link>
					</li>
				</ul>
			</nav>
			<div className="content">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/news" element={<NewsPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/StudyCss" element={<StudyCss />} />
					<Route path="/PlayVideo" element={<PlayVideo />} />
					<Route path="/ContextStudy" element={<ContextStudy />} />
					<Route path="/ToDoWithReducer" element={<ToDoWithReducer />} />
					<Route path="/UpDown" element={<UpDown />} />
					<Route path="/AddProduct" element={<AddProduct />} />
					<Route path="/MountedAndUnmounted" element={<MountedAndUnmounted />} />
					<Route path="/MyComponent" element={<MyComponent />} />
					<Route path="/Counter" element={<Counter />} />
					<Route path="/RandomGift" element={<RandomGift />} />
					<Route path="/RegisterCourse" element={<RegisterCourse />} />
					<Route path="/ToDoList" element={<ToDoList />} />
					<Route path="/Clock" element={<Clock />} />
				</Routes>
			</div>
		</div>
	);
};


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello World! Anh Tài</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
