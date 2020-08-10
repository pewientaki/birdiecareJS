import * as express from "express";
import { dbEvent } from "./dbEvent";
import { eventType } from "./eventType";
import { Event } from "./event";
import { getDatedPagedEvents } from "./HelperMethods";
const mysql = require('mysql');


export const nutritionController = express.Router();
export const healthController = express.Router();
export const generalDataController = express.Router();
export const medsController = express.Router();
export const checksController = express.Router();

const getConnection = () => mysql.createConnection({
  host: "birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com",
  user: "test-read",
  password: "xnxPp6QfZbCYkY8",
  database: "birdietest"
});

generalDataController.get('/careRecipients', async (_req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://birdiecare-web.herokuapp.com');
  const connection = getConnection();
  connection.connect();

  await connection.query("SELECT DISTINCT care_recipient_id FROM events", function (error: any, results: any[]) {
    if (error) throw error;
    res.status(200).json({
      careRecipients: results.map(p => p.care_recipient_id)
    });
  });

  connection.end();
});

nutritionController.get('/nutrition/:id/:page?', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://birdiecare-web.herokuapp.com');
  let id = req.params.id;

  const connection = getConnection();
  connection.connect();

  await connection.query("SELECT * FROM events", function (error: any, results: dbEvent[]) {
    if (error) throw error;
    let events = results.map(p => new Event(p));

    let filteredEevents = events.filter(p =>
      p.care_recipient_id === id
      && (p.event_type == eventType.fluid_intake_observation
        || p.event_type == eventType.food_intake_observation
        || p.event_type == eventType.catheter_observation));

    filteredEevents.sort((p1: Event, p2: Event) => p2.date.getTime() - p1.date.getTime());
    let pagedEvents = getDatedPagedEvents(filteredEevents, req.params.page, 7);

    res.status(200).json({
      data: pagedEvents
    });
  });

  connection.end();
});

medsController.get('/meds/:id/:page?', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://birdiecare-web.herokuapp.com');
  let id = req.params.id;

  const connection = getConnection();
  connection.connect();

  await connection.query("SELECT * FROM events", function (error: any, results: dbEvent[]) {
    if (error) throw error;
    let events = results.map(p => new Event(p));

    let filteredEevents = events.filter(p =>
      p.care_recipient_id === id
      && (p.event_type == eventType.no_medication_observation_received
        || p.event_type == eventType.regular_medication_not_taken
        || p.event_type == eventType.medication_schedule_updated
        || p.event_type == eventType.regular_medication_maybe_taken
        || p.event_type.type == eventType.regular_medication_partially_taken));

    filteredEevents.sort((p1: Event, p2: Event) => p2.date.getTime() - p1.date.getTime());
    let pagedEvents = getDatedPagedEvents(filteredEevents, req.params.page, 7);

    res.status(200).json({
      data: pagedEvents
    });
  });

  connection.end();
});

healthController.get('/health/:id/:page?', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://birdiecare-web.herokuapp.com');
  let id = req.params.id;

  const connection = getConnection();
  connection.connect();

  await connection.query("SELECT * FROM events", function (error: any, results: dbEvent[]) {
    if (error) throw error;
    let events = results.map(p => new Event(p));

    let filteredEevents = events.filter(p =>
      p.care_recipient_id === id
      && (p.event_type == eventType.physical_health_observation
        || p.event_type == eventType.general_observation
        || p.event_type == eventType.toilet_visit_recorded
        || p.event_type == eventType.concern_raised));

    filteredEevents.sort((p1: Event, p2: Event) => p2.date.getTime() - p1.date.getTime());
    let pagedEvents = getDatedPagedEvents(filteredEevents, req.params.page, 7);

    res.status(200).json({
      data: pagedEvents
    });
  });

  connection.end();
});

checksController.get('/checks/:id/:page?', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://birdiecare-web.herokuapp.com');
  let id = req.params.id;

  const connection = getConnection();
  connection.connect();

  await connection.query("SELECT * FROM events", function (error: any, results: dbEvent[]) {
    if (error) throw error;
    let events = results.map(p => new Event(p));

    let filteredEevents = events.filter(p =>
      p.care_recipient_id === id
      && (p.event_type == eventType.check_in
        || p.event_type == eventType.check_out
        || p.event_type == eventType.visit_completed
        || p.event_type == eventType.visit_cancelled
        || p.event_type == eventType.task_schedule_created
        || p.event_type == eventType.task_schedule_note
        || p.event_type == eventType.task_completed
        || p.event_type == eventType.task_definition_description));

    filteredEevents.sort((p1: Event, p2: Event) => p2.date.getTime() - p1.date.getTime());
    let pagedEvents = getDatedPagedEvents(filteredEevents, req.params.page, 7);

    res.status(200).json({
      data: pagedEvents
    });
  });

  connection.end();
});



