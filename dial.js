const http = require('http');
const express = require('express');
const { urlencoded } = require('body-parser');
const ngrok = require('ngrok');
const twilio = require('twilio');
const VoiceResponse = require('twilio').twiml.VoiceResponse
require(`dotenv`).config()

// Set up our express web application
const PORT = 8767;
const app = express();
app.use(urlencoded({ extended: false }));

// This is your voice URL - a clean slate. It won't work out of the box this
// time, however. You know what to do, Operator.
app.post('/voice', (request, response) => {
  let twiml = new VoiceResponse();

  const number = request.body.From.slice(2)

  twiml.say(`Do you like potatoes in ${explodedNumber(number)}?`)

  response.type('text/xml');
  response.send(twiml.toString());
});

function explodedNumber(number) {
  console.log(number)

  const returnNumber = []

  number.map((character) => {
    returnNumber.push(`${character} `)
  })
  return number
}

// Create and run an HTTP server which can handle incoming requests
const server = http.createServer(app);
server.listen(PORT, () =>
  console.log(`Express server listening on localhost:${PORT}`)
);

// -----------------------------------------------------------------------------
// This code sets up a tool called ngrok to let Twilio talk to the app running
// on your computer. It then uses the Twilio REST API to direct all incoming
// calls to your local app. You should not have to edit any of this
// code below.
// -----------------------------------------------------------------------------

/* jshint ignore:start */
(async function() {
  try {
    await ngrok.disconnect();
    await ngrok.kill();
    let url = await ngrok.connect(PORT);
    console.log('Your application is live at:', url);

    let client = twilio(
      process.env.TQ_TWILIO_ACCOUNT_SID,
      process.env.TQ_TWILIO_AUTH_TOKEN
    );
    let ngrokUrl = `${url}/voice`;
    let number = await client
      .incomingPhoneNumbers(process.env.TQ_TWILIO_NUMBER_SID)
      .update({
        voiceUrl: ngrokUrl,
        voiceMethod: 'POST',
      });
    console.log(
      `${number.phoneNumber} configured to send incoming calls to ${ngrokUrl}`
    );
    console.log(
      `Call ${number.phoneNumber} to check out your TwiML!`
    );
  } catch (e) {
    console.log('There was an error configuring your voice URL:');
    console.log(e);
  }
})();
/* jshint ignore:end */
