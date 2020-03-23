/**
 * Thiết kế database cho 1 hệ thống quản lý thư viện sách, cho biết thư viện này có hàng trăm giá sách khác nhau, sách được để ở bất kì giá nào không theo danh mục nào.
 * Mỗi cuốn sách có 1 mã khác nhau.
 * Hệ thống cho phép đăng ký người dùng mới, một người có thể mượn nhiều sách khác nhau trong một khoảng thời gian hữu hạn.
 * Hệ thống có thể lưu lịch sử ai đã mượn sách nào, bắt đầu mượn từ bao lâu, trả lúc nào.
 * Hệ thống có lưu lại số ngày quá hạn tổng cộng của 1 người dùng, ví dụ sách A quá 2 ngày, sách B quá 3 ngày -> tổng 5 ngày
 */


var books = [
    { 
        id : 0,
        name : "Gatsby",
        author : "F. Scott Fitzgerald",
    },
    { 
        id : 1,
        name : "Red Dragon",
        author : "Thomas Harris",
    },    
    { 
        id : 2,
        name : "Hachiko",
        author : "Luis Prats",
    },    
    { 
        id : 3,

        name : "Doreamon",
        author : "Fujiko Fujio",
    },    
    { 
        id : 4,
        name : "Conan",
        author : "Aoyama GoSho",
    },    

]

 var bookshelf =[
     {
        id : 0,
         books : [0,2,4],
     },
     {
        id : 1,
         books : [1,3],
     }
 ]


 var users = [
     {
         id :0,
        username : "Bui Duc Minh",
        borrowedBook : [1,4],
        dayleft:0,
     },
     {
         id : 1,
        username : "Nga Thi Huyen",
        borrowedBook : [2,3],
        dayleft:-3,
     },
     {
         id : 2,
        username : "Pham Van Long",
        borrowedBook : [0],
        dayleft:-5,

     },
 ]

 var histories =[
     {
         bookID : 0,
         userID : 2,
         bookshelfID : 0,
        dateBorrow : "03/07/2020",
        dateReturn : "03/14/2020",
     },
     {
        bookID : 1,
        userID : 0,
        bookshelfID : 1,
       dateBorrow : "03/05/2020",
       dateReturn : "03/17/2020",
    },
    {
        bookID : 4,
        userID : 0,
        bookshelfID : 4,
        dateBorrow : "03/05/2020",
        dateReturn : "03/17/2020",
    }
 ]


 //Now we need show history(book and user)

 //get history:
 function FindObjectByID(object,id)
 {
    var myObj = object.find(function(x){
        return x.id === id;
    })

    return myObj;
 }


 function ShowHistory()
 {  
    for(let data of histories)
    {
        var book = FindObjectByID(books,data.bookID);
        var sheft = FindObjectByID(bookshelf,data.bookshelfID);
        var user = FindObjectByID(users , data.userID)
        console.log(`[${user.username}] borrowed a book name '${book.name}' from ${data.dateBorrow} to ${data.dateReturn}.`);
        if(user.dayleft<0)
        {
            console.log(`--------[WANING] : Books borrowed by [${user.username}] has been overdue for ${Math.abs(user.dayleft)} day(s)`);
        }
    }
 }

//  ShowHistory();

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

function capitalize(str) 
{
     str = str.charAt(0).toUpperCase() + str.slice(1);
	// viết code ở đây
	for(let i = 0 ; i<str.length ; i++)
	{
	    if(str[i]==" ")
	    {
            str = str.replaceAt(i+1,str[i+1].toUpperCase());
           

	    }
	}
	return str;
}

var a = "123";
console.log(a[0]);

a[0]=a[1];

console.log(a[0]);