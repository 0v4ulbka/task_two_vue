let eventBus = new Vue()

Vue.component('columns', {
    props:{

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
            <card></card>
        </div>
        <div class="col">
            <h2>Stage 2</h2>
        </div>
        <div class="col">
            <h2>Tasks completed</h2>
        </div>
    </div>
    `,
    data() {
        return {
            col1:[],
            col2:[],
            col3:[],
            errors:[],
            count:[],
        }
    },
    methods:{

    },

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
        },

    }
})

Vue.component('card', {
    props:{
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
        <div class="card">
             <p><b>Title: </b>{{ card.title }}</p>
             <label v-for="task in tasks"
                    v-if="task.text != null">
                    <p :class="{ completed:task.completed }">
                    <input type="checkbox" @click="task.completed" :disabled="task.completed">
                         {{ task.text }}
                    </p>
             </label>
        </div>
    `,
    data() {
        return{

        }
    },
    methods:{

    }
})


let app = new Vue({
    el:'#app',
    data: {

    }

})