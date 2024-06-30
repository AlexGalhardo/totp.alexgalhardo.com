import QRCode from 'qrcode'
import * as OTPAuth from "otpauth";

const secret = 'PUWFIXPJP2OPOXKZDZDRGQYPHV46O6VZOFETDAA4BWBQW5P3S5SWCVH2EVAX72QBBAMRD7ASIFIGE'

let totp = new OTPAuth.TOTP({
  // Provider or service the account is associated with.
  issuer: "Galhardo",
  // Account identifier.
  label: "Galhardo",
  // Algorithm used for the HMAC function.
  algorithm: "SHA1",
  // Length of the generated tokens.
  digits: 6,
  // Interval of time for which a token is valid, in seconds.
  period: 30,
  // Arbitrary key encoded in Base32 or OTPAuth.Secret instance.
  secret
})

const uri = totp.toString() // or 'OTPAuth.URI.stringify(totp)'

// console.log(uri)

QRCode.toString(uri, { type: 'terminal' }, (err, data) => {
  console.log(data)
  if (err) {
    console.error(err)
  }
})