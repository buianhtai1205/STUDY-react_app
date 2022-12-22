// class component
// function component

import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfo from "./UserInfo"

class MyComponent extends React.Component {
    
    // JSX
    render() {
        const myInfo = ['a', 'ab'];

        return (
            <div>
                <UserInfo/>
                <br />
                <DisplayInfo name={ "galaxyDEV" } age={ 20 } myInfo={ myInfo } /> 
            </div>
        );
    }
}

export default MyComponent;
