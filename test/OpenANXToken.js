var tokenOutput={"contracts":{"OpenANXToken.sol:ERC20Interface":{"abi":"[{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"remaining\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}]","bin":""},"OpenANXToken.sol:ERC20Token":{"abi":"[{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"a\",\"type\":\"uint256\"},{\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"safeSub\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"remaining\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"a\",\"type\":\"uint256\"},{\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"safeAdd\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"inputs\":[{\"name\":\"_symbol\",\"type\":\"string\"},{\"name\":\"_name\",\"type\":\"string\"},{\"name\":\"_decimals\",\"type\":\"uint8\"},{\"name\":\"_totalSupply\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}]","bin":"6060604052341561000c57fe5b604051610b6c380380610b6c83398101604090815281516020830151918301516060840151918401939290920191905b5b60018054600160a060020a03191633600160a060020a03161790555b835161006c9060039060208701906100b9565b5082516100809060049060208601906100b9565b506005805460ff191660ff84161790556000818155600154600160a060020a031681526006602052604090208190555b50505050610159565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100fa57805160ff1916838001178555610127565b82800160010185558215610127579182015b8281111561012757825182559160200191906001019061010c565b5b50610134929150610138565b5090565b61015691905b80821115610134576000815560010161013e565b5090565b90565b610a04806101686000396000f300606060405236156100d85763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde0381146100da578063095ea7b31461016a57806318160ddd1461019d57806323b872dd146101bf578063313ce567146101f857806370a082311461021e57806379ba50971461024c5780638da5cb5b1461025e57806395d89b411461028a578063a293d1e81461031a578063a9059cbb14610342578063d4ee1d9014610375578063dd62ed3e146103a1578063e6cb9013146103d5578063f2fde38b146103fd575bfe5b34156100e257fe5b6100ea61041b565b604080516020808252835181830152835191928392908301918501908083838215610130575b80518252602083111561013057601f199092019160209182019101610110565b505050905090810190601f16801561015c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561017257fe5b610189600160a060020a03600435166024356104a9565b604080519115158252519081900360200190f35b34156101a557fe5b6101ad610514565b60408051918252519081900360200190f35b34156101c757fe5b610189600160a060020a036004358116906024351660443561051a565b604080519115158252519081900360200190f35b341561020057fe5b6102086106ab565b6040805160ff9092168252519081900360200190f35b341561022657fe5b6101ad600160a060020a03600435166106b4565b60408051918252519081900360200190f35b341561025457fe5b61025c6106d3565b005b341561026657fe5b61026e61075c565b60408051600160a060020a039092168252519081900360200190f35b341561029257fe5b6100ea61076b565b604080516020808252835181830152835191928392908301918501908083838215610130575b80518252602083111561013057601f199092019160209182019101610110565b505050905090810190601f16801561015c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561032257fe5b6101ad6004356024356107f9565b60408051918252519081900360200190f35b341561034a57fe5b610189600160a060020a0360043516602435610817565b604080519115158252519081900360200190f35b341561037d57fe5b61026e61092b565b60408051600160a060020a039092168252519081900360200190f35b34156103a957fe5b6101ad600160a060020a036004358116906024351661093a565b60408051918252519081900360200190f35b34156103dd57fe5b6101ad600435602435610967565b60408051918252519081900360200190f35b341561040557fe5b61025c600160a060020a036004351661098f565b005b6004805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104a15780601f10610476576101008083540402835291602001916104a1565b820191906000526020600020905b81548152906001019060200180831161048457829003601f168201915b505050505081565b600160a060020a03338116600081815260076020908152604080832094871680845294825280832086905580518681529051929493927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060015b92915050565b60005481565b600160a060020a03831660009081526006602052604081205482901080159061056a5750600160a060020a0380851660009081526007602090815260408083203390941683529290522054829010155b80156105765750600082115b801561059b5750600160a060020a038316600090815260066020526040902054828101115b1561069f57600160a060020a0384166000908152600660205260409020546105c390836107f9565b600160a060020a038086166000908152600660209081526040808320949094556007815283822033909316825291909152205461060090836107f9565b600160a060020a03808616600090815260076020908152604080832033851684528252808320949094559186168152600690915220546106409083610967565b600160a060020a0380851660008181526006602090815260409182902094909455805186815290519193928816927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a35060016106a3565b5060005b5b9392505050565b60055460ff1681565b600160a060020a0381166000908152600660205260409020545b919050565b60025433600160a060020a039081169116141561075957600254600154604051600160a060020a0392831692909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36002546001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039092169190911790555b5b565b600154600160a060020a031681565b6003805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104a15780601f10610476576101008083540402835291602001916104a1565b820191906000526020600020905b81548152906001019060200180831161048457829003601f168201915b505050505081565b60008183038381111561080c5760006000fd5b8091505b5092915050565b600160a060020a0333166000908152600660205260408120548290108015906108405750600082115b80156108655750600160a060020a038316600090815260066020526040902054828101115b1561091c57600160a060020a03331660009081526006602052604090205461088d90836107f9565b600160a060020a0333811660009081526006602052604080822093909355908516815220546108bc9083610967565b600160a060020a038085166000818152600660209081526040918290209490945580518681529051919333909316927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a350600161050e565b50600061050e565b5b92915050565b600254600160a060020a031681565b600160a060020a038083166000908152600760209081526040808320938516835292905220545b92915050565b60008282018381108061097957508281105b1561080c5760006000fd5b8091505b5092915050565b60015433600160a060020a039081169116146109ab5760006000fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b505600a165627a7a7230582087796451f971b533ed4d832e50924633059efaef0afeead661fce46b63eea0ad0029"},"OpenANXToken.sol:OpenANXKYC":{"abi":"[{\"constant\":false,\"inputs\":[{\"name\":\"customer\",\"type\":\"address\"}],\"name\":\"isKyc\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"confirmTokenTransfer\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"}]","bin":""},"OpenANXToken.sol:OpenANXToken":{"abi":"[{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"addFunding\",\"outputs\":[],\"payable\":true,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"START_DATE\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"MAXIMUM_SOFT_FUNDING\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"HARD_CAP_PERIOD\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"END_DATE\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"MINIMUM_FUNDING\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_tokensPerEther\",\"type\":\"uint256\"}],\"name\":\"setTokensPerEther\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"a\",\"type\":\"uint256\"},{\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"safeSub\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"buyTokens\",\"outputs\":[],\"payable\":true,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"tokenAddress\",\"type\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferAnyERC20Token\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"remaining\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"a\",\"type\":\"uint256\"},{\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"safeAdd\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"tokensPerEther\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"participant\",\"type\":\"address\"}],\"name\":\"addPrecommitment\",\"outputs\":[],\"payable\":true,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalFunding\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"type\":\"constructor\"},{\"payable\":true,\"type\":\"fallback\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"tokensPerEther\",\"type\":\"uint256\"}],\"name\":\"TokensPerEtherUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"buyer\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"ethers\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"newEtherBalance\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"tokens\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"newTotalSupply\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"tokensPerEther\",\"type\":\"uint256\"}],\"name\":\"TokensBought\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}]","bin":"60606040526064600955341561001157fe5b5b604060405190810160405280600381526020017f4f41580000000000000000000000000000000000000000000000000000000000815250604060405190810160405280600d81526020017f4f70656e414e5820546f6b656e00000000000000000000000000000000000000815250601260005b5b60018054600160a060020a03191633600160a060020a03161790555b83516100b5906003906020870190610103565b5082516100c9906004906020860190610103565b506005805460ff191660ff84161790556000818155600154600160a060020a031681526006602052604090208190555b505050505b6101a3565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061014457805160ff1916838001178555610171565b82800160010185558215610171579182015b82811115610171578251825591602001919060010190610156565b5b5061017e929150610182565b5090565b6101a091905b8082111561017e5760008155600101610188565b5090565b90565b610f2780620001b36000396000f3006060604052361561015c5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde03811461016d578063095ea7b3146101fd57806313dce9381461023057806318160ddd1461023a57806323b872dd1461025c578063313ce56714610295578063372c6533146102bb5780634f022ad5146102dd578063501572e0146102ff578063545599ff1461032157806368e7a2611461034357806370a082311461036557806379ba5097146103935780638da5cb5b146103a5578063904bd6d0146103d157806395d89b41146103e6578063a293d1e814610476578063a9059cbb1461049e578063d0febe4c146104d1578063d4ee1d90146104db578063dc39d06d14610507578063dd62ed3e1461053a578063e6cb90131461056e578063f2fde38b14610596578063f856d605146105b4578063fa4b6f29146105d6578063fe47a8a7146105ec575b61016b5b61016861060e565b5b565b005b341561017557fe5b61017d6106f9565b6040805160208082528351818301528351919283929083019185019080838382156101c3575b8051825260208311156101c357601f1990920191602091820191016101a3565b505050905090810190601f1680156101ef5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561020557fe5b61021c600160a060020a0360043516602435610787565b604080519115158252519081900360200190f35b61016b6107f2565b005b341561024257fe5b61024a610862565b60408051918252519081900360200190f35b341561026457fe5b61021c600160a060020a0360043581169060243516604435610868565b604080519115158252519081900360200190f35b341561029d57fe5b6102a56109f9565b6040805160ff9092168252519081900360200190f35b34156102c357fe5b61024a610a02565b60408051918252519081900360200190f35b34156102e557fe5b61024a610a0a565b60408051918252519081900360200190f35b341561030757fe5b61024a610a10565b60408051918252519081900360200190f35b341561032957fe5b61024a610a16565b60408051918252519081900360200190f35b341561034b57fe5b61024a610a1e565b60408051918252519081900360200190f35b341561036d57fe5b61024a600160a060020a0360043516610a23565b60408051918252519081900360200190f35b341561039b57fe5b61016b610a42565b005b34156103ad57fe5b6103b5610acb565b60408051600160a060020a039092168252519081900360200190f35b34156103d957fe5b61016b600435610ada565b005b34156103ee57fe5b61017d610b52565b6040805160208082528351818301528351919283929083019185019080838382156101c3575b8051825260208311156101c357601f1990920191602091820191016101a3565b505050905090810190601f1680156101ef5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561047e57fe5b61024a600435602435610be0565b60408051918252519081900360200190f35b34156104a657fe5b61021c600160a060020a0360043516602435610bfe565b604080519115158252519081900360200190f35b61016b61060e565b005b34156104e357fe5b6103b5610d12565b60408051600160a060020a039092168252519081900360200190f35b341561050f57fe5b61021c600160a060020a0360043516602435610d21565b604080519115158252519081900360200190f35b341561054257fe5b61024a600160a060020a0360043581169060243516610dd2565b60408051918252519081900360200190f35b341561057657fe5b61024a600435602435610dff565b60408051918252519081900360200190f35b341561059e57fe5b61016b600160a060020a0360043516610e27565b005b34156105bc57fe5b61024a610e70565b60408051918252519081900360200190f35b61016b600160a060020a0360043516610e76565b005b34156105f457fe5b61024a610ef5565b60408051918252519081900360200190f35b600063592535f34210806106255750635925371f42115b156106305760006000fd5b60003411156106f45750600954600160a060020a03331660009081526006602052604090205434909102906106659082610dff565b600160a060020a0333166000908152600660205260408120919091555461068c9082610dff565b600081905560095460408051348152600160a060020a03308116316020830152818301869052606082019490945260808101929092525133909216917f6a7381bdc8f4e7ed3c0f0c299382777bde88a65f0c27f670235401d1544546309160a0908290030190a25b5b5b50565b6004805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561077f5780601f106107545761010080835404028352916020019161077f565b820191906000526020600020905b81548152906001019060200180831161076257829003601f168201915b505050505081565b600160a060020a03338116600081815260076020908152604080832094871680845294825280832086905580518681529051929493927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060015b92915050565b63592535f34210806108075750635925371f42115b156108125760006000fd5b600160a060020a0333166000908152600660205260409020546108359034610dff565b600160a060020a03331660009081526006602052604090205560085461085b9034610dff565b6008555b5b565b60005481565b600160a060020a0383166000908152600660205260408120548290108015906108b85750600160a060020a0380851660009081526007602090815260408083203390941683529290522054829010155b80156108c45750600082115b80156108e95750600160a060020a038316600090815260066020526040902054828101115b156109ed57600160a060020a0384166000908152600660205260409020546109119083610be0565b600160a060020a038086166000908152600660209081526040808320949094556007815283822033909316825291909152205461094e9083610be0565b600160a060020a038086166000908152600760209081526040808320338516845282528083209490945591861681526006909152205461098e9083610dff565b600160a060020a0380851660008181526006602090815260409182902094909455805186815290519193928816927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a35060016109f1565b5060005b5b9392505050565b60055460ff1681565b63592535f381565b61015981565b6102a681565b635925371f81565b607b81565b600160a060020a0381166000908152600660205260409020545b919050565b60025433600160a060020a039081169116141561016857600254600154604051600160a060020a0392831692909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36002546001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039092169190911790555b5b565b600154600160a060020a031681565b60015433600160a060020a03908116911614610af65760006000fd5b63592535f34210610b075760006000fd5b801515610b145760006000fd5b60098190556040805182815290517ffa43ab7ce9e2f3e8d2c1802d36907d2b00bec8f508957a2d25537897d33d222c9181900360200190a15b5b5b50565b6003805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561077f5780601f106107545761010080835404028352916020019161077f565b820191906000526020600020905b81548152906001019060200180831161076257829003601f168201915b505050505081565b600081830383811115610bf35760006000fd5b8091505b5092915050565b600160a060020a033316600090815260066020526040812054829010801590610c275750600082115b8015610c4c5750600160a060020a038316600090815260066020526040902054828101115b15610d0357600160a060020a033316600090815260066020526040902054610c749083610be0565b600160a060020a033381166000908152600660205260408082209390935590851681522054610ca39083610dff565b600160a060020a038085166000818152600660209081526040918290209490945580518681529051919333909316927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a35060016107ec565b5060006107ec565b5b92915050565b600254600160a060020a031681565b60015460009033600160a060020a03908116911614610d405760006000fd5b600154604080516000602091820181905282517fa9059cbb000000000000000000000000000000000000000000000000000000008152600160a060020a0394851660048201526024810187905292519387169363a9059cbb9360448082019493918390030190829087803b1515610db357fe5b6102c65a03f11515610dc157fe5b5050604051519150505b5b92915050565b600160a060020a038083166000908152600760209081526040808320938516835292905220545b92915050565b600082820183811080610e1157508281105b15610bf35760006000fd5b8091505b5092915050565b60015433600160a060020a03908116911614610e435760006000fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b50565b60095481565b60015433600160a060020a03908116911614610e925760006000fd5b63592535f34210610ea35760006000fd5b600160a060020a038116600090815260066020526040902054610ec69034610dff565b600160a060020a038216600090815260066020526040902055600854610eec9034610dff565b6008555b5b5b50565b600854815600a165627a7a723058200c223e0dc61d7dd3d6510e6ab8d4e7914c77984f34aa902b8f913f4e8053ddc40029"},"OpenANXToken.sol:Owned":{"abi":"[{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}]","bin":"6060604052341561000c57fe5b5b60008054600160a060020a03191633600160a060020a03161790555b5b6101fd806100396000396000f300606060405263ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166379ba5097811461005b5780638da5cb5b1461006d578063d4ee1d9014610099578063f2fde38b146100c5575bfe5b341561006357fe5b61006b6100e3565b005b341561007557fe5b61007d61016a565b60408051600160a060020a039092168252519081900360200190f35b34156100a157fe5b61007d610179565b60408051600160a060020a039092168252519081900360200190f35b34156100cd57fe5b61006b600160a060020a0360043516610188565b005b60015433600160a060020a03908116911614156101675760015460008054604051600160a060020a0393841693909116917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36001546000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039092169190911790555b5b565b600054600160a060020a031681565b600154600160a060020a031681565b60005433600160a060020a039081169116146101a45760006000fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b505600a165627a7a72305820f7af6e6427ef4674f12c08240ecea688f5cc42b9fe611826bfd917292919e8eb0029"},"OpenANXToken.sol:SafeMath":{"abi":"[{\"constant\":true,\"inputs\":[{\"name\":\"a\",\"type\":\"uint256\"},{\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"safeSub\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"a\",\"type\":\"uint256\"},{\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"safeAdd\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"}]","bin":"6060604052341561000c57fe5b5b60fc8061001b6000396000f300606060405263ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663a293d1e881146043578063e6cb9013146068575bfe5b3415604a57fe5b6056600435602435608d565b60408051918252519081900360200190f35b3415606f57fe5b605660043560243560aa565b60408051918252519081900360200190f35b600081830383811115609f5760006000fd5b8091505b5092915050565b60008282018381108060bb57508281105b15609f5760006000fd5b8091505b50929150505600a165627a7a72305820af7ccc8117e3d7e170867d78b6ab1e9ad04187cde8e503a92d3dfdcf087879cf0029"}},"version":"0.4.11+commit.68ef5810.Darwin.appleclang"};
