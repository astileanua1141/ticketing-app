import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@alex-asti-demo-org/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
