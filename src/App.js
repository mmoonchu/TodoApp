import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./utilities/users-service";
import NewItemPage from "./pages/NewItemPage/NewItemPage.jsx";
import AuthPage from "./pages/AuthPage/AuthPage.jsx";
import TodoList from "./pages/TodoList/TodoList.jsx";
import EditPage from "./pages/EditPage/EditPage.jsx";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <div className="App">
      {user ? (
        <>
          <Navbar user={user} setUser={setUser} />
          <Routes>
            <Route path="/todo/new" element={<NewItemPage user={user} setUser={setUser} />} />
            <Route path="/todo" element={<TodoList user={user} setUser={setUser} />} />
            <Route
              path="/todo/edit/:id"
              element={<EditPage user={user} setUser={setUser} item={{ _id: 'example-id', title: 'Example Title', desc: 'Example Description' }} />}
            />
            </Routes>
        </>
      ) : (
        <AuthPage user={user} setUser={setUser} />
      )}
    </div>
  );
}

export default App;
