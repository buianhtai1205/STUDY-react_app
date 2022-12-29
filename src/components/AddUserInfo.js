import React, { useState } from "react";

const AddUserInfo = (props) => {

    const [ name, setName ] = useState("");
    const [ age, setAge ] = useState();

    const handleOnChangeName = (event) => {
        setName(event.target.value);
    }

    const handleOnChangeAge = (event) => {
        setAge(event.target.value);
    }

    const handleOnSubmitForm = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor(Math.random() * 100 + 1) + "-random",
            name: name,
            age: age,
        })
    }

    return (
        <div className="add-user-container">
            My name is { name } and I'm { age }
            <form onSubmit={ (event) => handleOnSubmitForm(event) }>

                <label>Name: </label>
                <input 
                    onChange={ (event) => handleOnChangeName(event) } 
                    type="text"  
                    value={ name }
                />

                <label>Age: </label>
                <input 
                    onChange={ (event) => handleOnChangeAge(event) } 
                    type="text"  
                    value={ age }
                />

                <button>Submit</button>
            </form>
        </div>
    );
}

export default AddUserInfo;