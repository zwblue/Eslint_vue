import { Message } from 'iview';
console.log(Message)
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
function add() {
    Message.error('我是importx引入的，我是一个add函数！')
}
export { add };//1、export function add(){}  2、function f(){} ; export {f}
export default add;//在引入组件中不需要同名的并且{}引入的。import fun from './XXX' 即可


// var a=1;
// export default a; export default 42 ;  对的 ===> export var defalut=a  
// export default var a=1; 错误
// export default class{...}     import myClass from 'myClass'



// 输出常量与嵌套使用

//   constants/db.js
//   export const db = {
//     url: 'http://my.couchdbserver.local:5984',
//     admin_username: 'admin',
//     admin_password: 'admin password'
//   };

// constants/user.js
// export const users = ['root', 'admin', 'staff', 'ceo', 'chief', 'moderator'];

// constants/index.js
// export {db} from './db';
// export {users} from './users';

// import {db, users} from './constants/index';