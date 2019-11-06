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

const createPost = yourNewPostTitle => {
  return new Promise((resolve, reject) => {
    const newPost = {
      title: yourNewPostTitle
    };
    posts.push(newPost);

    const error = true;

    if (!error) {
      resolve();
    } else {
      reject('Error message goes here');
    }
  });
};
createPost('Title 3 ')
  .then(getPost)
  .catch(err => console.log(err));
