    const fs = require("fs");
    const axios = require("axios");


    /// pulase check

    //1+2
    let content;
    const readFile = () => {

        fs.readFile('./data.txt',(err,data)=>{
            if(err) throw err;
            content = data.toString()
            console.log(content)

        })

    };

    //3
    const writeFile = () => {

        fs.writeFile('./data.txt',"A new file has been created",(err)=>{
            if (err) throw err;
            console.log("The file has been saved");

        })
    };
    //4

    const getPost = (id) => {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}/`)
        .then((res)=>{
            let a= res.data
            console.log(a)
            
        })
        .catch((err)=>{
            throw err
        })
    };

    getPost(1);
    getPost(50);

    //5
    const getPostAsync = async (data) => {

        let da = await axios 
        .get(`https://jsonplaceholder.typicode.com/posts/${data}/`)

        console.log(da.data)
        
    };

    //practice 

    //1
    const appendToFile = (data) => {

        fs.appendFile("data.txt",data,(err)=>{
            if (err) throw err
            console.log('The "data to append" was appended to file!');
        })
    };

appendToFile("  Hi All")

//2
// const copyFile = (fileName) => {
//     fs.copyFile("data.txt",fileName ,(err)=>{
//         if (err) throw err;
//     })
// };


const copyFile = (fileName) => {
    function callback(err) {
        if (err) throw err;
        console.log('done');
    }
fs.copyFile(fileName, `copy_of_${fileName}.txt`, callback);

};

copyFile("data.txt");

//3

// the API Expects JSON data to be sent and that's why `JSON.stringify` is used
const post = JSON.stringify({
  title: "JavaScript Basics",
  body: "This post contains information about javaScript ",
  // the id of the user who is going to create the post
  userId: 1,
});

const createPost = (post) => {

    axios
    .post("https://jsonplaceholder.typicode.com/posts/",post)
    .then((res)=>{
        console.log(res.data)
    }).catch((err)=>{
        console.log(err)
    })
};

createPost(post);

//4
const newPost = JSON.stringify({
    id: 1,
    title: "Updated Title",
    body: "Updated body",
    userId: 1,
});

const updatePost = (id, data) => {
    axios
    .put(`https://jsonplaceholder.typicode.com/posts/${id}`, data)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
    throw err
    })
};
updatePost(1, newPost);

//5

const  getUsers = async () => {
    //or use try &cath
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(response.data)
};

getUsers()
//6


const saveUsers = async () => {
    const users = await getUsers();

    fs.writeFile("users.txt", users, (err) => {
        if (err) throw err;
        console.log(users);
    });
    };

    saveUsers();