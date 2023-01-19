var web3Provider;
var web3js;

// window.linkWallet = function () {
//   if (ethereum) {
//     web3Provider = ethereum;
//     // 新版需要请求用户授权
//     try {
//       ethereum.enable();
//     } catch (error) {
//       alert("用户取消授权");
//       return;
//     }
//   } else if (web3) {
//     // MetaMask Legacy dapp browsers...
//     web3Provider = web3.currentProvider;
//     console.log("web3.currentProvider:");
//     console.log(web3.currentProvider);
//   } else {
//     web3Provider = new Web3.providers.HttpProvider("http://localhost:8545");
//     console.log("https://http-testnet.hecochain.com");
//   }
//   web3js = new Web3(web3Provider);

//   document.getElementById("btn-wallet").innerText = "重新连接";
// };

window.getAccount = function () {
  let val = $("#input-account").val();

  console.log($(`div:contains(${val})`));
};

// $('<button id="btn-wallet" onclick="linkWallet">连接wallet</button>').appendTo(
//   $(".rewards-info")
// );
$('<button onclick="getAccount()">获取account</button>').appendTo(
  $(".rewards-info")
);
$('<input id="input-account"  type="text" value="" />').appendTo(
  $(".rewards-info")
);
