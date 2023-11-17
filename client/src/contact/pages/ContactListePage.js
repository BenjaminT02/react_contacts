import {useEffect, useState} from 'react';
import {getAllContact} from '../services/contactService';
import {ListGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';

/**
 * Page de la liste de contact
 * @return {jsx}
 */
function ContactListPage() {
  const [contactsList, setContactList] = useState([]);

  useEffect(()=>{
    getAllContact().then((data) => setContactList(data));
  }, []);
  return (
    <>
      <h1>Liste des contacts</h1>
      <ListGroup>
        {contactsList.map((elt) => (<ListGroup.Item key={elt.id}>
          <Link to={`/contacts/${elt.id}`}>
            {elt.name}
          </Link></ListGroup.Item>))}
      </ListGroup>
    </>
  );
}

export default ContactListPage;
