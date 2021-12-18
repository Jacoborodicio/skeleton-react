import {useState} from 'react';
import "./App.css";
import "./App.scss";
import logoReact from './assets/images/react-logo.svg';
const App = () => {
    const [name, setName] = useState('');

    return (
        <div className='app'>
            <h3>Test</h3>
            <div>
                <p>Hello React :)</p>
                <div>
                    <img src={logoReact} width={32} height={32} alt='react-logo'/>
                </div>
            </div>
            <div>
                <label htmlFor='name'>Name: </label>
                <input
                    id='name'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
            </div>
        </div>
    )
}

export default App;
