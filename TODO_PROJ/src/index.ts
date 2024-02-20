import {TodoItem} from './Todoitem';

interface Data {
	id: number;
	task: string;
	complete: boolean;
}
const data: Data[] = [
	{id: 1, task: '장보기', complete: true},
	{id: 2, task: 'TS 공부하기', complete: false},
];

console.log('My Todo List');
for (let i: number = 0; i < data.length; i++) {
	let todoItem: TodoItem = new TodoItem(data[i].id, data[i].task, data[i].complete);
	todoItem.printDetails();
}

/* 
typeScript 는 가변인자로 함수를 호출할 수 없다.
javaScript 가변인자를 하려면, 함수 오버로딩을 해야 한다.
*/
