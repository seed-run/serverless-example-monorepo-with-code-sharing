import AWS from 'aws-sdk';

AWS.config.update({
  httpOptions: {
    timeout: 5000,
  }
});

export default AWS;
