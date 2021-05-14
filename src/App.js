import './App.css';
import Header from './components/header';
import Mainrouter from './components/Mainrouter';
import Footer from './components/footer';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
function App() {
  return (
    <div className="App">        
      <Header/>
      <Mainrouter/>        
      <Footer/>
    </div>
  );
}

export default App;
