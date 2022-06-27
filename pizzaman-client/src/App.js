import './App.css';
import SignUp from './component/SignUp';
import SignIn from './component/SignIn';
import Homepage from './component/Homepage/Homepage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path= '' element= {<Homepage />}></Route>
        <Route path='login' element={<SignUp />}></Route>
        <Route path='signIn' element={<SignIn />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
