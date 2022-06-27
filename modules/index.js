// es6 模块功能主要有两个 export 和 import
// export 用于规定模块的对外接口

const pi = 3.14;
const base_uri = "127.0.0.1";
function sayName(){
    return 'my name'
}
const obj = {
    foo:"foo",

}
class Person{
    constructor(){

    }
    sayAge(){
        console.log('16');
    }
}
export {pi,base_uri,sayName};
export default Person;