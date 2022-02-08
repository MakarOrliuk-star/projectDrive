<template>

  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Installed CLI Plugins</h3>

    <label>First name: {{text}}</label>
    <input
        v-model="text"
        type="text"
        name="first_name"
    /><br />
    <div>

    </div>
    <button
        v-on:click="add"
        type="button"
        value="Button"
    />

    <div
        v-for="t in texts"
        :key="t.name"
        @click="sel = t"
    >
      <dt>
        {{t.name}}
      </dt>

      <button
          v-on:click="deleteText(t)"
          type="button"
          value="Button"
      />
      <div v-if="sel">
        <p>Выбранный элемент</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      text:'default',
      texts:[],
      sel:null
    }
  },

  methods: {
    add() {
      const newText = {
        name:this.text
      }
      this.texts.push(newText)
    },

    deleteText(tex){
      this.texts = this.texts.filter(t => t !== tex)
    }
  },

  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
