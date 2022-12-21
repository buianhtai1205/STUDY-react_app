// class component
// function component

import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "Anh Tài",
        age: 20,
        address: "Hồ Chí Minh",
    };

    handleClick(event) {
        console.log("Click me");
        console.log(this.state.name);

        this.setState({
            name: "galaxyDEV",
        });
    }

    handleMouseOver(event) {
        // console.log(event.pageX, event.pageY);
        this.setState({
            age: Math.floor(Math.random() * 100 + 1 ),
        });
    }

    // JSX
    render() {
        return (
        <div>
            My name is { this.state.name } and I'm { this.state.age }
            <button onClick={ (event) => { this.handleClick(event) } }>Click me</button>
            <button onMouseOver={ (event) => { this.handleMouseOver(event) } }>Hover me</button>
        </div>
        );
    }
}

export default MyComponent;
