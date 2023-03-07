import React, { Component } from 'react';
import cardImageSrc from "../img/Capture.PNG"
class Glass extends Component {
    state = {
        glass: 1,
    };
     nextglass=()=> {
    
        let glass = document.querySelector("#glass");
        let temp;
        console.log(this.state);
        if (this.state.glass < 9) {
            temp=this.state.glass +1;
            this.setState({glass:temp});
            glass.setAttribute("class", `glass${this.state.glass}`);
        } else if (this.state.glass === 9) {
            this.setState({glass:1});
            glass.setAttribute("class", `glass${this.state.glass}`);
        }
    }
    render() {
        return (
            <div className="col">
                <h1 id="heading">Try Glasses App Online</h1>
                <div id="container">
                    <div id="box">
                        <div id="backdrop">
                            <div id="model"></div>
                            <div id="glass"></div>
                            <div id="desc"></div>
                        </div>
                    </div>
                    <div id="box">
                        <div id="backdrop">
                            <div id="model"></div>
                        </div>
                    </div>
                </div>

                <div className="buttonBox center">
                    <button id="nextglass" onClick={this.nextglass}>glass➡</button>
                </div>
            </div>
        );
    }
}

export default Glass;