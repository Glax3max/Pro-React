import {React , Component} from "react"

class Button extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {toggleBtn,style}  = this.props
        return (
            <button style={style} onClick={toggleBtn}>ToggleBtn</button>
        )
    }
}

export default Button;