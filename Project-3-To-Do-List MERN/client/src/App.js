import TodoForm from './components/TodoForm'
import Header from "./components/Header";
import Todos from './components/Todos';
function App() {
  return (
    <div className="App">
      <Header></Header>
    <TodoForm></TodoForm>
    <Todos></Todos>
    </div>
  );
}

export default App;
