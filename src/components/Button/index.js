import './Button.css'

const Button = (props) => {
    return (
        <div className='box'>
        <button className='button'>
            {props.text}
        </button>
        </div>
    );
};

export default Button;