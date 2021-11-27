import React from 'react';
import './results.scss';

function Results(props) {
  return (
    <section>
      <pre>
        <label>"Headers" : </label>
        {props.data ? JSON.stringify(props.data.headers, undefined, 2) : null}
      </pre>
      <pre data-testid="data">
        <label>"Response" : </label>
        {props.data ? JSON.stringify(props.data.data, undefined, 2) : null}
      </pre>
    </section>
  );
}

export default Results;
