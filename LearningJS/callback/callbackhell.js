
//Viết hàm tính diện tích hình thang khi biết đáy lớn a ,  đáy bé b - chiều cao h
//Mục tiêu là xem hậu quả của việc callback hell , code dài dòng lằng ngoàng khó chỉnh sửa
// Callback hell nói cách khác là các callback lồng nhau


let add = (a,b,callback) => {
    setTimeout(()=>{
        let err ,res;
        if(typeof a != 'number' || typeof b !='number'){   
            err = "Loi cmnr";
        return callback(err,undefined); // lúc này trả  về một err và res là undifine , như đã nói ở vd 1 , đây cũng chính là bước định nghĩa callback
        }
        return callback(undefined,a+b);  // lúc này err là undifine và res = a+b(tham số thứ 2)

    },1000)
}

let mul = (a,b,callback)=>{
    setTimeout(()=>{
        let err , res;
        if(typeof a != 'number' || typeof b !='number'){   
            err = "Loi cmnr";
            return callback(err,undefined);
        }

        return callback(undefined,a*b);
    },1000)
}

let div = (a,b,callback)=>{
    setTimeout(()=>{
        let err , res;
        if(typeof a != 'number' || typeof b !='number'){   
            err = "Loi cmnr";
            return callback(err,undefined);
        }

        return callback(undefined,a/b);
    },1000)
}

//Ham tinh dien tich khong dung toan tu ma dung ham

function Area(a,b,h,callback)
{
    add(a,b,(err,res) => {
        if(err){
            return callback(err,undefined);   // Nếu có err thì trả res là undefined và cứ tiếp tục như thế
        }
        mul(res,h,(err,res)=>{   //Nếu không có err thì ta có res 
            if(err){
                return callback(err,undefined);
            }
            div(res,2,(err,res)=>{
                if(err){
                    return callback(err,undefined);
                }
                return callback(undefined,res);
            })
        })
    })
}


//Cach xu ly viec nay khong con bi lang nhang = > promise

Area(2,3,2,(err,res)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(res);
    }

})