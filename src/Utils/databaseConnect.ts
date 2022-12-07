import { Client } from 'pg';
import { DATA_SOURCES } from '../Config/databaseConfig';
const dataSource = DATA_SOURCES.postgres;

const client = new Client({
    connectionString: dataSource.DB_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

client.connect();

export default client;
