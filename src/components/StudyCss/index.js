import Button from "../Button"
import GlobalStyles from '../GlobalStyles'

const StudyCss = () => {

    return (
        <GlobalStyles>
            <div> 
                <h1>Study CSS</h1>
                <Button />
                <Button primary />
                <Button secondary/>
                <Button success/>
                <Button danger/>
                <Button warning/>
                <Button info/>
            </div> 
        </GlobalStyles>
    )
}

export default StudyCss