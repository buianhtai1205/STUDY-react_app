import React, { useState } from "react";
import "./DisplayInfo.scss";
import logo from "./../logo.svg";

// class DisplayInfo extends React.Component {
//     constructor(props) {
//         console.log(">> call constructor: ", 1)
//         super(props);
//         this.state = {
//             isShowListUSers: true,
//         }
//     }

//     componentDidMount = () => {
//         console.log(">> call component display mount");
//         setTimeout(() => {
//             document.title = "galaxyReact"
//         }, 3000);
//     }

//     componentDidUpdate = (prevProps, prevState, snapshot) => {
//         console.log(">> call component did update", this.props, prevProps);
//         if (this.props.listUsers !== prevProps.listUsers) {
//             if (this.props.listUsers.length === 5) {
//                 alert("You got five users");
//             }
//         }
//     }
    
//     handleShowHide = () => {
//         this.setState({
//             isShowListUSers: !this.state.isShowListUSers,
//         })
//     }

//     render() {
//         console.log(">> call render")
//         const { listUsers } = this.props;
//         return (
//             <div className="display-info-container">
//                 <img src={ logo } alt="logo" />
//                 <div onClick={ () => this.handleShowHide() }>
//                     <span><u>{ this.state.isShowListUSers === true ? "Hide List Users" : "Show List Users" }</u></span>
//                 </div>
//                 { this.state.isShowListUSers && 
//                     <>
//                         { listUsers.map((user) => {
                            
//                             return (
//                                 <div key={ user.id } className={ user.age > 22 ? "green" : "red" }>
//                                     <div>My name is { user.name }</div>
//                                     <div>My age is { user.age }</div>
//                                     <button onClick={ () => this.props.handleDeleteUser(user.id) }>Delete</button>
//                                     <hr />
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }
//             </div>
//         );

//     }
// }

const DisplayInfo = (props) => {
    const { listUsers } = props;
    const [isShowListUSers, setShowHideListUSers] = useState(true);

    const handleShowHideListUSers = () => {
        setShowHideListUSers(!isShowListUSers);
    }

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