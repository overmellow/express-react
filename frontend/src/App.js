import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/common/Home';
import Books from './components/books/Books';
import Layout from './components/common/Layout';
import { useState } from 'react';

import { getData, removeData, saveData } from './services/LocalStorage';
import { AuthContext } from "./contexts/AuthContext";
import Signup from './components/auth/Signup';
import ProtectedRoute from './components/common/ProtectedRoute';
import Login from './components/auth/Login';
import Users from './components/users/Users';
import Book from './components/books/Book';

function App() {
  const [authToken, setAuthToken] = useState(getData('token'));
  
  const setToken = (data) => {
    saveData("token", data)
    setAuthToken(data);
  }

  const removeToken = () => {
    removeData("token")
    setAuthToken(null);
  }
 
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <> 
      <AuthContext.Provider value={{ authToken, setAuthToken: setToken, removeAuthToken: removeToken }}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />  } />
            <Route path="/login" element={<Login />  } />
            <Route path="/signup" element={<Signup />  } />
            <Route path="/books" element={
                <ProtectedRoute>
                  <Books />                  
                </ProtectedRoute>
              }>
              <Route path=":id" element={<Book />} />                
            </Route>                           
            <Route path="/users" element={
                <ProtectedRoute>
                  <Users />  
                </ProtectedRoute>
              } />              
          </Route>
        </Routes>  
      </AuthContext.Provider>           
      <h5>{authToken}</h5>
    </>
  );
}

export default App;


