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

const createPost = (yourNewPostTitle, callback) => {
  const newPost = {
    title: yourNewPostTitle
  };
  posts.push(newPost);
  callback();
};
createPost('Title 3 ', getPost);
