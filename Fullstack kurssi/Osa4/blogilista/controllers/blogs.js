const blogsRouter = require("express").Router();
const Blog = require("../models/blog");

blogsRouter.get("/", (request, response, next) => {
  Blog.find({})
    .then((blogs) => {
      response.json(blogs);
    })
    .catch((error) => next(error));
});

blogsRouter.post("/", (request, response, next) => {
  const body = request.body;
  if (!body.likes) {
    body.likes = 0;
  }

  if (!body.title) {
    return response.status(400).json({ error: "Title is required" });
  }

  if (!body.author) {
    return response.status(400).json({ error: "Author is required" });
  }

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  });
  blog
    .save()
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((error) => next(error));
});

blogsRouter.put("/:id", (request, response, next) => {
  const { likes } = request.body;
  Blog.findByIdAndUpdate(
    request.params.id,
    { likes },
    { new: true, likes: "query" }
  )
    .then((updateBlog) => {
      response.json(updateBlog);
    })
    .catch((error) => next(error));
});

blogsRouter.delete("/:id", (request, response, next) => {
  Blog.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

module.exports = blogsRouter;
