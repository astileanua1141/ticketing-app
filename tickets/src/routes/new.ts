import express, { Request, Response } from 'express';
import { requireAuth } from '@alex-asti-demo-org/common';

const router = express.Router();

router.post('/api/tickets', requireAuth, (req, res) => {
  res.sendStatus(200);
});

export { router as createTicketRouter };
