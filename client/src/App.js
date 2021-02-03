import React from 'react';
import './App.css';
import Landing from "./components/Landing";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                {/*<Header/>*/}
                {/*<Landing/>*/}
                {/*<Register/>*/}
                {/*<Login/>*/}
                <Home/>
            </div>
        );
    }
}

export default App;
