import Pages from "./pages/Pages";
import Category from "./component/Category";
import { BrowserRouter as Router } from "react-router-dom";
import Search from "./component/Search";
import Recipie from "./pages/Recipe";

function App() {
  return (
    <div className="App">
      <Router>
       
        <Search></Search><Category></Category>
      <Pages></Pages>
      
      </Router>
    
    </div>
  );
}

export default App;
