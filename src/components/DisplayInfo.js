import React, { useEffect, useState } from "react";
import "./DisplayInfo.scss";
import logo from "./../logo.svg";

const DisplayInfo = (props) => {
    const { listUsers } = props;

    const [isShowListUSers, setShowHideListUSers] = useState(true);

    const handleShowHideListUSers = () => {
        setShowHideListUSers(!isShowListUSers);
    }

    console.log(">> call me render")

    useEffect(() => {
        console.log(">>call me use effect");
    }, []);

    useEffect(() => {
        if (listUsers.length === 0) {
            alert("You deleted all users");
        }

        console.log(">>call me use effect");
    }, [listUsers]);

    return (
        <div className="display-info-container">
            <img src={ logo } alt="logo" />
            <div onClick={ () => handleShowHideListUSers() }>
                <span><u>{ isShowListUSers === true ? "Hide List Users" : "Show List Users" }</u></span>
            </div>
            { isShowListUSers && 
                <>
                    { listUsers.map((user) => {
                        
                        return (
                            <div key={ user.id } className={ user.age > 22 ? "green" : "red" }>
                                <div>My name is { user.name }</div>
                                <div>My age is { user.age }</div>
                                <button onClick={ () => props.handleDeleteUser(user.id) }>Delete</button>
                                <hr />
                            </div>
                        )
                    })}
                </>
            }
        </div>
    );    
}

export default DisplayInfo;