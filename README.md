
## Description
This project is a wallet API built using TypeScript, NestJS, and PostgreSQL as the database engine. The API provides functionalities for managing addresses and exchange rates.

**Features:**

1.  **Addresses Management:** The API allows users to create, retrieve, update, and delete wallet addresses. Each address contains essential information such as account name, balance, and creation date.
    
2.  **Exchange Rate:** Users can access the latest exchange rates between different currencies and Ethereum (ETH). The API stores and updates exchange rates from Euro (EUR) and US Dollar (USD) to ETH.

**Requirements:**

4.  Node.js (version 14 or higher)
5.  PostgreSQL database installed and running
6.  NestJS CLI (to execute NestJS commands)

**Installation:**

1.  Clone the repository from GitHub.
2.  Install the dependencies using yarn:

```bash
$  yarn  install
```
**Database:**
1.  Create a postgres database.
2.  Set the env variables into `.env`
3.  Run the migrations:

```bash
$  yarn  migrations-run
```

**Running:**

```bash
# development
$  yarn  run  start

# watch mode
$  yarn  run  start:dev

# production mode
$  yarn  run  start:prod
```

**Access the API using the specified endpoints:**

-   **Address Endpoints:**
    
    -   `GET /addresses`: Get all wallet addresses.
    -   `GET /addresses/:account`: Get a specific address by its Account.
    -   `POST /addresses`: Create a new wallet address.
    -   `PUT /addresses/:id`: Update an existing address by its ID.
    -   `DELETE /addresses/:id`: Delete an address by its ID.
   
-   **Exchange Rate Endpoints:**
    
    -   `GET /exchange-rates`: Get the latest exchange rates between EUR and USD to ETH.
    -   `PUT /exchange-rates/:id`: Update the exchange rate for EUR or USD to ETH.