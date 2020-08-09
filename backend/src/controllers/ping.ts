import * as express from "express";
import { dbEvent } from "./dbEvent";
const mysql = require('mysql');

export const pingController = express.Router();

pingController.get('/hello/:id', async (req, res) => {
  const connection = mysql.createConnection({
    host: "birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com",
    user: "test-read",
    password: "xnxPp6QfZbCYkY8",
    database: "birdietest"
  });

  connection.connect();

  return await connection.query("SELECT * FROM events", function (error: any, results: dbEvent[], fields: any) {
    if (error) throw error;
    console.log('fields:  ' + fields);

    res.status(200).json({
      events: [...new Set(results.map(p => p.event_type))],
      data: results.filter(p => p.care_recipient_id === req.params.id),
      greetings: 'Thank you for spending some time on this test. All the best 🙌'
    });
  });

  connection.end();
});



