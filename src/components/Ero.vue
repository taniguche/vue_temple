<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Pop</h2>
    <p>いいね: {{ count }}</p>
    <button v-on:click="switchButton">{{ button }}</button>
    <form>
      <input type="text" v-model="newtodo">
      <button v-on:click="addButton">追加</button>
    </form>
    <ul>
      <li v-for="todo in todos">
        {{todo.item}}
        <button v-on:click="deleteTodo(todo)">削除</button>
      </li>
    </ul>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      button: 'Button Click',
      newtodo: '',
      count: 0,
      state: true,
      todos: []
    }
  },
  methods: {
    switchButton: function (event) {
      if (this.state === true) {
        this.count += 1
        this.state = false
      } else {
        this.count -= 1
        this.state = true
      }
    },
    addButton: function (event) {
      event.preventDefault()
      if (this.newtodo === '') return
      this.todos.push({
        item: this.newtodo
      })
      this.newtodo = ''
    },
    deleteTodo: function (todo) {
      var index = this.todos.indexOf(todo)
      this.todos.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
