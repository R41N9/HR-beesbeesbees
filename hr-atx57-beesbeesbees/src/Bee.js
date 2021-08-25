var Bee = function() {
  // follow pseudoclassical pattern
  // food/eat is inherited from grub
  Grub.call(this);
  // age is 5
  this.age = 5;
  // color is yellow
  this.color = 'yellow';
  // job is keep on growing
  this.job = 'keep on growing';
};
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;











// describe('Bee class functionality', function() {

//   verifyClass(Bee).followsPattern('pseudoclassical', {}, false);

//   beforeEach(function() {
//     bee = new Bee();
//   });

//   /*  Overwrite methods from superclass  */

//   it('should have an `age` property that is set to `5`', function() {
//     expect(bee.age).to.equal(5);
//   });

//   it('should have a `color` property that is set to `yellow`', function() {
//     expect(bee.color).to.equal('yellow');
//   });

//   /*  Inherited from superclass  */

//   it('should have a `food` property that is inherited from grub', function() {
//     expect(bee.food).to.equal('jelly');
//   });

//   it('should have an `eat` method that is inherited from grub', function() {
//     expect(bee.eat).to.be.a('function');
//   });

//   /*  New methods and properties  */

//   it('should have a `job` property that is set to `keep on growing`', function() {
//     expect(bee.job).to.equal('keep on growing');
//   });

// });
