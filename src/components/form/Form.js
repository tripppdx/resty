import './form.scss';
import { useState } from 'react';

function Form(props) {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      method: method ? method : 'GET',
      url: url,
    };
    props.handleApiCall(formData);
  }

  const [url, setUrl] = useState('');

  const handleSetUrl = e => {
    let { value } = e.target;
    setUrl(value);
  };

  const [method, setMethod] = useState('');

  const handleSetMethod = e => {
    const buttons = document.querySelectorAll('.method-button');
    buttons.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');

    let { id } = e.target;
    setMethod(id);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input onChange={handleSetUrl} name="url" type="text" />
          <button type="submit">GO!</button>
        </label>
        <label onClick={handleSetMethod} className="methods">
          <span id="GET" className="active method-button">
            GET
          </span>
          <span id="POST" className="method-button">
            POST
          </span>
          <span id="PUT" className="method-button">
            PUT
          </span>
          <span id="DELETE" className="method-button">
            DELETE
          </span>
        </label>
      </form>
    </>
  );
}

export default Form;
