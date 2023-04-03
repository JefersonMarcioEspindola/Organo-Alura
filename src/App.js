import { useState } from 'react';
import Banner from './components/Banner'
import Form from './components/Form';

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
    </div>
  );
}

export default App;
