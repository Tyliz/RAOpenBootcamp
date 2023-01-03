import logo from './logo.svg';
import './App.css';

import fontawesome from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

// import Example2 from './hooks/Example2';
// import MiComponenteConContexto from './hooks/Example3';
// import Example4 from './hooks/Example4';
// import { UsuarioComponent } from './components/pure/usuario';
// import Greeting from './components/pure/greeting';
// import Greetingf from './components/pure/greetingf';
import TaskListComponent from './components/container/task_list';

config.autoAddCss = false;
library.add(fas, far);

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* Rendering custom component "Greeting" */}
        {/* <Greeting name="Tyliz"></Greeting> */}
        {/* <Greetingf name="Tyliz"></Greetingf> */}
        <TaskListComponent></TaskListComponent>
        {/* <Example2></Example2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <UsuarioComponent></UsuarioComponent> */}
      {/* </header> */}
    </div>
  );
}

export default App;
