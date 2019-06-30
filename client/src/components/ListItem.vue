<template>
  <div id="today">
    <h2 class="title">{{ title }}</h2>
    <div class="list">
      <div class="task" v-for="task in tasks" :key="task.id">
        <div class="task__field"></div>
        <div class="task__text"> {{ task.text }} </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="task__delete" v-on:click="onDeleteTask(task.id)">
          <path fill-rule="evenodd" d="M12.437 6a.463.463 0 0 1 .464.489l-.367 6.679c0 1.104-.914 1.84-2.018 1.84H5.548c-1.103 0-2.017-.686-2.017-1.79l-.436-6.724A.462.462 0 0 1 3.558 6h8.879zM2.128 5a.529.529 0 0 1-.531-.525l.001-.012c0-.414.251-.769.608-.922.455-.241 1.681-.439 3.292-.542V1.41C5.498.632 6.13 0 6.908 0h2.184c.778 0 1.41.632 1.41 1.41v1.589c1.611.103 2.837.301 3.292.542.357.153.608.508.608.922 0 .297-.24.537-.537.537H2.128zm6.571-3.407H7.301A.301.301 0 0 0 7 1.894v1.041a46.454 46.454 0 0 1 2 0V1.894a.301.301 0 0 0-.301-.301z"/>
        </svg>
        <!-- <div class="task__delete" v-on:click="onDeleteTask(task.id)">
        </div> -->
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
      data.text = this.text;
      await postTask(this.slug, data);
      this.text = '';
      this.setTasks();
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
  width: 25%;
  height: 600px;
  border: 1px;
  margin: 0 3% 0 3%;
}

.title {
  padding-bottom: 10px;
  border-bottom: 2px #2863b3 solid;
}

.list {
  text-align: left;
}

.task {
  display: block;
  position: relative;
  margin: 20px auto;
  color: #bb6222;
  height: 1em;
  width: 100%;
}

/* .task:hover {
  fill: #bb622260; 
} */

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
  left: 1em;
  vertical-align: top;
}

.task__text:hover {
  color: #bb622260;
  border-color: #bb622260;
}

.task__text::before {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background: #bb622260;
  top: calc(50% - 1px);
  left: 0;
}

.task__text:hover::before {
  color: #bb622260;
  border-color: #bb622260;
  animation: canceling 1s ease-out 0s 1 normal forwards running;
}

@keyframes canceling {
  0% {width: 0;}
  100% {width: 100%;}
}

.task__delete {
  position: absolute;
  top: 50%;
  right: 0.8rem;
  transform: translate(50%, -50%);
  width: 1rem;
  height: 1rem;
  fill: #bb6222;
}

.task__delete:hover {
  fill: #bb622260;
}


.input-area {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.input-text {
  background-color: #181E24;
  height: 1.6rem;
  width: calc(100% - 3.2rem);
  border: 1px solid #bb6222;
  border-radius: 5px;
  color: #bb6222;
  padding: 0 0 0 15px;
  font-size: 0.9rem;
}

.input-button {
  width: 1.6rem;
  height: 1.6rem;
  border: 2px solid #bb6222;
  border-radius: 50%;
  background-color: #181E24;
}

.input-button::before {
  content: " ";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100%;
  width: 2px;
  border: 1px solid #bb6222;
  background-color: #bb6222;
  transform: translate(-50%, -50%);
  transform: rotate(0deg);
}

.input-button::after {
  content: " ";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100%;
  width: 2px;
  border: 1px solid #bb6222;
  background-color: #bb6222;
  transform: translate(-50%, -50%);
  transform: rotate(90deg);
}

</style>
