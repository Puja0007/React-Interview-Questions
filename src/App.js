import logo from './logo.svg';
import './App.css';

import ExampleUseRef from './components/ExampleUseRef';
import ExampleUseMemo from './components/ExampleUseMemo';
import ExampleuseCallback from './components/ExampleuseCallback';
import ExampleUsereducer from './components/ExampleUsereducer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     {/* <apiCallWithDebounce /> */}
     

      </header>
      <ExampleUseRef />
      <ExampleUseMemo />
      <ExampleuseCallback  name="puja"/>
      <ExampleUsereducer />
    </div>
  );
}

export default App;
