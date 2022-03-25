<template>

  <div class="gepkolcsonzes">


      <h4 >Gépkölcsönzés</h4>


    <div class="d-flex justify-content-center">

      <table class="m-5 " >

        <tbody >
        <tr v-for="item in machines" :key="item.id">
          <td class="p-5">
            <img :src="item.icon" class="mx-auto d-block" :alt="gyalu" :style="{ height: item.height + 'px' }">
          </td>
          <td id="tablemid" style="width: 800px">
            <p class="p-1">
              <a :href="item.link">{{item.name}}</a>
            </p>
            <p id="description" >{{item.discription}}
            </p>
          </td>
          <td class="p-4">
            <table style="min-width: 250px" >
              <p id="title" class=""><a href="acsgyalu.html">{{item.name}}</a></p>
              <tr class="mx-md-n5">
                <td class="m-4"> <p>{{item.duration1}}</p></td>
                <td class="m-2"> <p>{{item.price1}}Ft</p></td>
              </tr>
              <tr class="mx-md-n5">
                <td class="m-4"><p>{{item.duration2}}</p></td>
                <td class="m-2"><p>{{item.price2}}Ft</p></td>
              </tr>
              <tr class="mx-md-n5">
                <td class="m-4"><p>{{item.duration3}}</p></td>
                <td class="m-2"><p>{{item.price3}}Ft</p></td>
              </tr>
            </table>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>

</template>



<script>


