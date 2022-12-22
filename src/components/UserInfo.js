import React from "react";

class UserInfo extends React.Component {
    state = {
        name: "Anh Tài",
        age: 20,
        address: "Hồ Chí Minh",
    };

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value,
        })
    }

    handleOnSubmitForm = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                My name is { this.state.name } and I'm { this.state.age }
                <form onSubmit={ (event) => this.handleOnSubmitForm(event) }>

                    <label>Name: </label>
                    <input 
                        onChange={ (event) => { this.handleOnChangeName(event) } } 
                        type="text"  
                        value={ this.state.name }
                    /> <br/>

                    <label>Age: </label>
                    <input 
                        onChange={ (event) => { this.handleOnChangeAge(event) } } 
                        type="text"  
                        value={ this.state.age }
                    /> <br/>

                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default UserInfo;