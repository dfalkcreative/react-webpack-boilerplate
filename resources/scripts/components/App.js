/**
 * This application class represents an example of a class-based component.
 */
import React, { Component } from "react";
import Card from './Card';

class App extends Component{
    render(){
        return (
            <div>
                <h1>Hello, world!</h1>
                <Card
                    header={<h3>Header</h3>}
                    body={<div>Body</div>}
                />
            </div>
        )
    }
}

export default App;