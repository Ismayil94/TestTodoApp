# Gelato task

## Intro
The repository contains 2 directories:
1. cypress_test
2. postman_test

**cypress_test** uses `cypress/included:7.2.0` image which has all the dependecies of OS and browsers to run the task. 

**postman_test** uses `postman/newman:5-alpine` image.

## How to Run

1. cypress_test:

```bash
$ docker-compose up
```

2. postman_test
```bash
$ docker-compose up
```
 
 
 ##TASK DESCRIPTION
 
 
1. Cover ToDo app with tests using Ruby/JS/Golang (http://todomvc.com/examples/react/#/) In this task, we expect to have all paths you consider worthy covered by UI tests. Please focus on the ToDo app itself ignoring the left-hand panel. 
2. Create few tests for REST API hosted on https://jsonplaceholder.typicode.com/ Expand existing UI tests with a set of API tests covering the critical functionality of the app mentioned above. 



