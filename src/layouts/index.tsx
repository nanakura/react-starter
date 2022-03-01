import { Outlet } from 'react-router'
import './index.css'
import { Link, useNavigate } from 'react-router-dom';

export default () => {
	const navigation = useNavigate();
	return (
		<div className="App">
			<nav>
				<Link to="/" className="App-link">HomeView</Link> {' | '}
				<Link to="/about" className="App-link">AboutView</Link>
			</nav>
			<Outlet/>
		</div>
	)
}