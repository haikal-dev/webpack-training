const run = require('./app');
const AlertService = require('./alert.service');
const CalculatorService = require('./calculator.service');
const JokesService = require('./jokes.service');

const alertService = new AlertService();
const calculatorService = new CalculatorService();
const jokesService = new JokesService();

run(alertService, calculatorService, jokesService);