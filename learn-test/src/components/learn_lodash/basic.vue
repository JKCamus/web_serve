<template>
  <div class="basic">-----------------
    <div>
      {{mapData()}}
    </div>
  </div>

</template>
<script>
export default {
  name: "basic",
  methods: {
    mapData() {
      var users = [
        { name: "barney", age: 21 },
        { name: "fred", age: 22 },
      ];

    return   _.map(users,'name')
    },
  },
};
</script>
<style>
</style>
