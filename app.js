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