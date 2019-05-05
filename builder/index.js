const Builder = require('./builder');
const Director = require('./directors');



const fullComp = Director.buildFullComputer(new Builder);
const startComp = Director.buildStartComputer(new Builder);

fullComp.info();
startComp.info();

