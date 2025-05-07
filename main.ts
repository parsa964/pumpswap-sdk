import { getPrice } from './src/pool';
import { PublicKey } from '@solana/web3.js';

async function main() {
    const mint = new PublicKey("BuKpdMgBCC9KVKPcxqMkm8QW4fhfdC5BiKQ7yeEKpump");   
    const price = await getPrice(mint);
    if (price === null) {
        console.log(`No pools found for token with mint address: ${mint.toString()}`);
    } else {
        console.log(`Price: ${price}`);
    }
}
main();