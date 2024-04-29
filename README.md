# TicketHive - Ticket Booking Dapp

Welcome to the TicketHive - Ticket Booking Dapp! This decentralized application (Dapp) allows users to book tickets for various events and concerts securely using blockchain technology.

## Features

- **Event Listing**: Browse through a list of upcoming events and concerts.
- **Ticket Booking**: Reserve tickets for your desired events seamlessly.
- **Blockchain Integration**: Utilizes blockchain technology for secure and transparent transactions.
- **User Authentication**: Ensure secure access to user accounts.
- **Payment Options**: Support for various payment methods including cryptocurrencies.
- **Real-Time Updates**: Receive instant updates on event availability and ticket status.

## Getting Started

To get started with the Event Ticket Booking Dapp, follow these steps:

1. Clone the repository:

    ```
    git clone https://github.com/santhosh-vairamuthu/tickethive-dapp.git
    ```

2. Install dependencies:

    ```
    cd tickethive-dapp
    npm install
    ```

3. Configure the environment:

    Create a `.env` file in the root directory and provide necessary environment variables such as API keys, contract addresses, etc.

4. Run the Dapp:

    ```
    npm start
    ```
5. Run the backend:

    ```
    nodemon src/server.js
    ```
6. Access the Dapp:

    Open your web browser and navigate to `http://localhost:3000` to access the Event Ticket Booking Dapp.

## Technologies Used

- **Blockchain**: Ethereum, Solidity
- **Frontend**: React.js
- **Backend**: Node.js (Express Framework)
- **Database**: Ethereum Blockchain
- **Smart Contracts**: Solidity

## Deployment Details

The TicketHive Dapp is deployed on the Ethereum test network using Remix IDE and MetaMask for wallet integration. The smart contract code is written in Solidity and deployed to the test network using Remix. The contract address and ABI (Application Binary Interface) are then updated in the frontend code for interaction with the deployed contract.

### Remix IDE Deployment Steps:

1. Open Remix IDE (https://remix.ethereum.org/) in your web browser.
2. Copy the smart contract code from `solidity/ticket.sol` and paste it into the Remix editor.
3. Compile and deploy the contract using the appropriate compiler version.
4. After deployment, copy the contract address and update it in the `src/Details.js` file.
5. Obtain the ABI from Remix and update it in the `src/contractABI.js` file.

### SepoliaETH Usage:

SepoliaETH is used as the Ethereum test network for deploying and testing the smart contract. It provides a sandbox environment for developers to interact with Ethereum blockchain without using real Ether.

## Additional Configurations

To make the TicketHive Dapp work seamlessly, ensure the following configurations:

- Change the ABI in Remix IDE and update it in the `src/contractABI.js` file.
- Update the contract address in the `src/Details.js` file after deployment.
- Modify the MySQL database connection details in the `src/server.js` file to match your environment.

## Files Overview

- **Smart Contract**: `solidity/ticket.sol`
- **MySQL Database Schema**: `database/schema.sql`

## Technologies Used

The TicketHive Dapp leverages a variety of technologies to provide a seamless and secure ticket booking experience:

- **Node.js**: Node.js is used for the backend server environment, providing a runtime environment for executing JavaScript code outside the browser.
- **React.js**: React.js is utilized for building the frontend user interface, allowing for the creation of dynamic and interactive components.
- **Express.js**: Express.js is a web application framework for Node.js, used to build the backend RESTful API endpoints and handle HTTP requests.
- **Web3.js**: Web3.js is a JavaScript library that interacts with Ethereum nodes, enabling communication with the Ethereum blockchain and smart contracts.
- **MySQL**: MySQL is a relational database management system used for storing and managing data related to users, events, tickets, etc.
- **Bootstrap**: Bootstrap is a front-end framework used for designing and styling responsive web pages, providing a sleek and modern user interface.
- **Solidity**: Solidity is the programming language used for writing smart contracts on the Ethereum blockchain, facilitating the execution of ticket transactions securely and transparently.
