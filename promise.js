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

    const error = false;

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

const promise1 = Promise.resolve('Hello');
const promise2 = Promise.resolve('err');
const promise3 = new Promise((resolve, reject) => {
  return resolve('Goodbyew');
});

Promise.all([promise1, promise2, promise3]).then(values => console.log(values));
