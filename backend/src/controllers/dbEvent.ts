export interface dbEvent {
  id: string;
  event_type: string;
  visit_id: string;
  timestamp: Date;
  caregiver_id: string;
  care_recipient_id: string;
  mood: string;
  payload: string;
}
