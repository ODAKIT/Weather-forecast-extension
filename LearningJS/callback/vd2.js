
//Viết hàm tính tổng 2 số dùng callback function


let add = (a,b,callback) => {
    setTimeout(()=>{
        let err ,res;
        if(typeof a != 'number' || typeof b !='number'){   
            err = "Loi cmnr";
        return callback(err,res); // lúc này trả  về một err và res là undifine , như đã nói ở vd 1 , đây cũng chính là bước định nghĩa callback
        }
        return callback(err,a+b);  // lúc này err là undifine và res = a+b(tham số thứ 2)

    },1000)
}


//thực thi add và truyền vào callback

add(3,5,(err,res)=>{
    if(err)
        console.log(err);
    else
        console.log(res);
})


