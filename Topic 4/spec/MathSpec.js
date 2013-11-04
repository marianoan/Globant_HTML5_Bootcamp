describe("Math", function () {
    var mathAPI;

  beforeEach(function() {
      mathAPI =  MathAPI;
  });

  it("should be able to calculate round", function() {
      expect(mathAPI.round(8, 4)).toEqual(8);

  });

  it("round should be return 0 when values are 0", function () {
      //expect(mathAPI.round(0, 0)).not.toBeNaN();
      expect(mathAPI.round(0, 0)).toEqual(0);

  });

  it("round should be return the same value when radix is 0", function () {
      //expect(mathAPI.round(0, 0)).not.toBeNaN();
      expect(mathAPI.round(4, 0)).toEqual(4);

  });

  it("should be able to calculate ceil", function () {
      expect(mathAPI.ceil(8, 2)).toEqual(8);

  });

  it("ceil should be return 0 when values are 0", function () {
      //expect(mathAPI.round(0, 0)).not.toBeNaN();
      expect(mathAPI.ceil(0, 0)).toEqual(0);

  });

  it("ceil should be return the same val when step is 0", function () {
      //expect(mathAPI.round(0, 0)).not.toBeNaN();
      expect(mathAPI.ceil(4, 0)).toEqual(4);

  });

  it("should be able to calculate clamp", function () {
      expect(mathAPI.clamp(1, 2, 8)).toEqual(2);

  });

  it("should be able to calculate clamp when values are 0", function () {
      expect(mathAPI.clamp(0, 0, 0)).toEqual(0);

  });

  it("should be able to calculate countSteps", function () {
      expect(mathAPI.countSteps(12, 2, 10)).toEqual(6);

  });

  it("countSteps should be return 0 when values are 0", function () {
      //expect(mathAPI.round(0, 0)).not.toBeNaN();
      expect(mathAPI.countSteps(0, 0, 0)).toEqual(0);

  });

  it("should be able to calculate floor", function () {
      expect(mathAPI.floor(10.6, 2)).toEqual(10);

  });

  it("floor should be return 0 when values are 0", function () {
      //expect(mathAPI.round(0, 0)).not.toBeNaN();
      expect(mathAPI.floor(0, 0)).toEqual(0);

  });

  it("should be able to calculate inRange", function () {
      expect(mathAPI.inRange(3, 6, 2, 10)).toBeTruthy();

  });

  it("should be able to calculate inRange when values are 0", function () {
      expect(mathAPI.inRange(0, 0, 0, 0)).toBeTruthy();

  });

  it("should be able to calculate lerp", function () {
      expect(mathAPI.lerp(2, 2, 12)).toEqual(22);

  });

  it("should be able to calculate lerp when values are 0", function () {
      expect(mathAPI.lerp(0, 0, 0)).toEqual(0);

  });

  it("should be able to calculate loop", function () {
      expect(mathAPI.loop(10, 2, 4)).toEqual(2);

  });

  it("should be able to calculate loop when values are 0", function () {
      expect(mathAPI.loop(0, 0, 0)).toEqual(0);

  });

  it("should be able to calculate norm", function () {
      expect(mathAPI.norm(10, 2, 12)).toEqual(0.8);

  });

  it("norm should be return 0 when values are 0", function () {
      //expect(mathAPI.round(0, 0)).not.toBeNaN();
      expect(mathAPI.norm(0, 0, 0)).toEqual(0);

  });

});