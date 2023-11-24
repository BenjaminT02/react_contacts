import {ListGroup, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import useContactList from '../hooks/useContactList';

/**
 * Page de la liste de contact
 * @return {jsx}
 */
function ContactListPage() {
  const {contactsList} = useContactList();
  return (
    <>
      <h1>Liste des contacts</h1>
      <ListGroup>
        {contactsList.map((elt) => (<ListGroup.Item key={elt.id}>
          <Link to={`/contacts/${elt.id}`}>
            {elt.name}
          </Link></ListGroup.Item>))}
      </ListGroup>
      <Button variant="primary" to={`/contacts/`}>
            Ajouter
      </Button>
    </>
  );
}

export default ContactListPage;
