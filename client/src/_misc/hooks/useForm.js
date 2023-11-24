import {useState} from 'react';

/**
 * Custom hook qui englobe la gestion des formulaires
 * @param {Object} initialData
 * @param {Function} submitAction
 * @return {Object}
 */
function useForm(initialData, submitAction) {
  const [data, setData] = useState(initialData);

  /**
       * Binding du formulaire et du state
       * @param {{name:String, value:'String'}} target
       */
  function handleChange({name, value}) {
    setData((prev) => ({...prev, [name]: value}));
  }

  /**
    * Gestionnaire d'évènement de soumission du formulaire
    * @param {Event} event
    */
  function handleSubmit(event) {
    event.preventDefault();
    submitAction();
  };

  return {
    data,
    handleChange,
    handleSubmit,
  };
}

export default useForm;
