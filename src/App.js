import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.component';
import NavigationBar from './routes/navigation-bar/navigation.bar.component';
import Authentication from './routes/authentication/authentication.component';

const App = () => {

  return (
    <Routes>
      <Route path='/' element = { <NavigationBar /> }>
        <Route index element = {<Home />} />
        <Route path='auth' element = {<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
