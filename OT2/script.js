var app = new Vue({
    el:'#app',
    data:{
        url:'https://vuejs.org'
    }
})

var app2 = new Vue({
    el:'#app2',
    data:{
        message:''
    }
})

var app3 = new Vue({
    el:'#app3',
    data:{
        seen:true
    }
})

var app4 = new Vue({
    el:'#app4',
    data:{
        usuario:{
            id:1,
            nome:'Caio',
            email:'caio@caio.com',
            profissao:'Programador'
        }
    }
})

var app5 = new Vue({
     el:'#app5',
     data:{
        items:[
            {id:1, text: 'Item 1'},
            {id:2, text: 'Item 2'},
            {id:3, text: 'Item 3'}
            ]
         }
})

var app6 = new Vue({
     el:'#app6',
     data:{
        titulo:'Aprendendo Vue JS',
        linguagens:[
            {nome: 'HTML', status: true},
            {nome: 'CSS', status: true},
            {nome: 'JavaScript', status: false},
            {nome: 'PHP', status: false},
            {nome: 'Python', status: false},
        ]
    }
})