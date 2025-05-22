Vue.component('button-component',{
    props:['text'],
    template:'<button>{{ text }}</button>'
});

new Vue({
    el:'#app'
});