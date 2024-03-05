import React, { Component } from 'react';

class Test1 extends Component {
    render() {
        return (
            <div>
                {this.props.name} is a test component!<br/>
            </div>
        );
    }
}

export default Test1;
