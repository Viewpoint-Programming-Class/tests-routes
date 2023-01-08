const fetch = require('node-fetch');

const { expect } = require('chai');
const config = require('./config.json');

require('./server');

it('Should respond with hello world!', async () => {
  const response = await fetch(`http://localhost:${config.port}`);

  expect(response).to.property('status', 200);
  expect(await response.text()).eq('Hello world!');
});
