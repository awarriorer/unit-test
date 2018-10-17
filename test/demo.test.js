
describe('demo1.js', function() {
	
	it('test isNum() has error!.', function() {
		expect(isNum(1)).toBe(true)
		expect(isNum('1')).toBe(false)
	})

})

describe('demo2.js', function() {

	it('test add() has error!.', function() {
		expect(add(1,1)).toBe(2)
		expect(add(1,2)).toBe(4)
	})

})
