import React, { useState } from "react";

// class AddUserInfo extends React.Component {
//     state = {
//         name: "Anh Tài",
//         age: 20,
//         address: "Hồ Chí Minh",
//     };

//     handleOnChangeName = (event) => {
//         this.setState({
//             name: event.target.value,
//         })
//     }

//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value,
//         })
//     }

//     handleOnSubmitForm = (event) => {
//         event.preventDefault();
//         console.log(this.state);
//         this.props.handleAddNewUser({
//             id: Math.floor(Math.random() * 100 + 1) + "-random",
//             name: this.state.name,
//             age: this.state.age,
//         });
//     }

//     render() {
//         return (
//             <div className="add-user-container">
//                 My name is { this.state.name } and I'm { this.state.age }
//                 <form onSubmit={ (event) => this.handleOnSubmitForm(event) }>

//                     <label>Name: </label>
//                     <input 
//                         onChange={ (event) => { this.handleOnChangeName(event) } } 
//                         type="text"  
//                         value={ this.state.name }
//                     /> <br/>

//                     <label>Age: </label>
//                     <input 
//                         onChange={ (event) => { this.handleOnChangeAge(event) } } 
//                         type="text"  
//                         value={ this.state.age }
//                     /> <br/>

//                     <button>Submit</button>
//                 </form>
//             </div>
//         );
//     }
// }

const AddUserInfo = (props) => {
    console.log(props.handleAddNewUser);

    const [ name, setName ] = useState("");
    const [ age, setAge ] = useState();

    const handleOnChangeName = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    }

    const handleOnChangeAge = (event) => {
        console.log(event.target.value);
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