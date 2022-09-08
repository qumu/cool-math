<script setup lang="ts">
import { ref, computed } from 'vue';

const value = ref('Lorem ipsum');

const computedProp = computed(() => value.value.toUpperCase());

const computedArray = computed(() => {
  return value.value.split('');
});
</script>

<template>
  <div class="container-fluid">
    <div class="number-prompt">
      <label for="someField" class="form-label">Some label</label>
      <input v-model="value" class="form-control" id="someField" placeholder="...">
    </div>
    <h4>Value is: {{ value }}</h4>
    <h4>Computed prop is: {{ computedProp }}</h4>
    <div>
      Computed Array is:
      <span v-for="letter in computedArray" :key="letter">
        {{letter}} -
      </span>
    </div>
    <div class="pascal-triangle">
      <div class="pascal-triangle__row">
        <span>1</span>
      </div>
      <div class="pascal-triangle__row">
        <span>1</span>
        <span>1</span>
      </div>
      <div class="pascal-triangle__row">
        <span>1</span>
        <span>2</span>
        <span>1</span>
      </div>
      <div class="pascal-triangle__row">
        <span>1</span>
        <span>3</span>
        <span>3</span>
        <span>1</span>
      </div>
      <div class="pascal-triangle__row">
        <span>1</span>
        <span>4</span>
        <span>6</span>
        <span>4</span>
        <span>1</span>
      </div>
      <div class="pascal-triangle__row">
        <span>1</span>
        <span>5</span>
        <span>10</span>
        <span>10</span>
        <span>5</span>
        <span>1</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pascal-triangle {
  display: flex;
  flex-direction: column;
  
  &__row {
    display: flex;
    align-content: center;
    justify-content: center;

    span {
      width: 45px
    }
  }
}
</style>
