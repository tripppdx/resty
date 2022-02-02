import React from 'react';
import './results.scss';
import ReactJson from 'react-json-prettify';

function Results(props) {
  return (
    <>
      <section>
        {props.loading ? (
          <h3>Results...</h3>
        ) : (
          <>
            <pre>
              <label>"Headers" : </label>
              {props.data && <ReactJson json={props.data.headers} />}
            </pre>
            <pre data-testid="data">
              <label>"Response" : </label>
              {props.data && <ReactJson json={props.data.data} />}
            </pre>
          </>
        )}
      </section>
    </>
  );
}

export default Results;
