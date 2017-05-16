export const houseList = (type) => {
    let labels = ['', '整租', '合租'],
        arr = [],
        das = ['真如', '桃浦新村', '南翔', '李子园', '交通大学'],
        daArr = [];
    for(let i = 0; i < 10; i ++) {
        let n = i % 5;
        daArr = [das[n], n < 4 ? das[n+1] : n%3 == 0 ? das[n-1] : das[n%3]];
        arr.push({
                id: (i + 1),
                houseName: '长征佳苑' + parseInt(Math.random()*100),
                addr: '普陀区',
                layout: '3室2厅1卫',
                area: parseInt(Math.random()*100 + 50) + 'm²',
                label: labels[type || parseInt(Math.random()*2 + 1)],
                price: parseInt(Math.random()*100) * 100,
                detailedAddress: daArr.join(' '),
                createTime: '2017-03-03 12:00:00'
            })
    }
    return arr;
    // return {
    //     status: 1,
    //     errmsg: '',
    //     results: arr
    // }
};