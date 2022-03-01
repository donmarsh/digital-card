import './App.css';
import Details from './components/Details';
import Footer from './components/Footer'
import ProfilePhoto from './components/ProfilePhoto'

function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <Details />
      <Footer/>
    </div>
  );
}

export default App;
