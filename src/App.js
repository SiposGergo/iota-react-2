import logo from './logo.svg';
import './App.css';
import Shapes from './Shapes';
import Solids from './Solids';

const App = () => (
  <div className="flex">
    <div className="w-50">
      <Shapes></Shapes>
    </div>
    <div className="w-50">
      <Solids></Solids>
    </div>
  </div>
)

export default App;
