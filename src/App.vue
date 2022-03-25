<template>
  <div id="nav">

    <ul class="p-0 m-0">
      <li >Fürge-Gép gépkölcsönző</li>
      <li >Fülöp Balázs ev.</li>
      <li >Tel: +36 30 500-1185</li>
      <li >E-mail: furgegep@gmail.com</li>
    </ul>

    <div id="vonal" ></div>


    <router-link to="/"> <img src="./assets/indexPage/logo_kicsi.png" alt="kicsi logo">  </router-link>






    <div class="topnav" id="myTopnav">
      <div class="menu" >
          <router-link to="/gepkolcsonzes">Gépkölcsönzés</router-link>
          <router-link to="/ozon">Ózongenerátor</router-link>
          <router-link to="/arlista">Árlista</router-link>
          <router-link to="/kapcsolat">Kapcsolat</router-link>
          <router-link to="/palyazat">Pályázat</router-link>
        <a href="javascript:void(0);" class="icon " @click="myFunction()">
          <b-icon-list></b-icon-list>
        </a>
      </div>
    </div>





     <router-view /> <!--  ebbe töltődik be a router, vue 2.0 verziónál a gyökérben kell lennie, 3 masnál nem, erre figyelj -->
    <div class="box">
      <div style="  float:left; "><img  src="./assets/indexPage/lab_lec.png" alt="láb léc"></div>
      <div style=" width: 200px; position:fixed; right: 0; bottom: 0; "> <img src="./assets/indexPage/szechenyi.png" alt="gif" > </div> <!--  -->
    </div>
  </div>

  <!--
   <div class="box">
     <img src="./assets/indexPage/Bérelj.gif" alt="gif" >
   </div>
 -->
 </template>

 <script>
 // @ is an alias to /src


 export default {


   methods: {
     addTask() {
     },
     myFunction() {
       var x = document.getElementById("myTopnav");
       if (x.className === "topnav") {
         x.className += " responsive";
       } else {
         x.className = "topnav";
       }
     }
   },
 };

 </script>


 <style>


 .menu{
   margin: auto;
   text-align: left;
   width: 50%;
   width: 1440px;
   /*background-color: #04AA6D;*/
 }


 *{
   /* margin-left: 10%;
    margin-right: 10%;*/
   margin: 0;
   padding: 0;
   border: 0;
   font-family: Arial;
 }
 html {
   overflow-y: scroll; /*ettől nem pattog a weboldal a scrollbar miatt*/
 }

 body {
   margin: 0;
   font-family: Arial, Helvetica, sans-serif;
 }


 .topnav {

   background: linear-gradient(to right, #ffc11c 0%, #efb721 50%,#ffc11c 100%);
   -webkit-box-shadow: inset 0px 0px 20px -4px rgba(0,0,0,0.55);
   -moz-box-shadow: inset 0px 0px 20px -4px rgba(0,0,0,0.55);
   box-shadow: inset 0px 0px 20px -4px rgba(0,0,0,0.55);


 }

 .topnav a {
   display: inline-block;
   color: #000000;
   padding: 14px 16px;
   text-decoration: none;
   font-size: 17px;

 }

 .topnav a:hover {
   background-color: #ddd;
   color: black;
 }

 .topnav a.active {
   background-color: #04AA6D;
   color: white;
 }

 .topnav .icon {
   display: none;
 }
 .box{
   text-align: center;
 }

 .box img {
   max-width: 100%;
   margin-top: 50px;
 }
 ul {
   text-align: center;
   list-style-type: none;
   padding-top: 10px;
 }
 ul li{
   display: inline-block;
   margin-left: 20px;
   list-style-type: none;
 }

 @media screen and (max-width: 800px) {

   ul li{ margin-left: 7px; font-size: 12px; }
   ul li:nth-child(1){ display: none; }
   ul li:nth-child(2){ display: none; }
   .topnav { text-align: left; }
   .topnav a:not(:first-child) {display: none;}
   .topnav a.icon {
     float: right;
     display: block;
   }
   .topnav.responsive {position: relative;}
   .topnav.responsive .icon {
     position: absolute;
     right: 0;
     top: 0;
   }
   .topnav.responsive a {
     display: block;
     text-align: left;
   }
   .menu{
     margin: 0px;
     text-align: left;
     width: auto;
   }
 }



 #vonal{
   background-color: #ffc11c;
   height: 1px;
   margin: 0px;
 }
 h4{
   font-family: 'Roboto Slab', serif;
   font-size: 2.4em;
   text-transform: uppercase;
   padding-bottom: 5px;
   margin-bottom: 20px;
   margin-top: 20px;
   word-spacing: 10px;
   text-align-last: center;
   text-align: center;
 }


 </style>
