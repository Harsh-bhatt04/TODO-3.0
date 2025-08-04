import dotenv from 'dotenv';
dotenv.config();

import {Web3} from 'web3'
import ABI from '../ABI.json' with {type: 'json'}


const API_KEY = process.env.API_KEY
// console.log(API_KEY)

const web3 = new Web3(API_KEY)

const contractAddress = process.env.CONTRACT_ADDRESS

export const contract = new web3.eth.Contract(ABI,contractAddress)




// 7999544306  