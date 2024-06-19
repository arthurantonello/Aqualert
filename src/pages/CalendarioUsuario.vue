
<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
    <q-date
    v-model="days"
    title="John Doe"
    subtitle="Birthday"
    range multiple
    readonly/>
  </div>
    <p>São 10  dias seguidos mantendo sua meta de hidratação!</p>
  </q-page>
</template>

<script>
import { ref } from 'vue'

//preencher dada conforme meta batida

export default {
  data () {
    return {
      days: ref([
        { from: '2024/07/01', to: '2024/07/10' },
        { from: '2024/07/21', to: '2024/07/25' }
      ])
    }
  }
}
</script>

<script setup>
defineOptions({
  name: 'IndexPage'
});


</script>


<!--

  Usar esse script caso quiser deixar o usuario escolher a data no submit ou apagar o readonly do script acima para escolher manualmente


<template>
  <div class="q-pa-md">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-date name="wedding" v-model="date" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>
    </q-form>

    <q-card
      v-if="submitResult.length > 0"
      flat bordered
      class="q-mt-md"
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'"
    >
      <q-card-section>Submitted form contains the following formData (key = value):</q-card-section>
      <q-separator />
      <q-card-section class="row q-gutter-sm items-center">
        <div
          v-for="(item, index) in submitResult"
          :key="index"
          class="q-px-sm q-py-xs bg-grey-8 text-white rounded-borders text-center text-no-wrap"
        >{{ item.name }} = {{ item.value }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const submitResult = ref([])

    return {
      date: ref('2020/03/20'),
      submitResult,

      onSubmit (evt) {
        const formData = new FormData(evt.target)
        const data = []

        for (const [ name, value ] of formData.entries()) {
          data.push({
            name,
            value
          })
        }

        submitResult.value = data
      }
    }
  }
}
</script>

-->
