<template>
  <div class="content-frame">
    <div>
      <!--Control area-->
    </div>
    <div>
      <div class="events_block">
        <router-link :key="event.key" v-for="event in eventData"
                     :to="{
          name: 'event_detail',
          params: { id: event.id, },
        }">
          <EventTile :event="event"></EventTile>
        </router-link>
      </div>
      <!--      </router-link>-->
    </div>
  </div>
</template>

<script>
import EventTile from "@/components/EventTile";
import data from "@/assets/data.json";

export default {
  name: "EventListView",
  components: {EventTile},
  computed: {
    eventData() {
      console.log(data);
      return data;
    }
  }
}
</script>
<style scoped>
.events_block {
  box-sizing: border-box;
  justify-content: center;
  gap: 0.5rem;
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  max-width: 70rem;
  width: 100%;
}

.content-frame {
  display: flex;
  flex-direction: column;
  width: min(100% - 2rem, 70rem);
  margin-inline: auto;
}
</style>