var RetiredForagerBee = function() {
  // use pseudoclassical instantiation style
  // call ForagerBee on this
  ForagerBee.call(this);
  // age 40
  this.age = 40;
  // job gamble
  this.job = 'gamble';
  // canFly false
  this.canFly = false;
  // color grey
  this.color = 'grey';
};
// food, eat, treasure chest inherited from ForagerBee
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
// method forage, returns 'I am too old, let me play cards instead'
RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
}
// method gamble, adds a treasure to treasure chest
RetiredForagerBee.prototype.gamble = function() {
  var treasures = ['1 million woolongs', 'a big iron on his hip', 'the secret to life, the universe and everything', 'Mjollnir', 'Excalibur', 'the Holy Grail', 'mustard', 'corn dog with a single bite taken out of it', 'Abyssal Whip', 'buttons'];
  var treasure = treasures[Math.floor(Math.random() * treasures.length)];
  this.treasureChest.push(treasure);
}






// describe('RetiredForagerBee class functionality', function() {

//   verifyClass(RetiredForagerBee).followsPattern('pseudoclassical', {}, false);

//   beforeEach(function() {
//     retiredForager = new RetiredForagerBee();
//   });

//   /*  Overwrite methods from superclass  */

//   it('should have an `age` property that is set to `40`', function() {
//     expect(retiredForager.age).to.equal(40);
//   });

//   it('should have a `job` property that is set to `gamble`', function() {
//     expect(retiredForager.job).to.equal('gamble');
//   });

//   it('should have a `canFly` property that is set to `false`', function() {
//     expect(retiredForager.canFly).to.equal(false);
//   });

//   it('should have a `color` property that is set to `grey`', function() {
//     expect(retiredForager.color).to.equal('grey');
//   });

//   it('should have a `forage` method that returns "I am too old, let me play cards instead"', function() {
//     expect(retiredForager.forage()).to.equal('I am too old, let me play cards instead');
//   });

//   /*  Inherited from superclass  */

//   it('should have a `food` property that is inherited from grub', function() {
//     expect(retiredForager.food).to.equal('jelly');
//   });

//   it('should have an `eat` method that is inherited from grub', function() {
//     expect(retiredForager.eat).to.be.a('function');
//   });

//   it('should have a `treasureChest` property inherited from foragerBee that is set to an empty array `[]`', function() {
//     expect(retiredForager.treasureChest).to.be.a('array');
//   });

//   /*  New methods and properties  */

//   it('should have an always winning `gamble` method that allows the bee to add a `treasure` to the `treasureChest`', function() {
//     retiredForager.gamble();
//     retiredForager.gamble();
//     expect(retiredForager.treasureChest).to.have.length(2);
//   });

// });
