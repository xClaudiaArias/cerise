import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Layout />}> 
      
      
      
      </Route> {/* end LAYOUT route */}
      </Routes>
    </div>
  );
}

export default App;
