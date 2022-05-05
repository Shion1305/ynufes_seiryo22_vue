<script setup>
import {event} from "vue-gtag";
import store from "@/store";

function getUpdate() {
  return store.state.updates;
}

console.log(getUpdate())
if (process.env.NODE_ENV === "production") {
  event("page:updates");
}

function getDate(d) {
  const date = new Date(d);
  return date.getFullYear() + '.' + (date.getMonth() < 9 ? " " + (date.getMonth() + 1) : date.getMonth() + 1) + '.' + date.getDate();
}

function getTime(d) {
  const date = new Date(d);
  return (date.getHours() < 10 ? ("0" + date.getHours()) : date.getHours()) + ":" + (date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes());
}

</script>
<template>
  <div id="content-frame">
    <div class="updateItem fadeUp" v-for="update in getUpdate()" :key="update.id" :id="`${update.id.toString()}`">
      <h1>{{ update.title }}</h1>
      <div>{{ getDate(update.date) }} {{ getTime(update.date) }}</div>
      <hr>
      <div class="updateContent">
        <p v-html="`${update.content}`"></p>
        <router-link class="reference" :to="`${update.reference}`" v-if="update.reference && update.referenceName">
          {{ update.referenceName }}
        </router-link>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
#content-frame {
  width: unquote("min(100% - 2rem, 50rem)");
  margin-inline: auto;
  justify-content: center;
}

.updateItem {
  margin-bottom: 1rem;
  font-size: 1.3rem;
  background: linear-gradient(120deg, #e861a7, #ff75a8);
  box-sizing: border-box;
  width: 100%;
  border-radius: 1em;
  padding: 0.4em;
  color: white;
  text-align: center;

  h1 {
    margin: 0;
    font-size: 1.5em;
  }

  .updateContent {
    border-radius: 1em;
    box-sizing: border-box;
    padding: 0.3em 1.5em 1em 1.5em;
    color: black;
    background: white;

    p {
      text-align: initial;
    }
  }

  .reference {
    text-decoration: none;
    width: 100%;
  }

  a {
    white-space: nowrap;
    height: 2em;
    background: #EF60A3;
    border-radius: 1em;
    padding: 0.5em;
    color: white;
    margin-right: 5px;
  }

  @media screen and (max-width: 420px) {
    font-size: 1rem;
    padding: 1em;
  }
}

.updateItem:first-child {
  animation-delay: 0.2s;
}

.updateItem:nth-child(2) {
  animation-delay: 0.3s;
}

.updateItem:nth-child(3) {
  animation-delay: 0.4s;
}

.updateItem:nth-child(4) {
  animation-delay: 0.5s;
}
</style>