import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>You should join the #100DaysOfCloud Discord Server!</p>
                <a
                    className='App-link'
                    href='https://100daysofcloud.com'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Join us!
                </a>
            </header>
        </div>
    );
}

export default App;
