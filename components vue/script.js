Vue.component("todo-item", {
  props: ['todo'],
  template: `<li>{{todo.text}}, cena: {{todo.price}}</li>`
});

Vue.component("button-counter", {
  data: function (){
    return {
      count: 0
    }
  },
  template: `<button v-on:click="count++">You clicked me {{count}} times.</button>`
});

Vue.component("button-chnage-list", {
  methods: {
    change: function () {
      var text = app.groceryList[0].text;
      if (text == "Vegetables") app.groceryList[0].text = "Fruits";
      else app.groceryList[0].text = "Vegetables";
    }
  },
  template: `<button v-on:click="change">change list</button>`
});

Vue.component("title-article", {
  props: ["post"],
  data: function() {
    return {
      title: "Blog"
    };
  },
  template: `<h2>{{title}} {{post}}</h2>`
});

var app = new Vue({
  el: `#app`,
  data: {
    groceryList: [
      {id: 0, text: `Vegetables`, price: 12},
      {id: 1, text: `Cheese`, price: 21},
      {id: 2, text: `Another food`, price: ""}
    ],
    post: "Zakupy"
  }
});