const pg = require('pg');

const Client = pg.Client;

const configObj = {
  user: 'postgres',
  host: 'localhost',
  database: 'spot',
  password: 'postgres',
  port: 5433
};

const client = new Client(configObj);

client.connect()
  .then(() => {
    console.log(`db connected`);
  })
  .catch((error) => {
    console.log(`db connection error:`, error);
  });

const verb = process.argv[2]; // node cli.js browse

// BREAD actions

switch (verb) {
  case 'browse':
    client.query('SELECT id, question FROM objectives;')
      .then((response) => {
        // console.log(`db query response:`, response);
        for (let key in response.rows) {
          const objective = response.rows[key];
          // console.log(`objective[${key}]`, response.rows[key]);
          console.log(response.rows[key].id, response.rows[key].question);
        }
      })
      .catch((error) => {
        console.log(`db query error:`, error);
      });
    break;
  case 'read':
    const objective_id = process.argv[3];
    const query_string = `SELECT id, question, answer FROM objectives WHERE id = $1;`;
    console.log('query string:', query_string);
// make sure that your dynamic values are in the second parameter... so that the system can prevent SQL injection attacks
    client.query(query_string, [objective_id])
    .then((response) => {
      // console.log(`db query response:`, response);
      for (let key in response.rows) {
        const objective = response.rows[key];
        // console.log(`objective[${key}]`, response.rows[key]);
        console.log(response.rows[key].id, response.rows[key].question, response.rows[key].answer);
      }
    })
    .catch((error) => {
      console.log(`db query error:`, error);
    });
    break;
  case 'edit':
    break;
  case 'add':
    break;
  case 'delete':
    break;
  default:
    console.log('did not recognize verb. try again.');
    break;
}
