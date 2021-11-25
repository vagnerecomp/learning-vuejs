const MyNameApp = {
    // A propriedade data retorna dados para o frontend da aplicação
    data(){
        return{
            name: "Enéas",
            age: 27,
            input_name: ""
        }        
    },
    methods:{
        submitForm(e){
            e.preventDefault();
            alert("chaama");
            this.name  = this.input_name;
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");