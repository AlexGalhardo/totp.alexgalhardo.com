import * as OTPAuth from "otpauth";

const secret = 'PUWFIXPJP2OPOXKZDZDRGQYPHV46O6VZOFETDAA4BWBQW5P3S5SWCVH2EVAX72QBBAMRD7ASIFIGE'
// const secret = 'JBSWY3DPEHPK3PXP'
const token = '595360'

let totp = new OTPAuth.TOTP({
  // Provider or service the account is associated with.
  issuer: "Galhardo",
  // Account identifier.
  label: "galhardo",
  // Algorithm used for the HMAC function.
  algorithm: "SHA1",
  // Length of the generated tokens.
  digits: 6,
  // Interval of time for which a token is valid, in seconds.
  period: 30,
  // Arbitrary key encoded in Base32 or OTPAuth.Secret instance.
  secret
})

const delta = totp.validate({ token, window: 1 })
console.log(delta)