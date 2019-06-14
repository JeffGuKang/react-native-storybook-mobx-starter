import { observable, action, reaction, computed } from 'mobx';

export interface Todo {
  task: string;
  isComplete: boolean;
}

class TodoStore {
  @observable todoList: Todo[] = [];

  constructor() {
    // only execute second argument when the return value from the predicate changes of first argument.
    reaction(
      () => this.todoList.filter(todo => !todo.isComplete),
      incompletedTasks => {
        if (incompletedTasks.length > 5) {
          console.log("Dude. You've got too much on your plate.");
        }
      }
    );
  }

  @computed
  get completedTasks(): number {
    return this.todoList.filter(todo => todo.isComplete).length;
  }

  @action
  addTodo(task: string) {
    this.todoList.push({ task, isComplete: false });
  }

  @action
  completeTodo(completedTodo: Todo) {
    this.todoList.find(todo => todo === completedTodo)!.isComplete = true;
  }
}

export default TodoStore;
