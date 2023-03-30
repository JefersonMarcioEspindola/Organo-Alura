import './Form.css'
import Textfield from "../Textfield";
import Dropdownlist from '../Dropdownlist';
import Button from '../Button';

const Form = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Ux e Design',
        'Mobile'
    ]

    const toSave = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido') 
    }

    return (
        <section className="form">
            <form onSubmit={toSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Textfield mandatory='true' label='Nome' placeholder='Digite seu nome'/>
                <Textfield mandatory='true' label='Cargo' placeholder='Digite seu cargo'/>
                <Textfield mandatory='true' label='Imagem' placeholder='Digite o endereço da imagem'/>
                <Dropdownlist mandatory='true' label='Time' itens={times}/>
                <Button text='Criar Card'/>
            </form>
        </section>
    );
};


export default Form;