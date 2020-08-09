import { dbEvent } from "./dbEvent";
import { eventType } from "./eventType";

export class Event {
  id: string;
  event_type: any;
  date: Date;
  caregiver_id: string;
  care_recipient_id: string;
  mood: string;
  payload: any;
  task_request_note: string;
  task_description: string;
  note: string;

  constructor(event: dbEvent) {
    this.id = event.id;
    this.event_type = (<any>eventType)[event.event_type];
    this.date = new Date(event.timestamp);
    this.caregiver_id = event.caregiver_id;
    this.care_recipient_id = event.care_recipient_id;
    this.mood = event.mood;
    this.payload = JSON.parse(event.payload);
    this.task_request_note = this.payload.task_schedule_note;
    this.task_description = this.payload.task_definition_description;
    if (this.payload.task_schedule_note)
      this.note = this.payload.task_schedule_note;
    else if (this.payload.task_description)
      this.note = this.payload.task_description;
    else if (this.payload.task_definition_description)
      this.note = this.payload.task_definition_description;
    else if (this.payload.note)
      this.note = this.payload.note;
    else if (this.task_request_note)
      this.note = this.task_request_note;
    else
      this.note = 'Event of type "' + event.event_type.replace('_', ' ').replace('_', ' ').replace('_', ' ') + '" occured.'
  }
}
