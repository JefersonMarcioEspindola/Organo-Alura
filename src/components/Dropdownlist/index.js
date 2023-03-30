import './Dropdownlist.css'

const Dropdownlist = (props) => {
    return (
        <div className='Dropdownlist'>
            <label>{props.label}</label>
            <select required={props.required}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
};

export default Dropdownlist;