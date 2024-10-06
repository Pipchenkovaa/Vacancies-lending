import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Page1 } from './page-1/main-page-1';
import { Page2 } from './page-2/main-page-2';

function App() {
	return (
		<Router>
			<div className="container mx-auto pb-6">
				<Routes>
					<Route path="/" element={<Page1 />} />
					<Route path="/vacancy-description" element={<Page2 />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App;