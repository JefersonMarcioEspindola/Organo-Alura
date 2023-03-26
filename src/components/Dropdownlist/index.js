import './Dropdownlist.css'

const Dropdownlist = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <select>
                <option></option>
            </select>
        </div>
    );
};

export default Dropdownlist;