import Button from "../Button"
import GlobalStyles from '../GlobalStyles'

const StudyCss = () => {

    return (
        <GlobalStyles>
            <div> 
                <h1>Study CSS</h1>
                <Button name="click"/>
                <Button primary name="primary"/>
                <Button secondary name="secondary"/>
                <Button success name="success"/>
                <Button danger name="danger"/>
                <Button warning name="warning"/>
                <Button info name="info"/>
            </div> 
        </GlobalStyles>
    )
}

export default StudyCss