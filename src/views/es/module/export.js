import {Message} from 'iview';
console.log(Message)
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
export function add() {
    Message.error('我是importx引入的，我是一个add函数！')
}
