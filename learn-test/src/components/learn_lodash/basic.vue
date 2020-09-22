<template>
  <div class="basic" ref="test">
    -----------------
    <!-- <div>{{mapData()}}</div> -->
    <div class="look">
      <div class="look">woc</div>----------
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

      /* 重点

鲁棒性
用于处理接口数据
用于防止后端未传数据时，null导致的错误
*可以使用初始值
*也可以考虑使用lodash
*/
      /*  arr = null;
      //! arr.map((i) => i ** i); // TypeError
      _.map(null, (i) => i ** i); // --> []

      const objA = { name: "colin", car: "suzuki" };
      const objB = { name: "james", age: 17 };

      objA.extend(objB);
      console.log(objA);
      // {"name": "james", "age": 17, "car": "suzuki"};

      _.assign(objA, objB);
      // {"name": "james", "age": 17, "car": "suzuki"};

      // ES6
      Objetct.assign({}, objA, objB);
      // {"name": "james", "age": 17, "car": "suzuki"};
      //_.assign 是浅拷贝，所以会覆盖name

      return _.map(users, "name"); */
    },
  },
  mounted() {
    let res=this.$refs.test.parentNode
    console.log("----",res);
  },

};
</script>
<style>
</style>
