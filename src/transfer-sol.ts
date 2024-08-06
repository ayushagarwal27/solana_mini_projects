import {
    Connection,
    Keypair,
    LAMPORTS_PER_SOL,
    PublicKey,
    sendAndConfirmTransaction,
    SystemProgram,
    Transaction
} from "@solana/web3.js";
import {airdrop} from "./airdrop";

require('dotenv').config()

const pubKey = process.env.WALLWT_ADDRESS!;


export async function transferSol(from:Keypair, to:PublicKey, amount:number){
    const connection = new Connection("http://localhost:8899","confirmed")
    const transaction = new Transaction();
    const instructions = SystemProgram.transfer({fromPubkey:from.publicKey, toPubkey:to, lamports: amount* LAMPORTS_PER_SOL});
        transaction.add(instructions);
    await sendAndConfirmTransaction(connection,transaction, [from])
}

const secret = Uint8Array.from([168,61,31,223,200,25,153,110,24,178,247,171,149,165,238,134,100,214,152,211,113,11,43,246,170,129,203,2,143,45,167,122,29,248,24,254,36,35,153,231,248,103,84,39,214,102,128,54,82,235,4,13,231,241,34,255,169,112,230,104,38,26,62,220])

const fromKeyPair = Keypair.fromSecretKey(secret);
const toPublicKey = new PublicKey(pubKey);

(async ()=>{
    await airdrop(fromKeyPair.publicKey, 3);
    await transferSol(fromKeyPair, toPublicKey, 2);
})()
