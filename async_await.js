const posts = [
  {
    title: 'Title 1 ',
    body: ''
  },
  {
    title: 'Title 2 ',
    body: ''
  }
];

const getPost = () => {
  let content = '';

  posts.forEach((post, index) => {
    content += post.title;
  });
  console.log(content);
};

const createPost = async yourNewPostTitle => {
  const newPost = {
    title: yourNewPostTitle
  };
  await posts.push(newPost);
  getPost();
};

createPost('Title 3 ');
