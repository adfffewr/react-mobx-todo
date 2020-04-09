// todoStore.js
const { observable } = require('mobx');

const todoStore = observable({
  todos: [
    {
      id: 1,
      text: 'React 배우기',
      done: true,
    },
    {
      id: 2,
      text: 'Gatsby 배우기',
      done: true,
    },
    {
      id: 3,
      text: 'node 백엔드 구현',
      done: false,
    },
  ],
  nextId: 4,
  create(data) {
    this.todos.push(data);
    this.nextId = this.nextId + 1;
  },
  toggle(data) {
    this.todos = this.todos.map((todo) => (todo.id === data.id ? { ...todo, done: !todo.done } : todo));
  },
  remove(data) {
    this.todos = this.todos.filter((todo) => todo.id !== data.id);
  },
});

export default todoStore;
