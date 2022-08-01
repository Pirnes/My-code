const mostBlogs = require('../src/utils/mostBlogs')

describe('Most blogs', () => {

    test('Author who has most blogs', () => {
        const testBlogs = {
                author: "Robert C. Martin",
                blogs: 3
          }

        const result = mostBlogs.mostBlogs(testBlogs)
        expect(result).toEqual(testBlogs)
    })
})