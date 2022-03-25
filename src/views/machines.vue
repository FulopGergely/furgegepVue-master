<template>

  <div class="container">
    <h4 >{{ machines.name }} <!--   {{ $route.params.id }}-->  </h4>


    <!-- <img :src="require(`../assets/machines/${machines.image}`)"  :alt="machines.name" > -->
    <img class="modal-content" :src="require(`../assets/machines/${machines.image}`)"  :alt="machines.name" >




    <!-- comment -->
    <div >
      <!--<div class="price">{{machines.price}}</div>-->

      <h1 style="padding-top: 150px;">Specifikáció:</h1>
      <li class="specification" v-for="n in machines.specification">{{ n }}</li>
      <h1 style="padding-top: 70px;" v-if="machines.description1">Termékleírás:</h1>
      <p v-if="machines.description1" class="description">{{hello(machines.description1)}}<br></p>   <!-- <pre> -->
      <p v-if="machines.description2" class="description">{{machines.description2}}<br></p>
      <p v-if="machines.description3" class="description">{{machines.description3}}<br></p>
      <p v-if="machines.description4" class="description">{{machines.description4}}<br></p>
      <p v-if="machines.description5" class="description">{{machines.description5}}<br></p>
      <p v-if="machines.description6" class="description">{{machines.description6}}<br></p>
      <p v-if="machines.description7" class="description">{{machines.description7}}<br></p>
      <p v-if="machines.description8" class="description">{{machines.description8}}</p>
      <div v-if="machines.accessory">
        <h1 style="padding-top: 70px;">Tartozék:</h1>
        <br>
        <a :href="machines.link">{{machines.accessory_name}}</a>
        <div>{{machines.accessory}}</div>
      </div>
      <li class="specification" v-if="machines.accessoryList" v-for="n in machines.accessoryList">{{ n }}</li>
    </div>










 </div>

</template>


<script>
import sourceData from "../machines.json";


export default {
computed:{
  machinesId(){
    return parseInt(this.$route.params.id)
  },
  machines(){
    return sourceData.machines.find(machines => machines.id === this.machinesId)
  }
},
data: function () {
  return {
    items: [
      require('../assets/machines/gyalu.png'),
     ],
    index: null
  };
},
  methods: {
    hello(a) {

      //a.replace(/\n/g, "\\\\n").replace(/\r/g, "\\\\r").replace(/\t/g, "\\\\t");
      //var b = "asdsa\nfs<br>ad"
      //var str = $( "p" ).first().text();
      //$( "p" ).last().html( str );
      //How can I write HTML code as a JavaScript string
      return a;
    }
  }

}

</script>

<style>
.container{
box-sizing: border-box;
}

.price{
float: right;
}
.specification{
padding: 15px;
list-style-type: none;
}
.description{
font-family: Georgia, serif;
font-size: 24px;


}



/* Modal Content (image) */
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}


/* Add Animation */
.modal-content, #caption {
  animation-name: zoom;
  animation-duration: 0.6s;
}
@keyframes zoom {
  from {transform: scale(0.1)}
  to {transform: scale(1)}
}
/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
  .modal-content {
    width: 100%;
  }
}


</style>
