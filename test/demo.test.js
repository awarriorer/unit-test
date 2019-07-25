import add from '@/demo2.js'

describe('demo2.js', function() {

	it('test add() has error!.', function() {
		expect(add(1,1)).toBe(2)
		expect(add(1,2)).toBe(4)
	})
})
