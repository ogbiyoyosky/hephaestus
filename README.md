<a href="https://travis-ci.org/sidhantpanda/docker-express-typescript-boilerplate">
  <img src="https://travis-ci.org/sidhantpanda/docker-express-typescript-boilerplate.svg?branch=master" alt="Build Status" />
</a>

# SERVER PLANNER SERVICE

This repo contains an API that calculates the server hardware for a data center (to host virtual machines).

# PROBLEM

Task
SERVER PLANNER SERVICE
Write an API that calculates the server hardware for a data center (to host virtual machines).
Your API should return the number of servers that are required to host a non-empty collection of
virtual machines.
This means you should implement the following operation (in UML definition):

```
+calculate(serverType: Server, virtualMachines: VirtualMachine[1..*]):int
```

All servers are from the same type. This type defines the hardware resources each server provides:
CPU, RAM, HDD.
Each virtual machine is defined by the virtual hardware resources it needs (on a server): CPU, RAM,
HDD.
The algorithm for the virtual machine distribution should implement a 'first fit' strategy.
This means there is no resource optimization or 'look back': Virtual machines are always allocated on
the current or the next server (in case of limited resources).
If a virtual machine is too 'big' for a new server, skip it.

---

Example:

- Server type = {CPU: 2, RAM: 32, HDD: 100}
- Virtual Machines = [{CPU: 1, RAM: 16, HDD: 10}, {CPU: 1, RAM: 16, HDD: 10}, {CPU: 2, RAM: 32,
  HDD: 100}]
- Result = 2

---

General Requirements: - Create a rest API service, in any language of your choice - Ensure the service runs in Docker - The code should contain readme on how to run the service - Your submission should compile and run successfully - Free choice of dependencies, but keep it simple - Your code should be fully (unit) tested!

- Endeavor to write clean, maintainable code. - These requirements are just the bare minimum, add more functionality

## Installation

Make sure you have installed Nodejs on your machine.

### Manual Method

#### 1. Clone this repo

```
$ git clone https://github.com/ogbiyoyosky/hephaestus.git
$ cd hephaestus
```

#### 2. Install dependencies

```
$ npm i
```

## Development

### Start dev server

starting the server locally on your machine

```
$ npm run dev
```

Running the above commands results in

- 🌏**API Server** running at `http://localhost:4000`

you can send request to your locally machine from the apiary docs

- ⚙️**APIARY DOCS** at https://hephaestus2.docs.apiary.io/

## Packaging and Deployment

### Docker Method

#### 2. Run with docker

Build the and tag the image with command below.

```
$ docker build -t hephaestus-api .
```

start the server

```
$ docker run -t -i -d -p 4000:4000 hephaestus-api npm run serve
```

- 🌏**API Server** running at `http://localhost:4000`

you can send request to your locally machine from the apiary docs

- ⚙️**APIARY DOCS** at https://hephaestus2.docs.apiary.io/

### Test

#### 3. Running test locally

1. integration test for the api.

```
  npm run test:integration
```

2. unit test for the api.

```
  npm run test:unit
```

#### 4. Running test in a docker container.

1. integration test for the api.

```
  docker run -t -i hephaestus-api npm run test:integration
```

2. unit test for the api.

```
  docker run -t -i hephaestus-api npm run test:unit
```
