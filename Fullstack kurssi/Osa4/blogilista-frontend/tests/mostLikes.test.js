const mostLikes = require('../src/utils/mostLikes')

describe('Most likes', () => {

    test('What blog has most likes', () => {
        const testBlogs = {
            author: "Edsger W. Dijkstra",
            likes: 17
          }

        const result = mostLikes.mostLikes(testBlogs)
        expect(result).toEqual(testBlogs)
    })
})