import clsx from 'clsx'
import Styles from './button.module.scss'

const Button = (props) => {

    return (
        <button 
            className={clsx(Styles.btn, {
                [Styles.primary] : props?.primary,
                [Styles.secondary] : props?.secondary,
                [Styles.success] : props?.success,
                [Styles.danger] : props?.danger,
                [Styles.warning] : props?.warning,
                [Styles.info] : props?.info,
            })}
        >
            { props.text }
        </button>
    )
}

export default Button;