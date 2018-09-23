<template>
  <div>
    <p>
      filters使用："2018-09-23T16:47:49.760Z" -> {{ timeDate | formatDate }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'filters',
  data () {
    return {
     timeDate:new Date(),
      time: '1537721086'
    }
  },
  filters:{
    formatDate:function (val) {
      var value=new Date(val);
      var year=value.getFullYear();
      var month=value.getMonth()+1;
      var day=value.getDate();
      var hour=value.getHours();
      var minutes=value.getMinutes();
      var seconds=value.getSeconds();
      return year+'-'+month+'-'+day+' '+hour+':'+minutes+':'+seconds;
    },
    
    },
}
</script>

