import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Section from './components/Section';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Card from './components/Card';
import { Provider } from 'react-redux';
import store from './components/store';
import Chapter from './components/Chapter';



function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex h-screen">
         <Section />
         <div className=" ml-60 w-full flex flex-col">
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/students" element={<Card />} />
             <Route path='/chapter' element={<Chapter/>}/>
  
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
