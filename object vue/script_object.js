
var app = new Vue({
  el: "#app",
  data: {
    style: "font-size: 24px; color: blue",
    message: "Vue.js",
    style2: "font-size: 12px; color: black",
    message2: "to super framework"
  }
});

var appContent = new Vue({
  el: "#appContent",
  data: {
    style: app.style2,
    post: app.message2 + ", " + "holewka"
  }
});

var appSeen = new Vue({
  el: "#appSeen",
  data: {
    seen: app.message == "Vue.js",
    styleSeen: "width:150px; background-color: green; padding:10px;",
    style: appContent.style
  }
});

var appFor = new Vue({
  el: "#appFor",
  data: {
    items: [
      { text: "vue" },
      { text: "is" },
      { text: "awesome" },
      { text: "!!" },
      { text: "really" }
    ]
  }
});

var appModel = new Vue({
  el: "#appModel",
  data: {
    message: 'hello vue!'
  }
});

var appClick = new Vue({
  el: "#appClick",
  data: {
    message: "start",
    number: "0",
    seen: true,
    style: "background-color: yellow;",
    styleClicked: "background-color: white;"
  },
  methods: {
    reverseMessage: function () {
      this.message = appModel.message;
      this.number = parseInt(this.number) + 1;
      if (this.seen == true) this.seen = false;
      else this.seen = true;
    },
    changeColor: function () {
      var s = this.style;
      this.style = this.styleClicked;
      this.styleClicked = s;
    }
  }
});