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

class App extends React.Component {

	render() {
		return (
			<div className="app-container">
				<UpDown />
				<AddProduct />
				<MountedAndUnmounted />
				<MyComponent></MyComponent>
				<Counter></Counter>
				<RandomGift></RandomGift>
				<RegisterCourse></RegisterCourse>
				<ToDoList></ToDoList>
				<Clock />
			</div>
		);
	}
}

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
