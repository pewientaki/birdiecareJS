import * as express from "express";
import { dbEvent } from "./dbEvent";
const mysql = require('mysql');



export const pingController = express.Router();

// let healthDetails = {
//   physical_health_observation: physical_health_observation,
//   general_observation: general observation,
//   concern_raised: concern_raised,
//   toilet_visit_recorded: toilet_visit_recorded
// };

// let moodDetails = {
//   mood_observation: mood_observation,

// }

// let nutritionDetails = {
//   fluid_intake_observation: fluid_intake_observation,
//   food_intake_observation: food_intake_observation,
//   catheter_observation: catheter_observation,
// };

// let medsDetails = {
//   regular_medication_taken: regular_medication_taken,
//   no_medication_observation_received: no_medication_observation_received,
//   regular_medication_not_taken: regular_medication_not_taken,
//   medication_schedule_updated: medication_schedule_updated,
//   regular_medication_maybe_taken: regular_medication_maybe_taken,
//   regular_medication_partially_taken: regular_medication_partially_taken
// };

// let checksDetails = {
//   visit_completed: visit_completed,
//   check_out: check_out,
//   check_in: check_in,
//   visit_cancelled: visit_cancelled,
//   task_schedule_created: task_schedule_created,
//   task_schedule_note: task_schedule_note,
//   task_definition_description: task_definition_description
// }


// class Event implements IEvent {
//   id: string;
//   event_type: any;
//   visit_id: string;
//   timestamp: string;
//   caregiver_id: string;
//   care_recipient_id: string;
//   mood: string;
//   payload: string;

//   constructor(
//     id: string,
//     event_type: string,
//     visit_id: string,
//     timestamp: string,
//     caregiver_id: string,
//     care_recipient_id: string,
//     mood: string,
//     payload: string) {
//     this.id = id;
//     this.event_type = event_type;
//     this.visit_id = visit_id;
//     this.timestamp = timestamp;
//     this.caregiver_id = caregiver_id;
//     this.care_recipient_id = care_recipient_id;
//     this.mood = mood;
//     this.payload = payload;
//   }
// }

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



