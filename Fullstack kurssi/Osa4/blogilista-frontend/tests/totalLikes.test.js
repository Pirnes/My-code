const totalLikes = require('../src/utils/totalLikes')

describe('Total likes', () => {

    test('Is total likes value correct', () => {
        const testBlogs = []

        const result = totalLikes.totalLikes(testBlogs)
        expect(result).toBe(36)
    })
})