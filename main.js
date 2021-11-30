const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id){
            if (id === "remove"){
                this.cart.pop()
            }else{
                this.cart.push(id)
            }
        }
    }
})