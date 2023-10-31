const orderTuple = `tuple(
	uint256 orderId,
	address user,
	address asset,
	string market,
	uint256 collateral,
	uint256 size,
	uint256 price,
	uint256 fee,
	bool isLong,
	uint8 orderSort,
	bool isReduceOnly,
	uint256 timestamp,
	uint256 expiry,
	uint256 revokeOrderId
)`;

export const ABIS = {
    DataRegistry: [
        `function getAddress(string key) view returns(address)`
    ],
    Orders: [
        `function placeOrder(${orderTuple}, uint256 tProfit, uint256 sLoss, string memory inviteCode) payable`,
        `function revokeOrder(uint256 orderId) external`,
        `function revokeOrders(uint256[] calldata orderIds) external`,
        `function getUserOrders(address user) public view returns(${orderTuple}[])`
    ],
    Positions: [
        `function adjustCollateral(address asset, string market, uint256 collateral) payable`,
        `function removeCollateral(address asset, string market, uint256 collateral)`,
        `function getUserPositions(address user) view returns(tuple(
			address user,
			address asset,
			string market,
			bool isLong,
			uint256 size,
			uint256 collateral,
			int256 fundingTracer,
			uint256 price,
			uint256 timestamp,
		)[])`,
        `function getInterest(address asset, string memory market) external view returns(uint256)`
    ],
};