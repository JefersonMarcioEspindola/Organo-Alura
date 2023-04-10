import './Team.css'

const Team = (props) => {
    const cssStyle = { 
        backgroundColor: props.primarycolor
    }

    return (
        <section className='team' style={cssStyle}>
            <h3 style={{ borderColor: props.secondarycolor }}>{props.name}</h3>
        </section>
    )
}

export default Team