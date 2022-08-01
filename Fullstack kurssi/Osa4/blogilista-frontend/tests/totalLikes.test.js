const totalLikes = require('../src/utils/totalLikes')

describe('Total likes', () => {

    test('How many likes these blogs has totally', () => {
        const testBlogs = []

        const result = totalLikes.totalLikes(testBlogs)
        expect(result).toBe(36)
    })
})