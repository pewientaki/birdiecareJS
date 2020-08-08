import * as express from "express";
import { dbEvent } from "./dbEvent";
import { eventType } from "./eventType";
import { Event } from "./event";
const mysql = require('mysql');



export const nutritionController = express.Router();
export const healthController = express.Router();
export const generalDataController = express.Router();
// export const medsController = express.Router();

const getConnection = () => mysql.createConnection({
  host: "birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com",
  user: "test-read",
  password: "xnxPp6QfZbCYkY8",
  database: "birdietest"
});

nutritionController.get('/nutrition/:id', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  const connection = getConnection()
  connection.connect();

  await connection.query("SELECT * FROM events", function (error: any, results: dbEvent[]) {
    if (error) throw error;
    let events = results.map(p => new Event(p));

    let filteredEevents = events.filter(p =>
      p.care_recipient_id === req.params.id
      && (p.event_type == eventType.fluid_intake_observation
        || p.event_type == eventType.food_intake_observation
        || p.event_type == eventType.catheter_observation));

    filteredEevents.sort((p1: Event, p2: Event) => p2.timestamp.getTime() - p1.timestamp.getTime())
    res.status(200).json({
      data: filteredEevents
    });
  });

  connection.end();
});

healthController.get('/health/:id', async (req, res) => {
  const connection = getConnection()
  connection.connect();

  await connection.query("SELECT * FROM events", function (error: any, results: dbEvent[]) {
    if (error) throw error;
    let events = results.map(p => new Event(p));
    res.status(200).json({
      data: events.filter(p =>
        p.care_recipient_id === req.params.id
        && (p.event_type == eventType.physical_health_observation
          || p.event_type == eventType.general_observation
          || p.event_type == eventType.toilet_visit_recorded
          || p.event_type == eventType.concern_raised))

    });
  });

  connection.end();
});


generalDataController.get('/all', async (_req, res) => {
  const connection = getConnection()
  connection.connect();

  await connection.query("SELECT * FROM events", function (error: any, results: any) {
    if (error) throw error;
    // let patientsId = results.map(p => new Event(p))
    res.status(200).json({
      data: results
    });
  });

  connection.end();
});

// medsController.get('/meds/:id', async (req, res) => {
//   connection.connect();

//   return await connection.query("SELECT * FROM events", function (error: any, results: dbEvent[]) {
//     if (error) throw error;
//     let events = results.map(p => new Event(p));
//     res.status(200).json({
//       data: events.filter(p =>
//         p.care_recipient_id === req.params.id
//         && (p.event_type == eventType.no_medication_observation_received
//           || p.event_type == eventType.regular_medication_not_taken
//           || p.event_type == eventType.medication_schedule_updated
//           || p.event_type == eventType.regular_medication_maybe_taken
//           || p.event_type.type == eventType.regular_medication_partially_taken))

//     });
//   });

//   connection.end();
// });





