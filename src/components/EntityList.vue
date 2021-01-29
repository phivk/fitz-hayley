<template>
  <section class="entity-list">
    <EntityCard
      v-for="(entity, index) in entitiesFiltered"
      :key="index"
      :type="entity.type"
      :title="entity.title"
      :bgImageSrc="entity.bgImageSrc"
      class="mb3"
    />
  </section>
</template>

<script>
import EntityCard from "./EntityCard";
export default {
  name: "EntityList",
  components: {
    EntityCard
  },
  props: {
    entities: { type: Array, default: () => [] },
    typeFilter: { type: String }
  },
  computed: {
    entitiesFiltered() {
      return this.typeFilter
        ? this.entities.filter(entity => entity.type === this.typeFilter)
        : this.entities;
    }
  }
};
</script>
