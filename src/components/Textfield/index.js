import './Textfield.css'

const Textfield = (props) => {

    const onTyped = (event) => {
        props.inChange(event.target.value)
    }

    return (

        <div className="textfield">
            <label>{props.label}</label>
            <input value={props.amount} onChange={onTyped} required={props.mandatory} placeholder={props.placeholder}></input>
        </div>

    )
}

export default Textfield