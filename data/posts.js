const posts = []

posts.push({
  id: 1,
  title: 'Primer post'
})

posts.push({
  id: 2,
  title: 'Segundo post'
})

posts.push({
  id: 3,
  title: 'Tercer post'
})

posts.push({
  id: 4,
  title: 'Cuarto post'
})

export const getPostById = (id) => posts.find(p => p.id === id)
export const getPosts = () => posts
export const createPost = (post) => {
  post.id = posts.length + 1;
  posts.push(post);
  return post;
}
