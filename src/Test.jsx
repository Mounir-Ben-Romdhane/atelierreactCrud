import React, { Component } from 'react';
import Test1 from './Test1';
import Test2 from './Test2';

class Test extends Component {
    render() {
        return (
            <div>
                <Test1 name="Amine" />
                <br/>
                <Test2 name="Mounir" />
            </div>
        );
    }
}

export default Test;
