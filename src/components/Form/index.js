import './Form.css'
import Textfield from "../Textfield";
import Dropdownlist from '../Dropdownlist';
import Button from '../Button';
import { useState } from 'react';

const Form = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Ux e Design',
        'Mobile'
    ]

    const [nome, setName] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const toSave = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido => ', nome, cargo, imagem, time) 
    }

    return (
        <section className="form">
            <form onSubmit={toSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Textfield 
                    mandatory='true' 
                    label='Nome' 
                    placeholder='Digite seu nome' 
                    value={nome} 
                    inChange={value=> setName(value)} 
                />
                <Textfield 
                    mandatory='true' 
                    label='Cargo' 
                    placeholder='Digite seu cargo' 
                    value={cargo} 
                    inChange={value=> setCargo(value)} 
                />
                <Textfield 
                    mandatory='true' 
                    label='Imagem' 
                    placeholder='Digite o endereço da imagem' 
                    value={imagem} 
                    inChange={value=> setImagem(value)}
                />
                <Dropdownlist 
                    mandatory='true' 
                    label='Time' 
                    itens={times}
                    value={time} 
                    inChange={value=> setTime(value)}
                />
                <Button text='Criar Card'/>
            </form>
        </section>
    );
};


export default Form;