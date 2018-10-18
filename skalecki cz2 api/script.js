var app = new Vue({
  el: `#appApi`,
  data() {
    return {
    query: '',
    searching: false,
    people: []
    }
  },
  methods:{
    search: function(query){
      this.searching = true;
      axios.get("https://swapi.co/api/people/", {params: {search: query}})
            .then(function(response){
              app.people = response.data.results.map(x => x.name);
              app.searching = false;
          })
      }
    },
  watch: {
    query: _.debounce(function(value) {
      this.search(value)
    }, 500)
  }
});
