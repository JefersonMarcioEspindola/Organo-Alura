import './Textfield.css'

let amount = ''

const onTyped = (event) => {
    amount = event.target.value
    console.log(amount)
}

const Textfield = (props) => {
    return (

        <div className="textfield">
            <label>{props.label}</label>
            <input value={amount} onChange={onTyped} required={props.mandatory} placeholder={props.placeholder}></input>
        </div>

    )
}

export default Textfield