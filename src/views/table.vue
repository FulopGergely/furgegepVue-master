<template>
  <div>


    <h4>Gépkölcsönzés</h4>

    <div class="d-flex justify-content-center">
      <b-table hover :items="machines"></b-table>
    </div>

    <div v-for="item in machines" :key="item.name" >

      {{ item.name }}

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      machines: [
        {
          name: "Ácsgyalu",
          discription: "Teljesítmény: 1 200 W Teljes hossz: 525 mm Lökésszám: 15 000 / perc Gyalulási szélesség: 170 mm Vágásvastagság: 2 mm Méret (hossz x szélesség x magasság): 530 mm x 240 mm x 150 mm Súly: 9 kg",
          link: "",
          price1: 7000,
          price2: 6600,
          price3: 6300
        },
        {
          name: "Merülő körfűrész",
          discription: "Teljesítmény: 1 200 W Teljes hossz: 525 mm Lökésszám: 15 000 / perc Gyalulási szélesség: 170 mm Vágásvastagság: 2 mm Méret (hossz x szélesség x magasság): 530 mm x 240 mm x 150 mm Súly: 9 kg",
          link: "",
          price1: 6500,
          price2: 6100,
          price3: 5800
        }
      ]
    }
  }
}
</script>
