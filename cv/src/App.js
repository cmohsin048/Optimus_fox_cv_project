
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Slidebar from './Components/Sidebar'
import Body from './Components/Body'
function App() {
  return (
    <div className="App">
      <Header/>
      <Slidebar/>
      <Body/>
    </div>
  );
}

export default App;
