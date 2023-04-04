import { useState } from 'react';
import Banner from './components/Banner'
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const [contributor, setContributor] = useState([])

  const newContributorAdded = ( contributor ) => {
    console.log(contributor)
    setContributor([...contributor, contributor])
  }

  return (
    <div className="App">
      <Banner/>
      <Form registeredContributor={contributor => newContributorAdded(contributor)}/>
      <Team nome="Programação"/>
      <Team nome="Front-End"/>
      <Team nome="Data Sciece"/>
    </div>
  );
}

export default App;
