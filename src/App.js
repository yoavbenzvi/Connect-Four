import React from 'react';
import Column from './components/Column';
import './App.css';

// add alternating colors
//make sure to stop switch if end of row
//add checkwinner function
//add display

class App extends React.Component {
	constructor() {
		super()

		this.state = {
			currentPlayer: 'red',
			board: null,
		}
	}

	changePlayer = () => {
        this.state.currentPlayer === 'red' ?
            this.setState({
                currentPlayer: 'yellow'
            }) :
            this.setState({
                currentPlayer: 'red'
            })
    }

	componentDidMount() {
		let newBoard = [];
		for(let x = 0; x < 7; x++) {
			newBoard.push(<Column 
				key={`column ${x}`} 
				currentPlayer={() => this.state.currentPlayer} 
				changePlayer={this.changePlayer}
				x={x} 
			/>)
		}

		this.setState({
			board: newBoard,
		})
	}

	render() {
		return(
			<div className="app">
				<div className="board">
					{this.state.board}
				</div>
			</div>
		)
	}
}

export default App;