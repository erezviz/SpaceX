

import '../src/assets/style/styles.scss'
import { AppHeader } from './cmps/app-header';
import { SpaceApp } from './pages/space-app';

function App() {
  return (
    <div className="App">
      <AppHeader/>

    <main className="main-container">
      <SpaceApp/>
    </main>
  
    </div>
  );
}

export default App;
