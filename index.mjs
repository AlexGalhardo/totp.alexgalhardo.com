import * as OTPAuth from "otpauth";

const secret = 'PUWFIXPJP2OPOXKZDZDRGQYPHV46O6VZOFETDAA4BWBQW5P3S5SWCVH2EVAX72QBBAMRD7ASIFIGE'

// Create a new TOTP object.
let totp = new OTPAuth.TOTP({
  // Provider or service the account is associated with.
  issuer: "ACME",
  // Account identifier.
  label: "AzureDiamond",
  // Algorithm used for the HMAC function.
  algorithm: "SHA1",
  // Length of the generated tokens.
  digits: 6,
  // Interval of time for which a token is valid, in seconds.
  period: 30,
  // Arbitrary key encoded in Base32 or OTPAuth.Secret instance.
  secret // "NB2W45DFOIZA", // or 'OTPAuth.Secret.fromBase32("NB2W45DFOIZA")'
});

// A cryptographically secure random secret can also be generated with:
// let secret = new OTPAuth.Secret({ size: 20 });

// Generate a token (returns the current token as a string).
let token = totp.generate();

// Validate a token (returns the token delta or null if it is not found in the
// search window, in which case it should be considered invalid).
let delta = totp.validate({ token, window: 1 });

// Get the remaining seconds until the current token changes.
let seconds = totp.period - (Math.floor(Date.now() / 1000) % totp.period);

// Convert to Google Authenticator key URI format (usually the URI is encoded
// in a QR code that can be scanned by the user. This functionality is outside
// the scope of the project, but there are many libraries that can be used for
// this purpose).
//
// otpauth://totp/ACME:AzureDiamond?issuer=ACME&secret=NB2W45DFOIZA&algorithm=SHA1&digits=6&period=30
let uri = totp.toString(); // or 'OTPAuth.URI.stringify(totp)'

// Convert from Google Authenticator key URI format.
totp = OTPAuth.URI.parse(uri);

console.log({ totp, secret, token, delta, seconds, uri });
