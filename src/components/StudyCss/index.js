import Button from "../Button"
import GlobalStyles from '../GlobalStyles'

const StudyCss = () => {

    return (
        <GlobalStyles>
            <div> 
                <h1>Study CSS</h1>
                <Button text="click"/>
                <Button primary text="primary"/>
                <Button secondary text="secondary"/>
                <Button success text="success"/>
                <Button danger text="danger"/>
                <Button warning text="warning"/>
                <Button info text="info"/>
            </div> 
        </GlobalStyles>
    )
}

export default StudyCss