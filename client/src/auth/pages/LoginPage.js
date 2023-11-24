import {useContext} from 'react';
import {Button, Container, Form} from 'react-bootstrap';
import {AuthContext} from '../contexts/AuthContext';
import {useNavigate} from 'react-router-dom';
import {login} from '../services/authService';
import useForm from '../../_misc/hooks/useForm';

/**
 * Page d'authentification
 * @return {jsx}
 */
function LoginPage() {
  const {setIsAuth} = useContext(AuthContext);
  const navigate = useNavigate();

  const submitAction = () => {
    login(data.email, data.password).then((isConnected) => {
      setIsAuth(isConnected);
      navigate('/');
    });
  };

  const {data, handleChange, handleSubmit} = useForm({
    email: '',
    password: ''},
  submitAction
  );

  return (
    <Container>
      <h1>Page de connexion</h1>
      <h2>Veuillez-vous connecter avec un identifiant</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Courriel</Form.Label>
          <Form.Control type="email" placeholder="courriel"
            value={data.email} name='email'
            onChange={(e)=>handleChange(e.target)}/>
          <Form.Text className="text-muted">
            Ne sera jamais partagé
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="password" placeholder="mot de passe"
            value={data.password} name='password'
            onChange={(e)=>handleChange(e.target)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
            Se connecter
        </Button>
      </Form>
    </Container>
  );
}

export default LoginPage;


