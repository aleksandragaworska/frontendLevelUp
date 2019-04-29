const fibb = require('./fibb');

test('Correct cases', () => {
	expect(fibb(6)).toEqual([0, 1, 1, 2, 3, 5]);
	expect(fibb(0)).toEqual([]);
});

test('Parameter is not a number', () => {
	expect(() => fibb("BlaBlaBla")).toThrow("Parameter is not a number");
});

test('Parameter is not an integer', () => {
	expect(() => fibb(2.5)).toThrow("Parameter is not an integer");
});

test('Parameter should be greater or equal 0', () => {
	expect(() => fibb(-17)).toThrow("Parameter should be greater or equal 0");
});
