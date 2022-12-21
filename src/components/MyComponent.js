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
        console.log(event);
    }

    handleMouseOver(event) {
        console.log(event.pageX, event.pageY);
    }

    // JSX
    render() {
        return (
        <div>
            My name is {this.state.name} and I'm from {this.state.address}
            <button onClick={this.handleClick}>Click me</button>
            <button onMouseOver={this.handleMouseOver}>Hover me</button>
        </div>
        );
    }
}

export default MyComponent;
