var app = new Vue({
    el:'#app',
    data:{
        message:'Hello Vue.JS',
    },
    methods:{
        changeMessage(){
            this.message = 'Message Updated!';
        },
        destroyComponent(){
            this.$destroy();
        }
    },
    beforeCreate(){
        console.log('beforeCreate: Dados ainda não estão disponiveis');
    },
    created(){
        console.log('created: Dados já foram inicializados');
    },
    beforeMount(){
        console.log('beforeMount: Componente prestes a ser montado no DOM');
    },
    mounted(){
        console.log('mounted: Componente montado no DOM');
    },
    beforeUpdate(){
        console.log('beforeUpdate: Dados foram alterados, prestes a atualizar o DOM');
    },
    updated(){
        console.log('updated: DOM foi atualizado');
    },
    beforeDestroy(){
        console.log('beforeDestroy: Componente prestes a ser destruído');
    },
    destroyed(){
        console.log('destroyed: Componente foi destruído');
    }
})