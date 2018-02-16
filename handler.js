import someAsync from './some-async';

export async function hello (event, context, callback)  {  
  const result = await someAsync();  
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: result,
    }),
  };

  callback(null, response);
};
