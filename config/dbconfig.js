module.exports = process.env.DATABASE_URL || {//system will give us host name
    host:      process.env.DB_HOST || 'localhost' , //default to local host if its not in the environment
    port:      process.env.DB_PORT || 5432, // default to port if not, default to 5432
    database:  process.env.DB_NAME || 'survive_dev', 
    };

    