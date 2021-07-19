function PopupWithForm({name, title, children, isOpen, onClose, handleSubmit}) {

    return (
        <div className={`pop-up pop-up_${name} ${isOpen ? 'pop-up_opened' : ''}`}>
          <div className="pop-up__window">
            <h3 className="pop-up__title">{title}</h3>
            <form className="popup__form" name={name} noValidate onSubmit={handleSubmit}>
              {children}
              <input 
            type="submit" 
            className="pop-up__submit-button" 
            value="Создать" 
            name="submit" />
            </form>
            <button type="button" className="pop-up__close-button" onClick={onClose} />
          </div>
        </div>
    );
  }
  
  export default PopupWithForm;