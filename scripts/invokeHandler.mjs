import handler from '../api/index.js';

// evento mínimo para serverless-http
const event = {
  httpMethod: 'GET',
  path: '/',
  headers: {},
  queryStringParameters: null,
  body: null,
  isBase64Encoded: false,
};

async function run() {
  try {
    const res = await handler(event, {});
    console.log('Handler response:');
    console.log(res);
  } catch (e) {
    console.error('Invocation error:', e);
  }
}

run();
