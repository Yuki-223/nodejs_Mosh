console.log(this);
const o = ()=>{
    console.log(this);
};

// 公开函数本身
// module.exports = o;

// 公开整个对象
module.exports.o = o;

o();