var app = new Vue({
    el:'#app',
    data:{
        message:'Hello Vue.Js!'
    },
    computed:{
        reversedMessage(){
            return this.message.split('').reverse().join('');
        }
    }
});

var app1 = new Vue({
    el:'#app1',
    data:{
        message:'',
            status:'Esperando...'
    },
    watch:{
        message(newValue, oldValue){
            this.status = `Mensagem mudou de '${oldValue}' para '${newValue}'`;
        }
    }
});

var app2 = new Vue({
    el:'#app2',
    data:{
        firstName:'Caio',
        lastName:'Giovani',
        apiResponse:''
    },
    computed:{
        fullName(){
            return `${this.firstName} ${this.lastName}`;
        }
    },
    watch:{
        fullName(newName){
            this.fakeApiCall(newName);
        }
    },
    methods:{
        fakeApiCall(name){
            this.apiResponse = `API chamada com nome: ${name}`;
        }
    }
});