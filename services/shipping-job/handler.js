import AWS from '../../libs/aws-sdk';

export const main = async (event, context, callback) => {
  // Update database and mark the item as ready to ship
  const ddb  = new AWS.DynamoDB.DocumentClient();
  await ddb.update({
    TableName: 'Inventory',
    Key: {
      itemId: '...'
    },
    UpdateExpression: 'SET shippingStatus = :status',
    ExpressionAttributeValues: {
      ':status': 'READY',
    },
  }).promise();
};
