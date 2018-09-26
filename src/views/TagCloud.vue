<template>
  <div>
    <tagCloud :data=cc />
  </div>
</template>
<script>
import tagCloud from 'v-tag-cloud'
export default {
  components: {
        tagCloud
    },
    data () {
      cc:['1212','131']
    }
}
</script>

