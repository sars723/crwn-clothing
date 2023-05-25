import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component.jsx';

import SigninForm from './components/sign-in-form/sign-in-form.component';

const Shop = () => {
  return <h1>i am shop</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        
       
      </Route>
    </Routes>
  );
};

export default App;
