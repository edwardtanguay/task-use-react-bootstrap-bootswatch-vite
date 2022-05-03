// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/bootstrap.darkly.min.css';
// import './styles/bootstrap.morph.min.css';
// import './styles/bootstrap.quartz.min.css';
import { Container, Button, Card } from 'react-bootstrap';
import { Employees } from './components/Employees';

function App() {
	return (
		<div className="App">
			<Container className="mt-5">
				<h1>Company Site</h1>
				<Button className="me-1">Employees</Button>
				<Button className="btn-success me-1">Customers</Button>
				<Card className="mt-4">
					<Card.Body>
						<Employees/>
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
}

export default App;
