import React, {Component} from 'react'

export default class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            friendNames: [
                {"name": "Tiffany", "title": "student", "age": 25},
                {"name": "CJ", "occupation": "IT", "hobby": "weight lifting"},
                {"name": "Jessica", "siblings": 2, "age": 28}
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterNames = (prop) => {
        var names = this.state.friendNames;
        var filteredNames = [];

        for(var i = 0; i < names.length; i++){
            if(names[i].hasOwnProperty(prop)) {
                filteredNames.push(names[i]);
            }
        }
        this.setState({
            filteredNames: filteredNames
        })
    }

    render() {
        return (
            
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.friendNames, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredNames,null, 10)}</span>
            </div>
        )
    }
}