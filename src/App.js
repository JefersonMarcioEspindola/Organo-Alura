import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team'

function App() {
  const times = [
    {
      name: 'Programação',
      primarycolor: '#d9f7e9',
      secondarycolor: '#57c278'
    },
    {
      name: 'Front-End',
      primarycolor: '#e8f8ff',
      secondarycolor: '#82cffa'
    },
    {
      name: 'Data Science',
      primarycolor: '#f0f8e2',
      secondarycolor: '#a6d157'
    },
    {
      name: 'Devops',
      primarycolor: '#fde7e8',
      secondarycolor: '#e06b69'
    },
    {
      name: 'Ux e Design',
      primarycolor: '#fae9f5',
      secondarycolor: '#db6ebf'
    },
    {
      name: 'Mobile',
      primarycolor: '#fff5d9',
      secondarycolor: '#ff8a29'
    },
  ]

  const [collaborators, setCollaborators] = useState([])

  const newContributorAdded = (collaborator) => {
    console.log(collaborator)
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner />
      <Form CollaboratoRegistered={collaborator => newContributorAdded(collaborator)}/>
      {times.map(team => <Team key={team.name} name={team.name} primarycolor={team.primarycolor} secondarycolor={team.secondarycolor}/>)}
    </div>
  );
}

export default App;
