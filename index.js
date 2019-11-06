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
  setTimeout(() => {
    let content = '';

    posts.forEach((post, index) => {
      content += post.title;
    });
    console.log(content);
  }, 2000);
};

const createPost = (yourNewPostTitle) => {
  setTimeout(() => {
    const newPost = {
      title: yourNewPostTitle
    };
    posts.push(newPost);
  }, 1000);
};
createPost('Title 3 ');
createPost('Title 4 ');
createPost('Title 5 ');
createPost('Title 6 ');
createPost('Title 7 ');
getPost();
