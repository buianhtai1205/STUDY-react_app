// class component
// function component

import React, { useState } from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo"

const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState([
        { id: 1, name: "galaxy", age: 20, }, 
        { id: 2, name: "developer", age: 21, }, 
        { id: 3, name: "galaxyDEV", age: 30, }, 
    ]);

    const handleAddNewUser = (userObject) => {
        console.log("Check Data: ", userObject);
        setListUsers([userObject, ...listUsers]);
    }

    const handleDeleteUser = (userID) => {
        let listUsersClone = [...listUsers];
        listUsersClone = listUsersClone.filter((user) => user.id !== userID)
        setListUsers(listUsersClone);
    }

    return (
        <>
            <AddUserInfo
                handleAddNewUser = { handleAddNewUser }
            />
            <br />
            <DisplayInfo 
                listUsers = { listUsers }
                handleDeleteUser = { handleDeleteUser }
            /> 
        </>
    );
}

export default MyComponent;
