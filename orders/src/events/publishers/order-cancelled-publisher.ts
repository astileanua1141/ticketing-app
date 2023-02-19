import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
  OrderCancelledEvent,
} from '@alex-asti-demo-org/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
