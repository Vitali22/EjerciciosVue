var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      contador:0,
    },
    computed: {
      invertido(){
        return this.message.split('').reverse().join('');
      },
      color(){
        return{
          'bg-success': this.contador <= 33,
          'bg-warning': this.contador > 33 && this.contador < 66,
          'bg-danger': this.contador >= 66,
        }
      }
    },
  })
   