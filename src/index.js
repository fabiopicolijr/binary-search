const express = require("express");
const { binarySearch } = require("./BinarySearch/binarySearch");

const app = express();

app.get("/", (request, response) => {
    return response.json({message: "Hello Binary Search!"});
});

app.get("/search", (request, response) => {    
    const list = [1, 2, 3, 4, 5]; 
    const value = request.query.value;
    const result = binarySearch(list, value);      

    return response.json({binarySearch: result});
});

//localhost:3333
app.listen(3333);