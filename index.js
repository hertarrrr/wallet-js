import WalletConnectProvider from "@walletconnect/web3-provider";
const name = WalletConnectProvider.name

const connect = () => {
  if (typeof window === "undefined") {
    console.log("environment: node.js")
  }
  else {
    console.log("environment: browser")
    const metamask = () => {
      if(window.web3) {
        console.log("web3 exists", name)
      }
      else {
        console.log("web3 doesn't exist")
      }
      metamask()
    }
  }
}

export default connect;