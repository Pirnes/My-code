const mostLiked = require('../src/utils/mostLiked')

describe('Most liked', () => {

    test('How many likes most liked blog has', () => {
        const testBlogs = []

        const result = mostLiked.mostLiked(testBlogs)
        expect(result).toBe(12)
    })
})