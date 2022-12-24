import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./components/Header";
import NotePage from "./pages/NotePage";
import NotesListPage from "./pages/NotesListPage";
function App() {
  return (

     <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route path="/" exact element={NotesListPage} />
          <Route path="/note/:id" element={NotePage} />
        </div>
      </div>
    </Router>

  );
}

export default App;
