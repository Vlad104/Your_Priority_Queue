<template>
  <div id="today">
    <h2 class="title">{{ title }}</h2>
    <div class="list">
      <div class="task" v-for="task in tasks" :key="task.id">
        <div class="task__field"></div>
        <div class="task__text"> {{ task.text }} </div>
        <div class="task__delete" v-on:click="onDeleteTask(task.id)"></div>
      </div>
    </div>
    <div class="input-area">
      <input class="input-text" type="text" v-model="text">
      <input class="input-button" type="button" v-on:click="onAddTask">
    </div>
  </div>
</template>

<script>
import { getTasks, postTask, delTask } from '../services/api';

export default {
  name: "ListItem",
  props: ['slug', 'title'],
  data() {
    return {
      tasks: [],
      text: '',
    };
  },
  mounted() {
    this.setTasks();
  },
  methods: {
    async setTasks() {
      this.tasks = await getTasks(this.slug);
    },
    async onAddTask() {
      if (this.text == '') {
        return;
      }
      const data = {};
      data.id = this.tasks[this.tasks.length-1].id + 1;
      data.text = this.text;
      await postTask(this.slug, data);
      this.text = '';
    },
    async onDeleteTask(id) {
      console.log(id);
      await delTask(this.slug, id);
      this.setTasks();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#today {
  user-select: none;
  display: block;
  width: 200px;
  height: 600px;
  border: 1px;
  margin: 0 3% 0 3%;
}

.title {
  border-bottom: 2px #2863b3 solid;
}

.list {
  text-align: left;
}

.task {
  display: block;
  margin: 20px auto;
  color: #bb6222;
  height: 1em;
  width: 100%;
}

.task__field {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 1px #bb6222 solid;
  border-radius: 50%;
  box-sizing: border-box;
}

.task__text  {
  display: inline-block;
  position: relative;
  vertical-align: top;
  left: 50%;
  transform: translate(calc(-50% - 1em));
}

.task__delete {
  position: relative;
  top: calc(-50% - 1px);
  left: 90%;
  width: 10px;
  height: 3px;
  background-color: #bb6222;
}

.input-area {
  display: block;
}

.input-text {
  background-color: #181E24;
  height: 1.8em;
  width: 80%;
  border: 1px solid #bb6222;
  border-radius: 5px;
  color: #bb6222;
  padding: 0 0 0 15px;
}

.input-button {
  width: 1.8em;
  height: 1.8em;
  border: 1px solid #bb6222;
  border-radius: 50%;
  background-color: #bb6222;
}

</style>
