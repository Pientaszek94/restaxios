import { Footer, Navbar } from "./components";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Home, Posts, Todos, Users } from "./pages";
function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/todos" element={<Todos/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>

  );
}

export default App;
