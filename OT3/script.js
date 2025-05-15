var app = new Vue({
    el:'#app',
    data:{
        titulo:'Formulário Básico',
        nome: '',
        email:'',   
    },
    methods: {
    enviar() {
      alert('Dados enviados:'+'\nNome:' + this.nome + '\nEmail:' + this.email);
    }
  }
})
