import './App.css';
import SignUp from './component/SignUp';
import SignIn from './component/SignIn';
import Homepage from './component/Homepage/Homepage';
import UserTokenContextProvider from './serice/context';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Cart from './component/Cart/Cart';
function App() {
  return (
    <UserTokenContextProvider>
    <Router>
      <Routes>
        <Route path='cart' element= {<Cart />}> </Route>
        <Route path= '' element= {<Homepage />}></Route>
        <Route path='login' element={<SignUp />}></Route>
        <Route path='signIn' element={<SignIn />}></Route>
      </Routes>
    </Router>
    </UserTokenContextProvider>
  );
}

export default App;
