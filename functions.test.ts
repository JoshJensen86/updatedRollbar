const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('should be type string', () => {
    expect (typeof shuffleArray).toBe('string')
    }
    test ('returns an array of the same length', ()=> {
        expect(shuffleArray).toEqual('array.length')

    })

})
