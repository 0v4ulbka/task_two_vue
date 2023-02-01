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
            <input type="checkbox" v-model="ch1">
            <input type="text" v-model="t1" placeholder="subtask"> 
            </label>
        </p>
        
        <p>
            <label>
            <input type="checkbox" v-model="ch2" >
            <input type="text" v-model="t2" placeholder="subtask">
            </label>
        </p>
            
        <p>
            <label>
            <input type="checkbox" v-model="ch3" >
            <input type="text" v-model="t3" placeholder="subtask">
            </label>
        </p>
            
        <p>
            <label>
            <input type="checkbox" v-model="ch4" >
            <input type="text" v-model="t4" placeholder="subtask">
            </label>
        </p>
            
        <p>
            <label>
            <input type="checkbox" v-model="ch5" >
            <input type="text" v-model="t5" placeholder="subtask">
            </label>
        </p>
        
        <p>
            <input type="submit" value="Add a card">
        </p>
        <columns></columns>
    </form>
    `,
    data() {
        return{
            title: null,
            ch1: null,
            ch2: null,
            ch3: null,
            ch4: null,
            ch5: null,
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
                t1: this.t1,
                t2: this.t2,
                t3: this.t3,
                t4: this.t4,
                t5: this.t5,
            }
            this.$emit('card-submitted', card)
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
        card:{
            type: Object
        }
    },
    templates:`
        <div>
            <ul>
                <li v-for="col in col1">{{ col }}</li> 
            </ul>
        </div>
    `,
    data() {
        return {
            col1:[],
            col2:[],
            col3:[]
        }
    },
    methods:{
        arr(){
            this.col1.push(card)
        }
    }
})


let app = new Vue({
    el:'#app',
    data: {

    }

})