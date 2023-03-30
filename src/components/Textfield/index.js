import './Textfield.css'

const Textfield = (props) => {
    return (

        <div className="textfield">
            <label>{props.label}</label>
            <input required={props.mandatory} placeholder={props.placeholder}></input>
        </div>

    )
}

export default Textfield