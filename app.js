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

