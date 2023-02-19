import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from '@alex-asti-demo-org/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
