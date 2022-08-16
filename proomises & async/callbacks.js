/*
const posts = [
  {titel: 'Post One', body: 'this is post 🙎' },
  {titel: 'Post Two', body: 'this is post 👩‍👧' }
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.titel}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function creatPost(post, callback) {
  setTimeout (() => {
    posts.push(post);
    callback();
  }, 2000);
}

*/
creatPost({titel: 'post Three', body: 'this is post three' }, getPosts);