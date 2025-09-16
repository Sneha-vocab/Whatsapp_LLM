const { Pool } = require('pg');
require('dotenv').config();

console.log('🔍 Database connection setup:');
console.log('🔍 DATABASE_URL exists:', !!process.env.DATABASE_URL);
console.log('🔍 DATABASE_URL length:', process.env.DATABASE_URL ? process.env.DATABASE_URL.length : 0);

<<<<<<< HEAD
// Flexible PostgreSQL configuration to support local PG or hosted (Neon/Render/etc.)
// Priority: DATABASE_URL → individual PG_ env vars → sane local defaults
let poolConfig;

if (process.env.DATABASE_URL) {
    // Use single connection string
    const sslEnabled = (process.env.DATABASE_SSL || '').toLowerCase() !== 'false';
    poolConfig = {
        connectionString: process.env.DATABASE_URL,
        ...(sslEnabled ? { ssl: { rejectUnauthorized: false } } : {})
    };
    console.log('🔧 Using DATABASE_URL with SSL:', !!sslEnabled);
} else {
    // Use discrete connection parameters
    const sslEnabled = (process.env.DATABASE_SSL || '').toLowerCase() === 'true';
    poolConfig = {
        host: process.env.PGHOST || '127.0.0.1',
        port: parseInt(process.env.PGPORT || '5432', 10),
        user: process.env.PGUSER || 'postgres',
        password: process.env.PGPASSWORD || '',
        database: process.env.PGDATABASE || 'autosherpa',
        ...(sslEnabled ? { ssl: { rejectUnauthorized: false } } : {})
    };
    console.log('🔧 Using discrete PG vars host=%s db=%s ssl=%s', poolConfig.host, poolConfig.database, sslEnabled);
}

const pool = new Pool(poolConfig);
=======
// Connection configuration with conditional SSL
const connectionString = process.env.DATABASE_URL;
const urlString = connectionString || '';
const sslRequiredByUrl = /sslmode=require/i.test(urlString);
const isKnownManagedHost = /neon\.tech|render\.com|amazonaws\.com/i.test(urlString);
const envSslFlag = (process.env.DATABASE_SSL || '').toLowerCase(); // 'require' | 'disable' | ''

const useSSL = envSslFlag === 'require' || (envSslFlag !== 'disable' && (sslRequiredByUrl || isKnownManagedHost));

console.log('🔍 DB SSL decision:', { sslRequiredByUrl, isKnownManagedHost, envSslFlag, useSSL });

const pool = new Pool({
    connectionString,
    ssl: useSSL ? { rejectUnauthorized: false } : false
});
>>>>>>> 3c80ab4 (Updated the Gemini LLM)

// Test the connection
pool.on('connect', () => {
    console.log('✅ Connected to PostgreSQL successfully');
});

pool.on('error', (err) => {
    console.error('❌ Unexpected error on idle client', err);
    process.exit(-1);
});

console.log('🔍 Pool created successfully, type:', typeof pool);
console.log('🔍 Pool has query method:', typeof pool.query === 'function');

module.exports = pool;
