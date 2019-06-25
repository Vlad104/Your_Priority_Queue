<template>
  <div id="main">
    <h1 class="app-name">Your Priority Queue</h1>
    <h1 class="hello-title">Добрый день, Владислав!</h1>
    <div class="tasks">
      <ListItem 
        v-for="item in taskItems" 
        :key="item.id"
        :slug="item.slug"
        :title="item.title">
      </ListItem>
    </div>
  </div>
</template>

<script>
import ListItem from './ListItem';

export default {
  name: "MainPage",
  data() {
    return {
      taskItems: [
        {id: 0, slug: 'today', title: 'Сегодня'},
        {id: 1, slug: 'tomorrow', title: 'Завтра'},
        {id: 2, slug: 'soon', title: 'Скоро'},
        // {id: 3, slug: 'notsoon', title: 'Не скоро'},
        // {id: 4, slug: 'ideas', title: 'Идеи'},
      ],
    };
  },
  components: {
    ListItem,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.app-name {
  position: absolute;
  left: 40px;
  bottom: 10px;
}

.tasks {
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 3% 0 3%;
}

</style>
