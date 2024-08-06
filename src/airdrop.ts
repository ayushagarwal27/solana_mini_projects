import {PublicKey, Connection, LAMPORTS_PER_SOL} from '@solana/web3.js'


export const airdrop = async (address:PublicKey, amount:number) => {
    const publicKey = address;
    const connection = new Connection("http://localhost:8899", 'confirmed');
   const signature = await connection.requestAirdrop(publicKey, amount*LAMPORTS_PER_SOL);
    const latestBlockHash = await connection.getLatestBlockhash();
   await connection.confirmTransaction({
       blockhash: latestBlockHash.blockhash,
       lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
       signature,
   });
}

// airdrop(process.env.WALLWT_ADDRESS!,1)