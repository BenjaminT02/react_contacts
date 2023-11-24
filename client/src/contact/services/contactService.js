import axios from 'axios';

/**
 * Retourbe tout les contacts de l'API.
 */
export async function getAllContact() {
  const res = await axios.get('contacts');
  return res.data;
}

/**
 * Retourne un contact par son Id
 * @param {Number} id
 */
export async function getContactById(id) {
  const res = await axios.get(`contacts/${id}`);
  return res.data[0]; // [0] car l'API est tout cassé
}

/**
 * Met a jour la liste de contact.
 * @param {Object} data
 * @return {Object}
 */
export async function updateContact(data) {
  const res= await axios.put('contacts', data);
  return res.data;
}
