import { Event } from "./event";
export function getDatedPagedEvents(events: Event[], page: string, numberOfDaysInPage: number): Event[] {
  let pageNumber = page ? Number.parseInt(page) : 1;
  let milisecondsInDay = 86400000;
  let pageSize = numberOfDaysInPage * milisecondsInDay;

  let lastEventDateDay = events[0].date.getTime() - ((pageNumber - 1) * pageSize);

  return events.filter(p => {
    let eventDay = p.date.getTime();
    return eventDay <= lastEventDateDay && eventDay >= (lastEventDateDay - pageSize);
  });
};
