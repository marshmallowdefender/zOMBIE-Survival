\c survive_dev

--When setting up schema files, put tables with  foreign constraints first 
--

DROP TABLE IF EXISTS bob; 
DROP TABLE IF EXISTS weapons; 
DROP TABLE IF EXISTS beverages; 
DROP TABLE IF EXISTS tips; 

CREATE TABLE weapons (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  description VARCHAR(255) NOT NULL
);

CREATE TABLE beverages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  description VARCHAR(255) NOT NULL
);

CREATE TABLE tips (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  description VARCHAR(255) NOT NULL
);

CREATE TABLE bob (
  id SERIAL PRIMARY KEY,
  creator VARCHAR(20),
  weapons_id INTEGER REFERENCES weapons (id) ON DELETE CASCADE,
  beverages_id INTEGER REFERENCES beverages (id) ON DELETE CASCADE,
  tips_id INTEGER  REFERENCES tips (id) ON DELETE CASCADE
);






