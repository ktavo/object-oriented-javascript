# object-oriented-javascript

//One time copy object
var blue = extend({}, gold);
//Now blue it's the same as gold but if one of them changes the other remains the same
//END One time copy object

//Object prototyping, delegation lookup
//if there's a property not found on green it will look for it on the gold object
var green = Object.create(gold);
//END Object prototyping, delegation lookup

//Adding methods to classes
//CLass Constructor
var Car = funcion(location)
{
	var obj = {loc: location};
	extend(obj, Car.methods);
	return obj;
}

Car.methods = {
	move: function(){
		this.loc++;
	},
	moveFaster: function(){
		this.loc++;
		this.loc++;
	},
	moveBackward: function(){
		this.loc--;
	}
}
//END Adding methods to classes

//Prototype classes
//name.Prototype allow us to store all the method of the "name" object.
var Car = function(loc){
	var obj = Object.create(Car.prototype);
	obj.loc = loc;
	return obj;
}

Car.prototype.move = function(){
	this.loc++;
}
//END Prototype classes

//Pseudo-classical pattern
var Car = function(loc) {
	this.loc = loc;
};

Car.prototype.move = function() {
	this.loc++;
};
	//Call to pseudoclassical pattern
	//Notice the use of the word new to call the constructor of car
	myCar = new Car(3);
	myCar.move;
	yourCar = new Car(2);
	yourCar.move;
	//END Call to pseudoclassical pattern
//END Pseudo-classical pattern

//Superclass and subclasses
//Car is the superclass, van and cop are subclasses that use the superclass
var Car = function(){
	var obj = {loc: loc};
	obj.move = function(){
		obj.loc++;
	};
	return obj;
}

var Van = funcion(loc){
	var obj = Car(loc);
	obj.grab = fuction {/*Do grab stuff*/};
	return obj;
};

var Cop = function(loc){
	var obj = Car(loc);
	obj.call = function {/*Do call stuff*/};
	return obj;
};

	//Call to subclasses
	var amy = Van(1);
	amy.move();
	var ben = Van(9);
	ben.move();
	var tombo = Cop(2);
	cal.move();
	tombo.call();
	//END Call to subclasses
//END Superclass and subclasses

//Pseudoclasical subclasing
var Car = function(loc){
	this.loc = loc;
};
Car.prototype.move = function(){
	this.loc++;
};

var Van = function(loc){
	//The .call method allow us to run the funtion in the context we want to, we pass that context as the first parameter of call function
	Car.call(this, loc);
};

Van.prototype = Object.create(Car.prototype);
Van.prototype.constructor = Van;
Van.prototype.grab = function() {/* Grabbing staff*/};

	//Call to Pseudoclasical subclasing
	var zed = New Car(3);
	zed.move();

	var amy = new Van(9);
	console.log(amy.loc);
	amy.move();
	amy.grab();
	console.log(amy.constructor);
	//END Call to Pseudoclasical subclasing


//END Pseudoclasical subclasing