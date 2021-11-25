import './form.scss';
import { useState } from 'react';

function Form(props) {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      method: method,
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
    let { id } = e.target;
    setMethod(id);
    console.log(id);
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
          <span id="get">GET</span>
          <span id="post">POST</span>
          <span id="put">PUT</span>
          <span id="delete">DELETE</span>
        </label>
      </form>
    </>
  );
}

export default Form;
