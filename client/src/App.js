import {Container} from 'react-bootstrap';
import './App.css';
import {useContext} from 'react';
import {AuthContext} from './auth/contexts/AuthContext';
import {Route, Routes} from 'react-router-dom';
import NavigationBar from './_misc/components/NavigationBar';
import WelcomePage from './_misc/pages/WelcomePage';
import HomePage from './_misc/pages/HomePage';
import LoginPage from './auth/pages/LoginPage';
import ContactListPage from './contact/pages/ContactListePage';
import ContactFormEditPage from './contact/pages/ContactFormEditPage';

/**
 * Composant racine de l'application
 * @return {jsx}
 */
function App() {
  const {isAuth} = useContext(AuthContext);
  return (
    <div className="App">
      <NavigationBar/>
      <Container>
        <Routes>
          {
            isAuth ? (
              <>
                <Route path='' element={<WelcomePage/>}/>
                <Route path='contacts' element={<ContactListPage/>}/>
                <Route path='contacts/:id' element={<ContactFormEditPage/>}/>
              </>
            ) : (
              <>
                <Route path='' element={<HomePage/>}/>
                <Route path='login' element={<LoginPage/>}/>
              </>
            )
          }
        </Routes>
      </Container>
    </div>
  );
}

export default App;
