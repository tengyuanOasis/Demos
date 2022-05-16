<template>
  <div>
    <div class="objectString">
        <span>{{objectString.id}}</span>
        <button @click="ObjectString_change">change</button>
    </div>
    <div class="arrayNumber">
        <span v-for="item in arrayNumber" :key="item">{{item}}</span>
        <button @click="ArrayNumber_change">change</button>
    </div>
    <div class="arrayString">
        <span v-for="item in arrayString" :key="item">{{item}}</span>
        <button @click="ArrayString_change">change</button>
    </div>
    <div class="arrayObject">
        <span v-for="item in arrayObject" :key="item.id">{{item.id}}</span>
        <button @click="ArrayObject_change">change</button>
    </div>
    <div class="arrayObject">
        <span v-for="item in arrayObject2" :key="item.id">{{item.id}}</span>
        <button @click="ArrayObject2_change">change</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      objectString:{ id:0 },
      arrayNumber:[0,1],
      arrayString:["a","b"],
      arrayObject:[{ id:0 },{ id:1 }],
      arrayObject2:[{ id:0 },{ id:1 }],
    }
  },
  methods: {
    ObjectString_change(){
        this.objectString['id'] = 99
    },
    ArrayNumber_change(){
        this.arrayNumber[0] = 99
    },
    ArrayString_change(){
        this.arrayString[0] = 99
    },
    ArrayObject_change(){
        this.arrayObject[0].id = 99
    },
    ArrayObject2_change(){
        this.arrayObject2[0] = { id:99 }
    },
  }
};
</script>
<style>
    span{
        color:blue;
        padding-right:20px;
    }
</style>