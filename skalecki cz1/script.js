var app = new Vue({
  el: `#app`,
  data: {
    entries: []
  },
  methods: {
    addEntry: function() {
      this.entries.push(this.entry);
      this.entry = '';
    }
  },
  computed: {
    filteredEntries: function(){
      var bad = ['bad', 'weak', 'boring'];
      return this.entries.filter(function(entry){
        return bad.indexOf(entry.toLowerCase()) === -1
      });
    }
  },
  filters: {
    shout: function(value) {
      return 'They said "' + value + '"!';
    }
  }
});
