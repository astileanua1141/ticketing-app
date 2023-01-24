import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@alex-asti-demo-org/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}

// new TicketCreatedPublisher(client).publish(ticket);
