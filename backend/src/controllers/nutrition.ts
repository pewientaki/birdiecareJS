import * as express from "express";
import { dbEvent } from "./dbEvent";
import { eventType } from "./eventType";
import { Event } from "./event";
const mysql = require('mysql');



export const nutritionController = express.Router();

nutritionController.get('/nutrition/:id', async (req, res) => {
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
    let events = results.map(p => new Event(p));
    res.status(200).json({
      data: events.filter(p =>
        p.care_recipient_id === req.params.id
        && (p.event_type == eventType.fluid_intake_observation
          || p.event_type == eventType.food_intake_observation
          || p.event_type == eventType.catheter_observation))
    });
  });

  connection.end();
});



