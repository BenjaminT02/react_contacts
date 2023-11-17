import axios from 'axios';

/**
 * Retourbe tout les contacts de l'API.
 */
export async function getAllContact() {
  const res = await axios.get('contacts');
  return res.data;
}
