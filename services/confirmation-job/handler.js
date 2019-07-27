import AWS from '../../libs/aws-sdk';

export const main = async (event, context, callback) => {
  const fromEmail = "support@mycompany.com";
  const toEmail = "buyer@gmail.com";

  // Send confirmation email
  const ses = new AWS.SES();
  await ses.publish({
    Destination: {
      ToAddresses: [ toEmail ]
    },
    Message: {
      Body: {
        Html: { Charset: "UTF-8", Data: '...' },
        Text: { Charset: "UTF-8", Data: '...' }
      },
      Subject: { Charset: "UTF-8", Data: '...' }
    },
    Source: fromEmail,
  }).promise();
};
