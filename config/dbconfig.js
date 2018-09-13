module.exports = process.env.DATABASE_URL || {// system will give us host name
  host:  'localhost', // default to local host if its not in the environment
  port:  5432, // default to port if not, default to 5432
  database:  'survive_dev',
};
