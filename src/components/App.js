import React from 'react';
import NavBar from './NavBar';
import FightWindow from './FightWindow';
import FighterCards from './FighterCards';

class App extends React.Component {
    state = { name1: "Joey", str1: 15, spd1: 15, agl1: 15,
        name2: "Franky", str2: 20, spd2: 10, agl2: 15};

    render() {
        return (
            <div>
                <NavBar />
                <FightWindow />
                <FighterCards
                    name1={this.state.name1}
                    name2={this.state.name2}
                    str1={this.state.str1}
                    spd1={this.state.spd1}
                    agl1={this.state.agl1}
                    str2={this.state.str2}
                    spd2={this.state.spd2}
                    agl2={this.state.agl2}
                />
            </div>
        );
    }
}

export default App;
