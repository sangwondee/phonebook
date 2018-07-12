<template>
    <div class="modal" :class='openmodal'>
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal Title</p>
          <button class="delete" aria-label="close" @click='close'></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label>Name : </label>
            <div class="control">
              <input class="input" type="text" placeholder="Name" :class="{'is-danger' : errors.name}" v-model="list.name">
            </div>
            <small v-if="errors.name" class="has-text-danger">{{errors.name[0]}}</small>
          </div>
          <div class="field">
            <label>Phone : </label>
            <div class="control">
              <input class="input" type="number" :class="{'is-danger': errors.phone}" placeholder="Phone" v-model="list.phone">
            </div>
            <small v-if="errors.phone" class="has-text-danger">{{errors.phone[0]}}</small>
          </div>
          <div class="field">
            <label>Email : </label>
            <div class="control">
              <input class="input" type="email" placeholder="E-mail"  :class="{'is-danger' : errors.email}" v-model="list.email">
            </div>
            <small v-if="errors.email" class="has-text-danger">{{errors.email[0]}}</small>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click='save'>Save changes</button>
          <button class="button" @click='close'>Cancel</button>
        </footer>
      </div>
    </div>
</template>

<script>
    export default {
        props:['openmodal'],
        data() {
          return {
            list:{
              name: '',
              phone: '',
              email: ''
            },
            errors:{}
          }
        },
        methods: {
            close(){
                this.$emit('closeRequest')
            },
            save(){
              axios.post('/phonebook',this.$data.list).then((response)=> this.close())
              .catch((error) => this.errors = error.response.data.errors)
            }

        }
    }
</script>