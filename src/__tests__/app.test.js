import Results from '../components/results/Results.js';
import { render } from '@testing-library/react';
import axios from 'axios';

it('Upon submitting the form will result in data being rendered in the output area', async () => {
  const data = await axios({
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/pokemon/ditto',
  });

  render(<Results data={data} />);
  expect(data).toBeTruthy();
});
