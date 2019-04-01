const keys = require('./keys');

//Express app setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const { Pool } = require('pg');
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost, 
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort
});

pgClient.on('error', ()=> console.log('Lost PG Connection'));
pgClient
    .query('CREATE TABLE IF NOT EXISTS ezops (id SERIAL PRIMARY KEY, name VARCHAR(100), age INT, alcohol BOOLEAN, tabacco BOOLEAN, active BOOLEAN)')
    .catch(err => console.log(err));

//routes
app.get('/', (req, res) => {
    res.send('Hi');
});

app.get('/values/all', async (req, res) => {
    const values = await pgClient.query('SELECT * from ezops');
    res.send(values.rows);
});

app.post('/values', async (req, res) => {

    pgClient.query('INSERT INTO ezops (name, age, alcohol, tabacco, active) VALUES($1, $2, $3, $4, $5)', 
        ['David Yim', 34, true, false, true]
    );
    res.send({working: true});
});

app.listen(5000, err => {
    console.log('Listening')
});
