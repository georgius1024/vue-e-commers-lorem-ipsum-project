<template>
  <v-container>
    <h1 class="display-4">Contacts</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad blanditiis nobis autem rem quidem, unde iste vitae
      ipsam quae? Ad facere recusandae sequi obcaecati a atque minus temporibus ab tempore.
    </p>
    <h2 class="display-1 mt-5">Our team</h2>
    <v-list two-line>
      <v-list-item v-for="i in 4" :key="i">
        <v-list-item-avatar>
          <v-img src="../assets/userpic.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Contact-name, Contact-position</v-list-item-title>
          <v-list-item-subtitle
            ><a href="#">Contact-phone</a>, <a href="#">Contact-skype</a>, <a href="#">Contact-link</a></v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <h2 class="display-1 mt-5">Our location</h2>
    <div id="wrapper-9cd199b9cc5410cd3b1ad21cab2e54d3">
      <div id="map-9cd199b9cc5410cd3b1ad21cab2e54d3"></div>
      <a href="https://embedgooglemap.1map.com/ru?embed_id=193147">1 Map</a>
    </div>
    <h2 class="display-1 mt-5">Social media</h2>
    <v-row>
      <v-col>
        <v-chip color="primary">
          <v-avatar left>
            <v-icon>mdi-facebook</v-icon>
          </v-avatar>
          Facebook
        </v-chip>
      </v-col>
      <v-col>
        <v-chip color="primary">
          <v-avatar left>
            <v-icon>mdi-linkedin</v-icon>
          </v-avatar>
          Linkedin
        </v-chip>
      </v-col>
      <v-col>
        <v-chip color="primary">
          <v-avatar left>
            <v-icon>mdi-github</v-icon>
          </v-avatar>
          Github
        </v-chip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Contacts',
  mounted() {
    const setting = {
      height: 538,
      width: 803,
      zoom: 16,
      queryString: 'проспект Мира, 23, Москва, Россия',
      place_id: 'ChIJX684T3JKtUYRm3hemtOTX1I',
      satellite: false,
      centerCoord: [55.77913947334887, 37.632426050000014],
      cid: '0x525f93d39a5e789b',
      lang: 'ru',
      cityUrl: '/russia/moscow',
      cityAnchorText: 'Карта [CITY1], Central Federal District, Россия',
      id: 'map-9cd199b9cc5410cd3b1ad21cab2e54d3',
      embed_id: '193147'
    }
    const d = document
    const s = d.createElement('script')
    s.src = 'https://embedgooglemap.1map.com/js/script-for-user.js?embed_id=193147'
    s.async = true
    s.onload = function() {
      window.OneMap.initMap(setting)
    }
    var to = d.getElementsByTagName('script')[0]
    to.parentNode.insertBefore(s, to)
  }
}
</script>

<style></style>
