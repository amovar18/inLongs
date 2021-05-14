import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Header from './components/header';
import Mainrouter from './components/Mainrouter';
function App() {
  return (
    <div className="App">
      <Header/>
      <Mainrouter/>
    </div>
  );
}

export default App;
