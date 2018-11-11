const formatMoney = (value) => {
    if (value) {
      value = Number(value);
      return '￥ ' + value.toFixed(2);
    }
}

const formatDate = (val)  => {
    var value=new Date(val);
    var year=value.getFullYear();
    var month=value.getMonth()+1;
    var day=value.getDate();
    var hour=value.getHours();
    var minutes=value.getMinutes();
    var seconds=value.getSeconds();
    return year+'-'+month+'-'+day+' '+hour+':'+minutes+':'+seconds;
}

export default {
    formatMoney,
    formatDate
}