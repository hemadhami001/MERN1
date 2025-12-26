import {Routes, Route} from 'react-router'

import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NoteDetailPage from './pages/NoteDetailPage.jsx'

const App = () => {
  return (
  <div>
    <button onClick={() => toast.success("Congrats!")}>Click me</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} /> 
      </Routes>
    </div>
  );
}

export default App;