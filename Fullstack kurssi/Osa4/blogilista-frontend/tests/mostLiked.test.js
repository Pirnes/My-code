const mostLiked = require('../src/utils/mostLiked')

describe('Most liked', () => {

    test('Is most liked value correct', () => {
        const testBlogs = []

        const result = mostLiked.mostLiked(testBlogs)
        expect(result).toBe(12)
    })
})