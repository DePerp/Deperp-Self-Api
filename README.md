# Self Api and TradingView Webhook Tool

Easily receive and execute strategy alerts from TradingView. This tool enables automatic market order placements based on TradingView alerts and supports integration with third-party services via webhooks. It also provides the flexibility to run multiple strategies/markets simultaneously.

## Conditions

- A computing device (Cloud service, local PC) with a stable internet connection.
- A TradingView Account with at least a Essential plan to enable Webhook notifications.
- A blockchain wallet with private key (e.g., Metamask, Wallet).
- A trading account with collateral (USDT, USDC) already in the wallet and ETH for pay gas fees.

## Features

- Receive and execute market orders based on TradingView strategy alerts.
- Place orders using webhooks from third-party services.
- Supports multiple strategies/markets concurrently.

## Security

- Use of environment variables to safeguard sensitive information.
- Implementation of a passphrase authentication between TradingView alerts and your web server.

## Setup Steps

1. **Web Server Setup**:
   - Set up a web server (local or cloud). We recommend using [Render](https://render.com/).
   - Create a web service on Render, synchronize with your GitHub repository, configure the environment, and obtain a webhook.

2. **Environment Configuration**:
   ```
   # Required variables
   WALLET_PRIVATE_KEY=
   TYPE_NETWORK=testnet
   ```
3. **Setting TradingView Alerts**:

Configure an alert on the TradingView website with the following format:

   ```
{ 
  "exchange": "deperp", 
  "strategy": "test", 
  "asset": "USDT", 
  "market": "ETH-USD", 
  "size": "120", 
  "leverage": "5", 
  "reverse": true, 
  "order": "{{strategy.order.action}}", 
  "position": "{{strategy.market_position}}", 
  "price": "{{strategy.order.price}}", 
  "passphrase": "" 
}
   ```

## Running the Tool:
   ```
   npm run start
   ```

# API Endpoints:

## Post Sell (Short):
  ```
curl -X POST https://yourwebhook.com/api/endpoint -H "Content-Type: application/json" -d '{
  "exchange": "deperp",
  "strategy": "test",
  "asset": "USDT",
  "market": "BTC-USD",
  "size": "110",
  "leverage": "5",
  "reverse": false,
  "order": "sell",
  "passphrase": ""
}'

 ```
## Post Buy (Long):
  ```
curl -X POST https://yourwebhook.com/api/endpoint -H "Content-Type: application/json" -d '{
  "exchange": "deperp",
  "strategy": "test",
  "asset": "USDT",
  "market": "BTC-USD",
  "size": "110",
  "leverage": "5",
  "reverse": false,
  "order": "buy",
  "passphrase": ""
}'
  ```
Note: To close a long order, pass the "sell" parameter with the same quantity. Currently, only market orders are supported, stop limits and take profits you place as market orders from your strategies




