// class component
// function component

import React from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo"

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "galaxy", age: 20, }, 
            { id: 2, name: "developer", age: 21, }, 
            { id: 3, name: "galaxyDEV", age: 30, }, 
        ],
    }

    handleAddNewUser = (userObject) => {
        console.log("Check Data: ", userObject);
        this.setState({
            // listUsers: [...this.state.listUsers, userObject],
            listUsers: [userObject, ...this.state.listUsers],
        })
    }

    handleDeleteUser = (userID) => {
        let listUsersClone = [...this.state.listUsers];
        listUsersClone = listUsersClone.filter((user) => user.id != userID)
        this.setState({
            listUsers: listUsersClone,
        })
    }
    
    // JSX
    render() {

        return (
            <>
                <AddUserInfo
                    handleAddNewUser = { this.handleAddNewUser }
                />
                <br />
                <DisplayInfo 
                    listUsers = { this.state.listUsers }
                    handleDeleteUser = { this.handleDeleteUser }
                /> 
            </>
        );
    }
}

export default MyComponent;
