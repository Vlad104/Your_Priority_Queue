<template>
  <div id="today">
    <h2 class="title">Сегодня</h2>
    <div class="list">
      <div class="task">
        <div class="task__field"></div>
        <div class="task__text">Попить пива</div>
      </div>
      <div class="task">
        <div class="task__field"></div>
        <div class="task__text">Попить пива</div>
      </div>
      <div class="task">
        <div class="task__field"></div>
        <div class="task__text">Попить пива</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#today {
  display: block;
  width: 200px;
  height: 600px;
  border: 1px;
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

</style>
