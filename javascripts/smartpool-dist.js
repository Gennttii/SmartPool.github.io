var Web3=require("web3"),publicNode="https://ropsten.infura.io/0BRKxQ0SFvAxGL72cbXi",web3=new Web3(new Web3.providers.HttpProvider(publicNode)),version=web3.version.api,smartPoolAddress="0xD2011af56f3bf0d11d2F17a7AbDaE86db63E255D",smartPoolURL="https://testnet.etherscan.io/api?module=contract&action=getabi&address="+smartPoolAddress+"&apikey=DS24ZMNDG8CGKNU1QAU32WFS4DZKJ3PE3J";$.getJSON(smartPoolURL,function(e){var t="";if(t=JSON.parse(e.result),""!=t){var o=web3.eth.contract(t),r=o.at(smartPoolAddress),a=r.totalFundRaised(),s=web3.fromWei(a,"ether");$("#total-fund-raised").text(s),console.log("Total Fund Raised: "+s)}else console.log("We couldn't get information from Etherscan!")});