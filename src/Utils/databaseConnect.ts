import { DATA_SOURCES } from '../Config/databaseConfig';
const dataSource = DATA_SOURCES.postgres;
import { PgConnector } from 'drizzle-orm-pg';
import { Pool } from 'pg';

const pool = new Pool({
    connectionString: dataSource.DB_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});
const connector = new PgConnector(pool);

export default connector;
