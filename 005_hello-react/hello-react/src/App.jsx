import { useState } from 'react';
import HelloForm from './components/HelloForm';
import HelloDisplay from './components/HelloDisplay';
import './App.css';

const App = () => {
    // state variables and their setters and initial values
    const [name, setName] = useState('');
    const [msg, setMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    // event handler for form submission
    const handleSubmit = () => {
        // clear previous messages
        setMsg(''); 
        setErrorMsg('');  

        // validate input and set messages accordingly
        if (name === "") {
            setErrorMsg("Please enter a name"); 
        } else {
            setMsg(`Hello, ${name}!`);
        }
    };

    // event handler for input field change
    const handleNameChange = (e) => setName(e.target.value);

    return (
        <div className="container">
            <h1>Say Hello!</h1>
            <HelloForm 
              name={name} 
              onNameChange={handleNameChange} 
              onSubmit={handleSubmit} 
            />
            <HelloDisplay 
              msg={msg} 
              errorMsg={errorMsg} 
            />
        </div>
    );
};

export default App;