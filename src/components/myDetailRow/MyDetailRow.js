export default {
  template: require('./myDetailRow.template.html'),
  props: {
    rowData: {
      type: Object,
      required: true
    }
  },
  methods: {
    onClick: function(event) {
      console.log('my-detail-row: on-click', event.target)
    }
  },
}