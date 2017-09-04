var gold = {a:1};
log('gold.a: ' + gold.a);
log('gold.z: ' + gold.z);

//This applies one-time property copying
var blue = extend({}, gold);
blue.b = 2;
log('blue.a: ' + blue.a);
log('blue.b: ' + blue.b);
log('blue.z: ' + blue.z);

//This make available ongoing look-up time delegation
var green = Object.create(gold);
green.b = 2;
log('green.a: ' + green.a);
log('green.b: ' + green.b);
log('green.z: ' + green.z);
gold.b = 3;
//When js doesn't find the z rpoperty on green, try to find it in gold, as it find it it's print it
log('green.z: ' + green.z);




