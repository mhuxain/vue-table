export default {
  template: [
    '<div>',
      '<button class="ui red button" @click="onClick(\'view-item\', rowData)"><i class="zoom icon"></i></button>',
      '<button class="ui blue button" @click="onClick(\'edit-item\', rowData)"><i class="edit icon"></i></button>',
      '<button class="ui green button" @click="onClick(\'delete-item\', rowData)"><i class="delete icon"></i></button>',
    '</div>'
  ].join(''),
  props: {
    rowData: {
      type: Object,
      required: true
    }
  },
  methods: {
    onClick: function(action, data) {
      var person = prompt("Please enter your name", "Harry Potter");
      data.name = person;
      var email = prompt("New email", data.email);
      data.email = email;
      console.log('actions: on-click', data.name)
      
    },
  }
}