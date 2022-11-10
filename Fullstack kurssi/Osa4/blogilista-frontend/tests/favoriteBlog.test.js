const favoriteBlog = require('../src/utils/favoriteBlog')

describe('Favorite blog', () => {

    test('is that most liked blogs id', () => {
        const testBlogs = {
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            likes: 12
          }

        const result = favoriteBlog.favoriteBlog(testBlogs)
        // console.log('favorite blog result: ' , result)
        expect(result).toEqual(testBlogs)
    })
})