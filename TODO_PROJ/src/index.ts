import {CharactersCollection} from './test/charactersCollection';
import {Customer} from './test/customer';
import {CustomerCollection} from './test/customerCollections';
import {NumbersCollection} from './test/numbersCollection';
import {Jsorter} from './test/sorter';
import {TodoConsole} from './view/TotoConsole';

// typeScript 는 가변인자로 함수를 호출할 수 없다.
// javaScript 가변인자를 하려면, 함수 오버로딩을 해야 한다.

// console.log('My Todo List');
// for (let i: number = 0; i < data.length; i++) {
// 	let todoItem: TodoItem = new TodoItem(data[i].id, data[i].task, data[i].complete);
// 	todoItem.printDetails();
// }

//_____________________________________________________________________

// const smmpleTodos: TodoItem[] = data.map((item) => new TodoItem(item.id, item.task, item.complete));
// const myTodoCollection = new TodoCollection('My Todo List', smmpleTodos);

// myTodoCollection.addTodo('Javascript 학습하기');
// myTodoCollection.addTodo('친구만나기');

// myTodoCollection.makrComplete(3, true);

// console.log(`${myTodoCollection.userName}`);
// myTodoCollection.getTodoItems(false).forEach((item) => item.printDetails());
// console.log('=============================');
// myTodoCollection.getTodoItems(true).forEach((item) => item.printDetails());

// console.log('=============================');
// myTodoCollection.removeComplete();
// myTodoCollection.getTodoItems(true).forEach((item) => item.printDetails());

//_____________________________________________________________________

// [1] user input logic
// const todoConsole = new TodoConsole();
// todoConsole.promptUser();

//_____________________________________________________________________

// [2] interface useful
const numbersCollection = new NumbersCollection([10, -7, 55, 3, 21]);
const sorter1 = new Jsorter(numbersCollection);
sorter1.sort();
sorter1.printCollection();

const charactersCollection = new CharactersCollection('TypeScript');
const sorter2 = new Jsorter(charactersCollection);
sorter2.sort();
sorter2.printCollection();

const customerCollection = new CustomerCollection([new Customer('A111', 'Yang'), new Customer('A111', 'Park'), new Customer('A111', 'Kim')]);
const sorter3 = new Jsorter(customerCollection);
sorter3.sort();
sorter3.printCollection();

//_____________________________________________________________________
