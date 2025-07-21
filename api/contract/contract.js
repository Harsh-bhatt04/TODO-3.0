import {Web3} from 'web3'
import ABI from '../ABI.json' with {type: 'json'}


const web3 = new Web3("https://muddy-side-morning.ethereum-sepolia.quiknode.pro/f593c7df84d21072f496e5688b4b889f06b55c7a/")

const contractAddress = "0xa062FD2423BE71323787AbF2231d570389020623"
export const contract = new web3.eth.Contract(ABI,contractAddress)

