


import { AppHeader } from './cmps/app-header';
import { SpaceApp } from './pages/space-app';
import {Routes, Route} from 'react-router-dom'
import { LandingDetails } from './pages/landing-details';
function App() {
  return (
    <div className="App">
      <AppHeader/>

    <main className="main-container">
      <Routes>
      <Route path="/" element={<SpaceApp/>}/>
      <Route path="/details/:id" element={<LandingDetails/>}/>
      </Routes>
      
    </main>
  
    </div>
  );
}

export default App;
