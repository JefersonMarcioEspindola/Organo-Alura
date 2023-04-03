import './Dropdownlist.css'

const Dropdownlist = (props) => {

    const onTyped = (event) => {
        props.inChange(event.target.value)
    }

    return (
        <div className='Dropdownlist'>
            <label>{props.label}</label>
            <select onChange={onTyped} required={props.required} value={props.value}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
};

export default Dropdownlist;