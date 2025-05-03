import { useContext, useState, useEffect } from 'react';
import './ContactForm.css';

// Componentes
import Button from '../Button/Button';

// Context
import { AppContext } from "../../contexts/AppContext";

function ContactForm() {
  const appContext = useContext(AppContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [formSubmitLoading, setFormSubmitLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isFormValid) {
      setFormSubmitLoading(true);
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...formData,
            access_key: "6543670e-75ba-4d4a-8530-93dc32124a68"
          })
        });

        if (response.ok) {
          setFormSubmitted(true);
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        } else {
          alert("Erro ao enviar.");
        }
      } catch (e) {
        console.error('Erro:', e);
        alert('Erro ao enviar o formulário.');
      } finally {
        setFormSubmitLoading(false);
      }
    }
  };

  useEffect(() => {
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    

    const isValid =
      formData.name.trim() &&
      formData.email.trim() &&
      isValidEmail(formData.email) &&
      formData.message.trim();

    setIsFormValid(isValid);
  }, [formData]);


  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => {
        setFormSubmitted(false)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [formSubmitted])
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    setFormSubmitted(false); // Oculta a mensagem de sucesso ao digitar novamente
  };

  return (
    <div className='contact-form d-flex fd-column al-center'>
      <h2>{appContext.languages[appContext.language].contact.title}</h2>
      <form onSubmit={handleSubmit}>
        <div className='d-flex form-group'>
          <input
            className='form-input'
            type="text"
            id="name"
            name='name'
            placeholder={appContext.languages[appContext.language].contact.pl1}
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className='form-input'
            type="email"
            id="email"
            name='email'
            placeholder={appContext.languages[appContext.language].contact.pl2}
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='d-flex form-group'>
          <textarea
            className='form-input'
            name="message"
            id="message"
            placeholder={appContext.languages[appContext.language].contact.pl3}
            value={formData.message}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>
        <div className='al-center d-flex fd-column form-group'>
  <Button
    type="submit"
    buttonStyle="secondary"
    disabled={!isFormValid || formSubmitLoading}
  >
    {appContext.languages[appContext.language].general.send}
  </Button>
  {formSubmitted && (
  <p className='text-primary' style={{ marginTop: '10px' }}>
    {appContext.languages[appContext.language].contact.sucessMsg || 'Enviado com sucesso!'}
  </p>
)}
</div>

      </form>
    </div>
  );
}

export default ContactForm;
