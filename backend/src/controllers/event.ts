import { dbEvent } from "./dbEvent";
import { eventType } from "./eventType";

export class Event {
  id: string;
  event_type: any;
  timestamp: Date;
  caregiver_id: string;
  care_recipient_id: string;
  mood: string;
  payload: any;

  constructor(event: dbEvent) {
    this.id = event.id;
    this.event_type = (<any>eventType)[event.event_type];
    this.timestamp = event.timestamp;
    this.caregiver_id = event.caregiver_id;
    this.care_recipient_id = event.care_recipient_id;
    this.mood = event.mood;
    this.payload = JSON.parse(event.payload);
  }
}
