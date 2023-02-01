let eventBus = new Vue()

Vue.component('fill', {
    props: {

    },
    template: `
    <div>
        <form @submit.prevent="onSubmit">
            <p> 
                <b>Title</b>
                <label>
                <input required type="text" v-model="title" placeholder="title">
                </label>
            </p>
            <ul>
                <li>
                    <label>
                    <input required type="text" v-model="t1" placeholder="subtask"> 
                    </label>
                </li>
                
                <li>
                    <label>
                    <input required type="text" v-model="t2" placeholder="subtask">
                    </label>
                </li>
                    
                <li>
                    <label>
                    <input required type="text" v-model="t3" placeholder="subtask">
                    </label>
                </li>
                    
                <li>
                    <label>
                    <input type="text" v-model="t4" placeholder="subtask">
                    </label>
                </li>
                    
                <li >
                    <label>
                    <input type="text" v-model="t5" placeholder="subtask">
                    </label>
                </li>
                
                <p>
                    <input type="submit" value="Add a card">
                </p>
            </ul>
        </form>
                   
    </div>
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
                t: [{title: this.t1, completed: false},
                    {title: this.t2, completed: false},
                    {title: this.t3, completed: false},
                    {title: this.t4, completed: false},
                    {title: this.t5, completed: false}]
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
        <p v-if="errors.length"
        v-for="error in errors">
            {{ error }}
        </p>
        <div class="col">
            <h2>Stage 1</h2>
                <div class="card" 
                v-for="column1 in col1"
                >
                    <p>{{ column1.title }}</p>
                    <label v-for="task in column1.t"
                    v-if="task.title != null">
                        <p>
                            <input type="checkbox" @click="task.completed = true" :disabled="task.completed">
                            {{ task.title }}
                        </p>
                    </label>
                </div>
        </div>
        <div class="col">
        <h2>Stage 2</h2>
        {{ col2 }}</div>
        <div class="col">
        <h2>Task completed</h2>
        {{ col3 }}</div>
    </div>
    `,
    data() {
        return {
            col1:[],
            col2:[],
            col3:[],
            errors:[]
        }
    },
    methods:{

    },

    mounted() {
        eventBus.$on('card-submitted', card => {

            if (this.col1.length < 3){
                this.col1.push(card)
            } else {this.errors.push('You can\'t add more')}
        })
    }
})


let app = new Vue({
    el:'#app',
    data: {

    }

})