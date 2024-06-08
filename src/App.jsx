import Header from './components/Header/Header';
import Sections from './components/Sections/Sections';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<>
			<Header />
			<main className='main'>
				<div className='container'>
					<Sections />
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
