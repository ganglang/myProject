<template>
  <div class="form-wrap">
    <form action="#" @submit="submitForm" id="myform">
      <div class="form-group">
        <label for="name">收款项目</label><input type="text" id="name" name="name">
      </div>
      <div class="form-group">
        <label for="remark">备注项目</label><input type="text" id="remark" name="remark">
      </div>
      <div class="form-group">
        <label for="price">单价</label><input type="text" name="price" id="price">
      </div>
      <div class="form-group">
        <label for="unit">单位</label><input type="text" name="unit" id="unit">
      </div>
      <div class="form-group">
        <label for="num">数量</label><input type="text" name="num" id="num">
      </div>
      <div class="form-group">
        <label for="incr">每年递增</label><input type="text" name="incr" id="incr">
      </div>
      <div class="form-group">
        <label for="incrunit">递增单位</label><input type="text" name="incr" id="incrunit">
      </div>
      <span class="notice">*收款项目、单价及数量不能为空</span>
      <button type="submit" class="comfirmButton">确定</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddForm',
  data: function () {
    return {

    }
  },
  methods: {
    submitForm: function (event) {
      event.preventDefault()
      // eslint-disable-next-line no-unused-vars
      var id = new Date().toString()
      var name = document.getElementById('name').value
      // eslint-disable-next-line no-unused-vars
      var unit = document.getElementById('unit').value || '元/月.平方'
      var price = document.getElementById('price').value || 0
      // eslint-disable-next-line no-unused-vars
      var incr = document.getElementById('incr').value || 0
      // eslint-disable-next-line no-unused-vars
      var remark = document.getElementById('remark').value
      var num = document.getElementById('num').value || 0
      // eslint-disable-next-line no-unused-vars
      var money = price * num
      // eslint-disable-next-line no-unused-vars
      var incrunit = document.getElementById('incrunit').value
      if (name !== '') { this.$emit('submitForm', {id, name, unit, price, incr, incrunit, remark, money, num}) }
      document.getElementById('myform').reset()
    }
  }
}
</script>

<style scoped>
  .form-wrap{
    position:fixed;
    top: 0px;
    bottom: 0px;
    left:0;
    right: 0;
    background: rgba(0,0,0,0.45);
  }
  .form-wrap form{
    background: #ffffff;
    z-index: 99;
    width:60%;
    min-width: 400px;
    position: absolute;
    left: 50%;
    top:50%;
    transform:  translateX(-50%)  translateY(-50%);
    padding: 20px 16px;
  }
  .form-wrap form .form-group{
    margin-bottom: 6px;
  }
  .form-wrap form .form-group label{
    display: inline-block;
    width: 82px;
    text-align: right;
    padding-right: 8px;
  }
  .form-wrap form .form-group input{
    font-size: 14px;
    line-height: 24px;
    height: 24px;
    padding-left: 4px;
  }
  #name,#num,#price{
    border-left: 3px solid red;
  }
  .notice{
    display: block;
    font-size: 12px;
    line-height: 20px;
    color: red;
  }
  .comfirmButton{
    margin-left: 102px;
    margin-top: 10px;
  }
</style>
