import { ReactPropTypes } from "react"
import Button from "./Button"

const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color ='#006400' text='Add Task' />
        </header>
    )
}

Header.defaultProps = {
    title: 'Default Title',
}

export default Header

