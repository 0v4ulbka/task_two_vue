let eventBus = new Vue()

Vue.component('fill', {
    template: `
    <form @submit.prevent="onSubmit">
        <p> 
            <b>Title</b>
            <label>
            <input type="text" v-model="title" placeholder="title">
            </label>
        </p>
        <p>
            <label>
            <input type="checkbox" >
            <input type="text" v-model="t1" placeholder="subtask"> 
            </label>
        </p>
        
        <p>
            <label>
            <input type="checkbox" >
            <input type="text" v-model="t2" placeholder="subtask">
            </label>
        </p>
            
        <p>
            <label>
            <input type="checkbox"  >
            <input type="text" v-model="t3" placeholder="subtask">
            </label>
        </p>
            
        <p>
            <label>
            <input type="checkbox" >
            <input type="text" v-model="t4" placeholder="subtask">
            </label>
        </p>
            
        <p>
            <label>
            <input type="checkbox" >
            <input type="text" v-model="t5" placeholder="subtask">
            </label>
        </p>
        
        <p>
            <input type="submit" value="Add a card">
        </p>
    </form>
    `,
    data() {
        return{
            title: null,
            t1: null,
            t2: null,
            t3: null,
            t4: null,
            t5: null,
        }
    },
    methods:{
        onSubmit(){
            let card = {
                title: this.title,
                t: [this.t1, this.t2, this.t3, this.t4, this.t5,]
            }
            eventBus.$emit('card-submitted', card)
            this.title = null
            this.t1 = null
            this.t2 = null
            this.t3 = null
            this.t4 = null
            this.t5 = null
            console.log(card)
        }
    }
})

Vue.component('columns', {
    props:{
        card: {
            title: {
                type: Text,
                required: true
            },
            t: {
                type: Array,
                required: true,
            }
        },
    },
    template:`
    <div id="cols">
        <fill></fill>
        <div class="col">
        
        </div>
        <div class="col">{{ col2 }}</div>
        <div class="col">{{ col3 }}</div>
    </div>
    `,
    data() {
        return {
            col1:[0],
            col2:[123],
            col3:[66]
        }
    },
    methods:{

    },
    mounted() {
        eventBus.$on('card-submitted', card => {
            this.col1.push(card)
        })
    }
})


let app = new Vue({
    el:'#app',
    data: {

    }

})