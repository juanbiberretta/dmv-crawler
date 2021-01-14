// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

import client from 'twilio';

export const sendSms = async (body: string) => {
  const c = client(accountSid, authToken);

  const res = await c.messages.create({
    body,
    from: '+19165883473',
    to: '+14409350850',
  });
  console.log('Text message response: ', res);
};
