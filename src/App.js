import React, { Component } from 'react';
import Title from './components/title/title';
import Navbar from './components/navbar/navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar logo="React" />
				<Title title="Título da Aplicação" />
				<Container>
					<Card style={{ width: '18rem' }}>
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the bulk of
								the card's content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Container>
			</div>
		);
	}
}

export default App;
