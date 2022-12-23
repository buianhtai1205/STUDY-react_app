import React from "react";
import "./DisplayInfo.scss";

class DisplayInfo extends React.Component {

    state = {
        isShowListUSers: true,
    }

    handleShowHide = () => {
        this.setState({
            isShowListUSers: !this.state.isShowListUSers,
        })
    }

    render() {
        const { listUsers } = this.props;
        return (
            <div className="display-info-container">
                <div onClick={ () => this.handleShowHide() }>
                    <span><u>{ this.state.isShowListUSers === true ? "Hide List Users" : "Show List Users" }</u></span>
                </div>
                { this.state.isShowListUSers && 
                    <div>
                        { listUsers.map((user) => {
                            
                            return (
                                <div key={ user.id } className={ user.age > 22 ? "green" : "red" }>
                                    <div>My name is { user.name }</div>
                                    <div>My age is { user.age }</div>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        );

    }
}

export default DisplayInfo;