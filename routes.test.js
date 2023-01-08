const fetch = require('node-fetch');

const { expect } = require('chai');

const config = require('./config.json');

const { HDate } = require('hebcal')

const server = require('./server');

it('Should respond with hello world!', async () => {
  const response = await fetch(`http://localhost:${config.port}`);

  expect(response).to.property('status', 200);
  expect(await response.text()).eq('Hello world!');
});

it(`Should respond with today's date`, async () => {
  const response = await fetch(`http://localhost:${config.port}/hebcal`).then(x => x.text());

  expect(response).to.eq(new HDate().toString('h'));
})

after(() => server.close(() => 'Shutting down server'));
