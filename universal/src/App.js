// import logo from './logo.svg';
import './App.css';
// import Call from './callFunctionAfterRender/Call';
// import Pnav from './loginLogout/Pnav';
// import Pchild from './children&innerAndouterHtml/Pchild';
// import Index from './navigationAfterLogin';
// import ChildAndProp from './childrenAndProps/ChildAndProp';
// import Dynamic from './dynamicRoutesAndLinks/Dynamic';
// import Index from './paramtetersToComponent'
// import Main from './getAttributesOfObjectsUsing(e.target)/main';
import Parent from './usecontextHook/parent';
function App() {
  return (
    
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
      </header> */}
  

  
  {/* <Index step1 /> */}
<Parent/>

    </div>
  );
}

export default App;
