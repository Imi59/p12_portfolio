import React, { useState } from "react";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      event.target.reset(); // Réinitialise le formulaire
    }, 2000); // Ferme la modale après 1 seconde
  };

  return (
    <div id="contact" className="contact">
      <h1>Contact</h1>
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__form-row">
          <div className="contact__form-group contact__form-group--half">
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="contact__input"
              placeholder="Prénom"
              required
            />
          </div>
          <div className="contact__form-group contact__form-group--half">
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="contact__input"
              placeholder="Nom"
              required
            />
          </div>
        </div>
        <div className="contact__form-group">
          <input
            type="email"
            id="email"
            name="email"
            className="contact__input"
            placeholder="E-mail"
            required
          />
        </div>
        <div className="contact__form-group">
          <textarea
            id="message"
            name="message"
            rows="4"
            className="contact__textarea"
            placeholder="Décrivez-nous votre projet ..."
            required
          ></textarea>
        </div>
        <button type="submit" className="contact__button">
          Envoyer
        </button>
      </form>
      {showModal && (
        <div className="modal">
          <div className="modal__content">
            <p>Votre message a été envoyé avec succès !</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
