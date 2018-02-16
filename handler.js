import someAsync from './some-async';
import moment from 'moment';

export async function hello (event, context, callback)  {  
  const result = await someAsync();  
  const now = moment();
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: now.toDate(),
    }),
  };

  callback(null, response);
};
