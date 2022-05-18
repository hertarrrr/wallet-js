import { ethers } from "ethers"

let provider

const metamask = async () => {
  if(!window.ethereum) {
    return null
  }

  const metamask = window.ethereum
  provider = new ethers.providers.Web3Provider(metamask)
  const accounts = await metamask.request({
    method: "eth_requestAccounts"
  })
    // handled by request
    .catch(err => console.error(err))
  return ethers.utils.getAddress(accounts[0])
}

export const connectWallet = async () => {
  if (typeof window === "undefined") {
    console.log("environment required: browser")
    return null
  }
  return metamask()
}

export const signMessage = async (data) => {
  if(provider === undefined) {
    return ""
  }
  return await provider.getSigner().signMessage(data)
}