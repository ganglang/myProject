<template>
  <div class="collection">
    <div class="title">收款项目明细</div>
    <div class="tableWrap">
      <table class="myTable">
        <thead>
          <tr>
          <td class="td">收款项目</td>
          <td>备注项目</td>
          <td>单价</td>
          <td>单位</td>
          <td>数量</td>
          <td>金额</td>
          <td>每年递增</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{item.name}}</td>
          <td><input type="text" :value="item.remark"></td>
          <td><input type="text" :value="item.price" @input="changePrice(item.id)"></td>
          <td>{{item.unit}}</td>
          <td><input type="text" :value="item.num" @input="changeNumber(item.id)"></td>
          <td><input type="text" :value="item.money" disabled></td>
          <td><select>
                <option :value="item.incr">{{item.incr}}</option>
              </select>
            <span class="deleteButton" @click="deleteItem(item.id)">删除</span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <button class="addButton" @click="show=true">添加收款明细项</button>
    <AddForm @submitForm="addItem" v-show="show"></AddForm>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import AddForm from './AddForm'
export default {
  name: 'Collections',
  components: {
    AddForm
  },
  data: function () {
    return {
      name: 'Collections',
      list: [],
      show: false
    }
  },
  created: function () {
    this.inital() // 获取本地接口的初始化的数据
  },
  methods: {
    inital: function () {
      // eslint-disable-next-line no-unused-vars
      let that = this
      that.$store.dispatch('getInitData').then(() => {
        that.list = that.$store.state.initData
      })
    },
    changePrice: function () {
      // eslint-disable-next-line no-undef
      this.$store.commit('priceChange', {id: arguments['0'], price: event.target.value || 0})
      this.list = this.$store.state.initData
    },
    changeNumber: function () {
      this.$store.commit('numberChange', {id: arguments['0'], number: event.target.value || 0})
      this.list = this.$store.state.initData
    },
    deleteItem: function (id) {
      this.$store.commit('itemDelete', {id: id})
      this.list = this.$store.state.initData
    },
    addItem: function (obj) {
      // eslint-disable-next-line no-undef
      this.show = false
      this.$store.commit('itemAdd', obj)
      this.list = this.$store.state.initData
    }
  }
}
</script>
<style scoped>
  .collection{
    background: skyblue;
    text-align: left;
    padding: 10px 10px 16px 16px;
  }
  .title{
    font-size: 16px;
    color: blue;
  }
  .tableWrap{
    padding-right: 100px;
  }
  .myTable{
    width: 100%;
    background: #ffffff;
    margin: 0;
    border-spacing: 0px;
  }
  .myTable tr td{
    text-align: center;
    padding:4px 0px;
    min-width: 100px;
  }
  .myTable tr td:nth-of-type(1){
    width:20%;
    text-align: left;
    padding-left: 16px;}
  .myTable thead tr td:nth-of-type(1){
    text-align: center;
  }
  .myTable tr td:nth-of-type(2){
    width:15%;}
  .myTable tr td:nth-of-type(3){
    width:15%;}
  .myTable tr td:nth-of-type(4){
    width:10%;}
  .myTable tr td:nth-of-type(5){
    width:15%;}
  .myTable tr td:nth-of-type(6){
    width:15%;}
  .myTable tr td:nth-of-type(7){
    width:10%;
    position: relative;}
  .myTable tr td input{
    font-size:14px;
    line-height:32px;
    height: 32px;
    border-radius:4px;
    border-left: 4px solid red;
    max-width:100px;
    padding-left: 4px;
    box-sizing: border-box;
    text-align: right;
    padding-right: 8px;
  }
  .myTable tr td input:disabled{
    background: #ffffff;
  }
  .myTable tr td select{
    width:100%;
    max-width: 80px;
    line-height: 32px;
    height: 32px;
  }
  .myTable thead{
    background: dodgerblue;
  }
  .myTable tbody tr td{
    border-right: 1px solid gainsboro;
    border-bottom: 1px solid gainsboro;
  }
  .deleteButton{
    display: inline-block;
    width:32px;
    position: absolute;
    right:-40px;
    text-align: center;
    font-size: 14px;
    line-height: 32px;
    color: #ffffff;
    cursor: pointer;
  }
  .addButton{
    font-size: 14px;
    line-height: 32px;
    color: dodgerblue;
    background: #ffffff;
    border:1px solid gray;
    border-radius: 4px;
    margin-top: 6px;
  }

</style>
