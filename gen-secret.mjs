import crypto from 'node:crypto'
import * as OTPAuth from "otpauth";

const secretHex = crypto.randomBytes(48).toString('hex')
let secret = OTPAuth.Secret.fromHex(secretHex)

console.log(secret.base32)