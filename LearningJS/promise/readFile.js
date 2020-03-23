var fs = require("fs");

function readFilePromise(path){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,'utf8',function(err,data){
            if(err)
            return reject(err);
            else 
            return resolve(data);
        })
    });
}


readFilePromise("song1.txt")
    .then(function(data){
        console.log(data);
        //Buoc nay neu goi then moi thi phai return promise moi
        return readFilePromise("song2.txt");

    })
    .then(function(data){
        console.log(data);
        return readFilePromise("song3.txt");
    })
    .then(function(data){
        console.log(data);

    })
    .catch((err)=>{
        console.log(err + '');
    })


//TRuong hop muon doc nhanh ta dung promise.all

Promise.all([
    readFilePromise("song1.txt"),
    readFilePromise("song2.txt"),
    readFilePromise("song3.txt"),
])
    .then(function(values){
        console.log(values)
    })