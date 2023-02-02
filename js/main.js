let eventBus = new Vue()

Vue.component('columns', {
    props:{

    },
    template:`
    <div id="cols">
        <fill></fill>
<!--        <p v-if="errors.length"-->
<!--        v-for="error in errors">-->
<!--            {{ error }}-->
<!--        </p>-->
        <col1 class="col" :column1="column1"></col1>
        <col2 class="col" :column2="column2">
            <h2>Stage 2</h2>
        </col2>
        <col3 class="col" :column3="column3">
            <h2>Tasks completed</h2>
        </col3>
    </div>
    `,
    data() {
        return {
            errors:[],
            column1:[],
            column2:[],
            column3:[],
        }
    },
    methods:{

    },
    mounted(){
        eventBus.$on('card-submitted', card =>{
            this.column1.push(card)
            console.log(this.column1)
        })
    }

})

Vue.component('fill', {
    props: {

    },
    template: `
    <div>
        <form @submit.prevent="onSubmit">
            <p> 
                <b>Title</b>
                <input required type="text" v-model="title" placeholder="title">
            </p>
            <ul>
                <li>
                    <input required type="text" v-model="t1" placeholder="task"> 
                </li>
                <li>
                    <input required type="text" v-model="t2" placeholder="task">
                </li>
                <li>
                    <input required type="text" v-model="t3" placeholder="task">
                </li>
                <li>
                    <input type="text" v-model="t4" placeholder="task">
                </li>
                <li >
                    <input type="text" v-model="t5" placeholder="task">
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
                tasks: [{text: this.t1, completed: false},
                    {text: this.t2, completed: false},
                    {text: this.t3, completed: false},
                    {text: this.t4, completed: false},
                    {text: this.t5, completed: false}]
            }
            eventBus.$emit('card-submitted', card)
            this.title = null
            this.t1 = null
            this.t2 = null
            this.t3 = null
            this.t4 = null
            this.t5 = null
            console.log(card)
        },

    }
})

Vue.component('col1', {
    props:{
        column1:{
            type: Array,
            required: true
        },
        card: {
            title: {
                type: Text,
                required: true
            },
            tasks: {
                type: Array,
                required: true,
            }
        },
    },
    template:`
        <div>
            <h2>Stage 1</h2>
            <div v-for="card in column1">
                <p ><b>Title: </b>{{ card.title }}</p>
                <label v-for="task in card.tasks"
                    v-if="task.text != null">
                    <p :class="{ completed:task.completed }">
                        <input type="checkbox" @click="task.completed = true" :disabled="task.completed">
                             {{ task.text }}
                    </p>
                 </label>
            </div>
        </div>
    `,
    methods:{

    }
})

Vue.component('col2', {
    props:{

    },
    template:`
    
    `,
})

Vue.component('col3', {
    props:{

    },
    template:`
    
    `,
})

let app = new Vue({
    el:'#app',
    data: {

    }

})