import {useEffect, useState} from 'react';
import {getAllContact} from '../services/contactService';


/**
 * Custom hook pour la liste de contacts
 * @return {jsx}
 */
function useContactList() {
  const [contactsList, setContactList] = useState([]);

  useEffect(()=>{
    getAllContact().then((data) => setContactList(data));
  }, []);

  return {contactsList};
}

export default useContactList;
