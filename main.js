Vue.component('task-list', {

template: `
  <div>

    <task v-for task in tasks>{{task.task}}</task>

  </div>

  `,

data() {

return {
  tasks: [

    { taks: 'got to store', complete: true},

    { taks: 'got to store', complete: false},

    { taks: 'got to store', complete: true},

    { taks: 'got to store', complete: false}

    ]
  };

}

});

Vue.component('task', {

  template: '<li><slot></slot></li>'

});





new Vue({
  el: '#root'
});
