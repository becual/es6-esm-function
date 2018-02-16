import someAsync from './some-async';

export async function hello (event, context, callback)  {  

  const result = await Promise.resolve(100);
  console.info('result', result);
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);
};
