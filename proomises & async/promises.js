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

function creatPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout (() => {
      posts.push(post);
    
       const error = false;

       if(!error) {
        resolve();
       } else {
        reject('Error: Somthing went wrong');
       }
    }, 2000);
  });
}

//creatPost({titel: 'post Three', body: 'this is post three' }).then(getPosts).catch(err => console.log(err));

// async/ await
//async function init() {
//  await creatPost({titel: 'post Three', body: 'this is post three' });

  //getPosts();
//}
  
//init();

//asunc /await/ fetch
async function fetchUser() {
  const res = await fetch
  ('https://jsonplaceholder.typicode.com/users');

  const data = await res.json();

  console.log(data);

}

fetchUser();
// Promise.all
/*
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => 
  setTimeout(resolve, 2000, 'Goodbay')
);
const promise4 = fetch
('https://jsonplaceholder.typicode.com/users').then(res =>
  res.json()
);



Promise.all([promise1, promise2, promise3, promise4])
.then(values =>
  console.log(values)
);
*/