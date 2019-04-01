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
    .query('CREATE TABLE IF NOT EXISTS ezops (id SERIAL PRIMARY KEY, first_name VARCHAR(100), last_name VARCHAR(100), alcohol BOOLEAN, tabacco BOOLEAN, active BOOLEAN)')
    .catch(err => console.log(err));

//routes
app.get('/', (req, res) => {
    res.send('Hi');
});

app.get('/all', async (req, res) => {
    const values = await pgClient.query(`SELECT * from ezops WHERE active =true`);
    res.send(values.rows);
});

app.get('/edit', async (req, res) => {
    const values = await pgClient.query(`SELECT * FROM ezops WHERE id = ${req.query.id}`);
    res.send(values.rows);
});

app.get('/delete', async (req, res) => {
    console.log('tests',req.query.id)
    const values = await pgClient.query(`DELETE FROM ezops WHERE id = ${req.query.id}`);
    res.send(values.rows);
});

app.post('/addrecord', async (req, res) => {
    console.log('testing for req.body',req.body)
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const alcohol = req.body.alcohol;
    const tabacco = req.body.tabacco;

    pgClient.query('INSERT INTO ezops (first_name, last_name, alcohol, tabacco, active) VALUES($1, $2, $3, $4, $5)', 
        [first_name, last_name, alcohol, tabacco, true]
    );
    res.send({working: true});
});

app.listen(5000, err => {
    console.log('Listening')
});
