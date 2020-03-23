// KEyword then ,  catch duoc goi khi no la mot promise
//Promise nham xu ly truong hop callback hell , goi callback nhung van theo tuan tu



/**
 * Viết function `load` nhận vào 1 tham số là 1 đường link dạng string, trả về 1 promise sao cho khi gọi:
 * load('some url').then(function(body) {
 *   console.log('Done', body);
 * });
 * thì sẽ hiển thị ra màn hình 'Done' kèm theo nội dung đường link đã truyền vào.
 * Sau 30' không làm được thì có thể lên Slack hỏi
 */

var request = require('request');

/**
 * Module `request` dùng để tải về 1 đường dẫn nào đó. Hãy thử chạy code để xem cách hoạt động
 */
console.log('Start fetching...');


console.log('Nothing');

function Load(url) {
    return new Promise((reslove, reject) => {      /*Tra ve 1 promise de dung then  - 2 tham số function(giá trị trả về khi thành công) nó tham chiếu tới
        tham số truy6n2 vào trong hàm then , reject là giá trị trả về khi lỗi , tham số của nó tham chiếu tới tham số trong catch        */
        request(url, function (error, response, body) {
            if (error !== null) {
                reject(err) // Print the error
            }
            reslove(body);
        });

    })
}

Load("https://www.google.com/")
    .then(function (body) {
        console.log("done : ", body);
    })
    .catch(function (err) {
        console.log("error : ", err);
    });

    //Nếu muốn load nhiều file tuần tuần thì cứ .then .then liên tục nnhưng then trước đó phải return về 1 promose mới.
