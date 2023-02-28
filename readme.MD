[![Tickets Test Run & Coverage](https://github.com/astileanua1141/ticketing-app/actions/workflows/test_coverage_tickets.yml/badge.svg)](https://github.com/astileanua1141/ticketing-app/actions/workflows/test_coverage_tickets.yml)

[![Orders Test Run & Coverage](https://github.com/astileanua1141/ticketing-app/actions/workflows/test_coverage_orders.yml/badge.svg)](https://github.com/astileanua1141/ticketing-app/actions/workflows/test_coverage_orders.yml)

<p align=center> <b> Ticketing App </b> </p>

___

#### Introduction
This App is a learning project dedicated to Microservices, where I code along with my course in order to learn something new (Typescript) and refresh some dormant skills (Docker, K8s). I use NATS Streaming for messaging, a tiny client-facing Next app, JWT for user authorisation, Events, Middleware and lots of funky stuff that I didn't really use in Java. 

Notably, this project is has made me get out of bed in some difficult times. It's a special kind of learning endorphines, which kept me pacing through this project, even if it's not really my cup of tea. I learned how to allow myself to make mistakes (commit a set of changes even if the tests aren't yet passing, fight with dependency issues, run into 'computer-fell-asleep' kind of problems, when paranormal issues impacted test runs).

I learned a lot, and this project will always be here for my reference, in case I forget the details. 

___

Currently this project consists of these Services:
- auth 
- client
- orders
- tickets

- nats-test

#### Dependencies: "common" module which resides on npmjs.com and in a separate repository here on git (link TBP)


### Auth Service

This service is in charge with Authorizing and authenticating users into the app. 
The available operations are: signin, signup, signout and currentUser. 

A user will have 
```
{
  email: string;
  password: string;
}
```

### Client Service

This service is a nextJs application, which interacts with the local nginx controller (the loadbalancer of the application as a whole). 
Currently, the landing page contains some functionality for a user's signin status, or allow users to signin. The brand name for the app is "GitTix" - reminder to rebrand this one... 

It looks like no actual ticket information is yet implemented. 

### Tickets services 

A Ticket has:  a title, price, userId and version. These attributes can be updated.



### Orders Service

Mainly, an order contains: the reference of 1 Ticket, the userId who placed the order, an order status, version and expiration date.

An Order has these operations: 
* GET `/api/tickets` - returns all the tickets in the system
* GET `/api/tickets/:id` - returns information about a given ticket id 
* POST `/api/tickets` - create a new ticket with title, price and userId. The user must be signed in to perform this operation. 
  Validations:  
  * title is required
  * price must be greater than 0

  Results:  
  - status code 201 - Ticket succkesfully created 
  - status code 400 - RequestValidationError
