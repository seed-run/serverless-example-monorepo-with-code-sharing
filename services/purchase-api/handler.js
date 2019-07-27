import AWS from '../../libs/aws-sdk';
import Stripe from "stripe";

export const main = async (event, context, callback) => {
  const { stripeToken } = JSON.parse(event.body);

  // Charge
  const stripe = Stripe(process.env.stripeSecretKey);
  await stripe.charges.create({
    source      : stripeToken,
    amount      : 100,
    description : 'Purchase Charge',
    currency    : "usd",
  });

  // Publish message
  const sns = new AWS.SNS();
  await sns.publish({
    Message           : JSON.stringify({ /*...*/ }),
    MessageStructure  : 'string',
    TopicArn          : process.env.PURCHASED_TOPIC_ARN,
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
      status : 'success'
    })
  };
};
