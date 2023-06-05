
import './App.css';
import Routers from './Routers/Routers';
import Login from './components/Login';
import MobCeateProject from './components/MobCeateProject';
import MobProjectList from './components/MobProjectList';
import NavAndFootbar from './components/NavAndFootbar';

function App() {
  return (
    <div className="App">
      <MobProjectList />
    </div>
  );
}

export default App;
