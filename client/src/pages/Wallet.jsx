import React from 'react'
import ABI from './ABI.json'
import { useNavigate } from 'react-router-dom'
import {Web3} from 'web3'
import Navigation from '../components/Navigation';

function Wallet({saveState}) {
  const navigateTo = useNavigate()
  const connectWallet = async () => {
    try {
      if(window.ethereum){
        const web3 = new Web3(window.ethereum);
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
      });

      const contractAddress = "0xa062FD2423BE71323787AbF2231d570389020623"
const contract = new web3.eth.Contract(ABI,contractAddress)
      console.log(contract)
      saveState({web3: web3,contract:contract,account:accounts[0]})
      navigateTo('/create-task')
      }
      else{
        throw new Error
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
   <div>
    <h1 className='mb-8 text-'>Connect with MetaMask wallet to use it</h1>
     <button onClick={connectWallet}>

      
      Connect Wallet</button>
     
   </div>
    
  )
}

export default Wallet