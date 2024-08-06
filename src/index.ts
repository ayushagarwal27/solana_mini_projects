import {showBalance} from "./show-balance";
require('dotenv').config()

const pubKey = process.env.WALLWT_ADDRESS
showBalance(pubKey!);