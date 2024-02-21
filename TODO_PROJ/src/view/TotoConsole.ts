import * as inquirer from 'inquirer';
import {TodoCollection} from '../service/TodoCollection';
import {TodoItem} from '../model/Todoitem';
import {data} from '../data';
import {Commands} from '../model/Commands';

export class TodoConsole {
	private todoCollection: TodoCollection;
	private showCompleted: boolean;

	constructor() {
		this.showCompleted = true;
		const sampleTodos: TodoItem[] = data.map((item) => new TodoItem(item.id, item.task, item.complete));
		this.todoCollection = new TodoCollection('My Todo List', sampleTodos);
	}

	displayTodoList(): void {
		console.log(`=====${this.todoCollection.userName}=====` + ` (${this.todoCollection.getItemCounts().incomplete} items todo)`);
		this.todoCollection.getTodoItems(this.showCompleted).forEach((item) => item.printDetails());
	}

	promptUser(): void {
		console.clear();
		this.displayTodoList();

		inquirer // npm i inquirer@7.3.3 @types/inquirer@7.3.1
			.prompt({
				type: 'list',
				name: 'command',
				message: 'Choose option',
				choices: Object.values(Commands),
			})
			.then((answers) => {
				switch (answers['command']) {
					case Commands.Toggle:
						this.showCompleted = !this.showCompleted;
						this.promptUser();
						break;
					case Commands.Add:
						this.promptAdd();
						break;
					case Commands.Purge:
						this.todoCollection.removeComplete();
						this.promptUser();
						break;
					case Commands.Complete:
						if (this.todoCollection.getItemCounts().incomplete > 0) {
							this.promptComplete();
						} else {
							this.promptUser();
						}
						break;
					// default:
					// 	break;
				}
			})
			.catch((error) => {
				if (error.isTtyError) {
					// Prompt couldn't be rendered in the current environment
				} else {
					// Something else went wrong
				}
			});
	}

	promptAdd(): void {
		console.clear();
		inquirer
			.prompt({
				type: 'input',
				name: 'add',
				message: 'Enter task :',
			})
			.then((answers) => {
				if (answers['add'] !== '') {
					this.todoCollection.addTodo(answers['add']);
				}
				this.promptUser();
			})
			.catch((error) => {
				if (error.isTtyError) {
					// Prompt couldn't be rendered in the current environment
				} else {
					// Something else went wrong
				}
			});
	}

	promptComplete(): void {
		console.clear();
		inquirer
			.prompt({
				type: 'checkbox',
				name: 'complete',
				message: 'Mark Task Complete',
				choices: this.todoCollection.getTodoItems(this.showCompleted).map((item) => ({
					name: item.task,
					value: item.id,
					checked: item.complete,
				})),
			})
			.then((answers) => {
				let completedTasks = answers['complete'] as number[]; // typeScript 어쎠션(no alias)
				this.todoCollection.getTodoItems(true).forEach((item) => {
					this.todoCollection.makrComplete(item.id, completedTasks.find((id) => id === item.id) != undefined);
				});
				this.promptUser();
			})
			.catch((error) => {
				if (error.isTtyError) {
					// Prompt couldn't be rendered in the current environment
				} else {
					// Something else went wrong
				}
			});
	}
}
