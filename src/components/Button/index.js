import clsx from 'clsx'
import Styles from './button.module.scss'

const Button = (props) => {

    const {
        primary, 
        secondary, 
        success, 
        danger, 
        warning, 
        info
    } = props
    console.log(secondary)

    return (
        <button 
            className={clsx(Styles.btn, {
                [Styles.primary] : primary ? true : false,
                [Styles.secondary] : secondary ? true : false,
                [Styles.success] : success ? true : false,
                [Styles.danger] : danger ? true : false,
                [Styles.warning] : warning ? true : false,
                [Styles.info] : info ? true : false,
            })}
        >
            { props.name }
        </button>
    )
}

export default Button;