export default {

  data(){
    return{
      machines: [
        {
          id: 1,
          name: "Ácsgyalu",
          discription: "Teljesítmény: 1 200 W Teljes hossz: 525 mm Lökésszám: 15 000 / perc Gyalulási szélesség: 170 mm Vágásvastagság: 2 mm Méret (hossz x szélesség x magasság): 530 mm x 240 mm x 150 mm Súly: 9 kg...",
          icon: require('../assets/machines/gyalu.png'),
          link: "machines/1",
          price1: 7000,
          price2: 6600,
          price3: 6300,
          height: 120,
          duration1: "1. nap",
          duration2: "6. naptól",
          duration3: "21. naptól"
        },
        {
          id: 2,
          name: "Merülő körfűrész",
          discription: "Teljesítmény: 1 300 W Üresjárati fordulatszám: 2 000 – 5 800 / perc Tárcsaátmérő: 165 mm Vágás mélység 90°: 55 mm Vágás mélység 45°: 39 mm Kábelhossz: 2,5 m Méret (hossz x szélesség x magasság):341 mm x 225 mm x 250 mm Súly: 4,4 kg...",
          icon: require('../assets/machines/korfuresz.jpg'),
          link: "machines/2",
          price1: 6500,
          price2: 6100,
          price3: 5800,
          height: 140,
          duration1: "1. nap",
          duration2: "6. naptól",
          duration3: "21. naptól"
        },
        {
          id: 3,
          name: "Vezetősín (körfűrészhez)",
          discription: "Alumínium anyag Könnyű, merev szerkezetű 1900 mm hosszúság Ezekhez a modellekhez: - Makita SP6000K - K1 és SP6000J - J1 modell...",
          icon: require('../assets/machines/vezetosin.jpg'),
          link: "machines/3",
          price1: 1000,
          price2: 1000,
          price3: 1000,
          height: 150,
          duration1: "1. nap",
          duration2: "6. naptól",
          duration3: "21. naptól"
        },
        {
          id: 4,
          name: "Aprító- és szecskázógép",
          discription: "Típus: Benzines szecskázó Motor: HECHT OHV Motor: 389 cm3 Teljesítmény: 9,8 kW, 13Le Tömege: 105 kg Aprítható ágak max. átmérője: 5x5 cm Oldalsó bemenet nagysága: 130x88 mm Felső bemenet méretei: 240x230 mm...",
          icon: require('../assets/machines/aprito.png'),
          link: "machines/4",
          price1: 8000,
          price2: 7600,
          price3: 7200,
          height: 160,
          duration1: "1. nap",
          duration2: "6. naptól",
          duration3: "21. naptól"
        },
        {
          id: 5,
          name: "Szőnyeg- és kárpittisztító",
          discription: "Max. felületteljesítmény: 20-25 m2/h Légmennyiség: 74 l/s Vákuum: 254mbar/25,4kPa Permetmennyiség: 1 l/min Permetnyomás: 1 bar Friss-/szennyezettvíz-tartály: 10-9 l Turbina teljesítménye: 1250 W Szivattyú teljesítménye: 40 W Feszültség: 220-240 V Frekvencia: 50-60 Hz Kábel hossza: 7,5 m Súly kiegészítők nélkül: 10,5 kg Méretek (hosszúság x szélesség x magasság): 690 mm x 325 mm x 440 mm...",
          icon: require('../assets/machines/szonyegtisztito.png'),
          link: "machines/5",
          price1: 4500,
          price2: 4300,
          price3: 4000,
          height: 180,
          duration1: "1. nap",
          duration2: "6. naptól",
          duration3: "21. naptól"
        },
        {
          id: 6,
          name: "Ipari porszívó",
          discription: "Nedves-száraz ipari porszívó gépcsatlakozással 1,4 kW  Specifikáció Feszültség: 230V/50Hz Tartály térfogata: 35 liter Motor teljesítmény: 1400W Por tárolása: Porzsák nélküli Energiaforrás: Vezetékes...",
          icon: require('../assets/machines/ipariporszivo.png'),
          link: "machines/6",
          price1: 5000,
          price2: 4800,
          price3: 4500,
          height: 180,
          duration1: "1. nap",
          duration2: "6. naptól",
          duration3: "21. naptól"
        },
        {
          id: 7,
          name: "Magasnyomású mosó - hidegvizes",
          discription: "Kézi szórópisztoly: meghosszabbított magasnyomású pisztoly Magasnyomású tömlő (m): 15 Szórószár (mm): 550 Háromállású fúvóka Szennymaró Magasnyomású tömlődob FR 30 felülettisztít A hagyományos magasnyomású sugárhoz képest akár 10-szeres felületi teljesítmény is elérhető a készülékkel...",
          icon: require('../assets/machines/moso.jpg'),
          link: "machines/7",
          price1: 8000,
          price2: 7500,
          price3: 7200,
          height: 200,
          duration1: "1. nap",
          duration2: "6. naptól",
          duration3: "21. naptól"
        },
        {
          id: 8,
          name: "Magasnyomású mosó - hidegvizes",
          discription: "Kézi szórópisztoly: meghosszabbított magasnyomású pisztoly Magasnyomású tömlő (m): 15 Szórószár (mm): 550 Háromállású fúvóka Szennymaró Magasnyomású tömlődob FR 30 felülettisztít A hagyományos magasnyomású sugárhoz képest akár 10-szeres felületi teljesítmény is elérhető a készülékkel...",
          icon: require('../assets/machines/mosohd.jpg'),
          link: "machines/8",
          price1: 8000,
          price2: 7500,
          price3: 7200,
          height: 200,
          duration1: "1. nap",
          duration2: "6. naptól",
          duration3: "21. naptól"
        },
        {
          id: 9,
          name: "Fúrókalapács",
          discription: "Elektromos motor: 230V/50Hz Teljesítmény: 1600 W Fordulatszám terhelés nélkül: 560 fordulat/perc Ütés: 3530 ütés/perc Ütés erőssége: 9 J Max. furat átmérő: 40 mm beton, 65 mm fa. Tömeg: 7,3 kg...",
          icon: require('../assets/machines/furokalapacs.jpg'),
          link: "machines/9",
          price1: 3500,
          price2: 3300,
          price3: 3000,
          height: 100,
          duration1: "1. nap",
          duration2: "6. naptól",
          duration3: "21. naptól"
        },
        {
          id: 10,
          name: "Bontókalapács 10 kg-os",
          discription: "Nagy ütőerővel bontási munkákhoz és beton, kőzetek és falazatok áttöréséhez SDS-max tokmány Rögzítőkapcsoló tartós üzemmódhoz Fő fogantyú rázkódáscsillapítással 12 beállítható vésőpozíció Ütközési energia: 50 Joule Ütésszám: kb. 20-2100 ütés/perc Tartozékok: 1 db lapos véső, 1 db hegyes véső hossz: kb. 380 mm...",
          icon: require('../assets/machines/bonto.jpg'),
          link: "machines/10",
          price1: 6500,
          price2: 6200,
          price3: 6000,
          height: 150,
          duration1: "1. nap",
          duration2: "6. naptól",
          duration3: "21. naptól"
        },
        {
          id: 11,
          name: "Bontókalapács 15kg-os",
          discription: "Ajánlott terület: beton, kő Tápellátás típus: hálózat Kábel hossza: 4 m Fúrótokmány típusa: HEX Funkciók: Softgrip lágyfogantyú Teljesítmény: 1700 W Tápfeszültség: 230 V Réz motor Ütésszám: 1400/perc Ütési energia: 60 J Saját súly: 15,6 kg Csomagolással, tartozékokkal együttes súlya: 24 kg...",
          icon: require('../assets/machines/bonto15.jpg'),
          link: "machines/11",
          price1: 8000,
          price2: 7700,
          price3: 7400,
          height: 160,
          duration1: "1. nap",
          duration2: "6. naptól",
          duration3: "21. naptól"
        },
        {
          id: 12,
          name: "Kőműves vasbak",
          discription: "Állítható magasság: 120-225 cm-ig Állószélesség: 100 cm Terhelhetőség: 500 kg/db Súlya: 19 kg Szállítási méretek: 147-148 cm széles, 136 cm magas, 17 cm vastag...",
          icon: require('../assets/machines/komuvesvasbak.png'),
          link: "machines/12",
          price1: 2000,
          price2: 1800,
          price3: 1500,
          height: 160,
          duration1: "1. nap",
          duration2: "6. naptól",
          duration3: "21. naptól"
        },
        {
          id: 13,
          name: "Polisztirolvágó",
          discription: "Hálózati feszültség: 230 V Névleges teljesítményfelvétel: 200 W Max. vágáshossz: 1370 mm Max. vágásszélesség: 330 mm Vonalzó méretek: 1000 mm; 0-90° Védelmi osztály: IP44 Súly: 15,6 kg Méretek: 1700 mm x 430 mm x 170 mm...",
          icon: require('../assets/machines/polisztirol.jpg'),
          link: "machines/13",
          price1: 5500,
          price2: 5100,
          price3: 4800,
          height: 170,
          duration1: "1. nap",
          duration2: "6. naptól",
          duration3: "21. naptól"
        },
        {
          id: 14,
          name: "Padló ventilátor",
          discription: "Hangteljesítményszint LWA = 70 dB (A) Max. légtömegáram: kb. 173 m3 / perc Tápkábel hossza: 1,6 m Tápellátás: 230 V / 50 Hz / 120 W Tömege: 5 kg Méretek (magasság x mélység x szélesség): 58,74 cm x 56,24 cm x 18,84 cm...",
          icon: require('../assets/machines/padloventi.png'),
          link: "machines/14",
          price1: 3000,
          price2: 2800,
          price3: 2500,
          height: 130,
          duration1: "1. nap",
          duration2: "6. naptól",
          duration3: "21. naptól"
        },
        {
          id: 15,
          name: "Áramfejlesztő",
          discription: "Motor térfogat: 420 cm3 Állandó teljesítmény: 4000 W Max. teljesítmény: 4500 W Feszültség: 230 V /= 12 V Zajszint: 96 dB Üzemanyag tank mérete: 28 liter Tömege: 65 kg Teljesítmény SAE J1940 szerint: 10,7 HP * Áram 230V/12V: 17,4/6A 4-ütemű motor (HECHT OHV) Egyfázisú...",
          icon: require('../assets/machines/aramfejleszto.jpg'),
          link: "machines/15",
          price1: 8000,
          price2: 7600,
          price3: 7200,
          height: 170,
          duration1: "1. nap",
          duration2: "6. naptól",
          duration3: "21. naptól"
        },
        {
          id: 16,
          name: "Légzésfigyelő",
          discription: "2 db nagyméretű érzékelőlap További érzékelőlapokkal bővíthető Kettős sziréna 9 fokozatú érzékenység Eseménymemória Működése: 2 db 1,5 V AAA elemmel...",
          icon: require('../assets/machines/legzes.png'),
          link: "machines/16",
          price1: 3500,
          price2: 3000,
          price3: 17000,
          height: 140,
          duration1: "1-5 hónap",
          duration2: "6. hónaptól",
          duration3: "6 hónap egyben"
        },
        {
          id: 17,
          name: "Babamérleg",
          discription: "Mérési határa: 20 kg. Beosztása: 5 gr Nagy LCD kijelző Méretek: 52 cm x 32 cm x 5,6 cm Működése: 4 db 1,5 V AAA elemmel...",
          icon: require('../assets/machines/merleg.png'),
          link: "machines/17",
          price1: 3000,
          price2: 2500,
          price3: 15000,
          height: 130,
          duration1: "1-5 hónap",
          duration2: "6. hónaptól",
          duration3: "6 hónap egyben"
        }
      ]
    }
  }


}

</script>

<style >
#title{
  display: none;
}

@media screen and (max-width: 800px) {
  #tablemid{
    display: none;
  }
  #title{
    display: inline-table;
  }
  #picture{

  }
}

</style>
