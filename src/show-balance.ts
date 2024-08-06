import {Connection, LAMPORTS_PER_SOL, PublicKey} from "@solana/web3.js";

export async function showBalance(publicKey:string){
    const pubKey = new PublicKey(publicKey)
    const connection = new Connection("http://localhost:8899", "confirmed")
    const response = await connection.getAccountInfo(pubKey);
    console.log(response?.lamports!/LAMPORTS_PER_SOL)
}
