// class component
// function component

import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfo from "./UserInfo"

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "galaxy", age: 20, }, 
            { id: 2, name: "developer", age: 21, }, 
            { id: 3, name: "galaxyDEV", age: 30, }, 
        ],
    }
    
    // JSX
    render() {

        return (
            <div>
                <UserInfo/>
                <br />
                <DisplayInfo 
                    listUsers = { this.state.listUsers }
                /> 
            </div>
        );
    }
}

export default MyComponent;
