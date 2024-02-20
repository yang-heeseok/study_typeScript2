import {TodoCollection} from './service/TodoCollection';
import {TodoItem} from './model/Todoitem';
import {data} from './data';

// typeScript 는 가변인자로 함수를 호출할 수 없다.
// javaScript 가변인자를 하려면, 함수 오버로딩을 해야 한다.

// console.log('My Todo List');
// for (let i: number = 0; i < data.length; i++) {
// 	let todoItem: TodoItem = new TodoItem(data[i].id, data[i].task, data[i].complete);
// 	todoItem.printDetails();
// }

const smmpleTodos: TodoItem[] = data.map((item) => new TodoItem(item.id, item.task, item.complete));
const myTodoCollection = new TodoCollection('My Todo List', smmpleTodos);

myTodoCollection.addTodo('Javascript 학습하기');
myTodoCollection.addTodo('친구만나기');

myTodoCollection.makrComplete(3, true);

console.log(`${myTodoCollection.userName}`);
myTodoCollection.getTodoItems(false).forEach((item) => item.printDetails());
console.log('=============================');
myTodoCollection.getTodoItems(true).forEach((item) => item.printDetails());

console.log('=============================');
myTodoCollection.removeComplete();
myTodoCollection.getTodoItems(true).forEach((item) => item.printDetails());
