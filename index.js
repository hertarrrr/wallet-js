import { ethers } from "ethers"

let provider
let mmExtension

const connector = {
  metamask: async () => {
    if(mmExtension === undefined) {
      return null
    }

    const accounts = await mmExtension.request({
      method: "eth_requestAccounts"
    })
    return ethers.utils.getAddress(accounts[0])
  }
}

export const connectWallet = async () => {
  try {
    return await connector.metamask()
  }
  catch (error) { }
}

export const signMessage = async (data) => {
  if(provider === undefined) {
    return null
  }

  try {
    return await provider.getSigner().signMessage(data)
  }
  catch (error) { }
}

const init = () => {
  if (typeof window === "undefined") {
    console.log("environment required: browser")
    return null
  }

  if(!window.ethereum) {
    return null
  }

  mmExtension = window.ethereum
  provider = new ethers.providers.Web3Provider(mmExtension)
}

init()