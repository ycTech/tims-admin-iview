<template lang="html">
  <div class="document-management-search">
    <h1>这里是单据查询业务</h1>
    <header>
      <div class="bussiness-type">
        <span style="margin-right: 8px;">请选择业务类型:	</span>
        <Select v-model="model" style="width:200px;">
          <Option v-for="item in items" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <div class="bussiness-date">
        <div class="bussiness-date__item">
          <!-- <span>开始日期：</span> -->
          <DatePicker type="date" placeholder="开始时间" style="width: 200px"></DatePicker>
        </div>
        <div class="bussiness-date__item">
          <!-- <span>结束日期：</span> -->
          <DatePicker type="date" placeholder="结束日期" style="width: 200px"></DatePicker>
        </div>
      </div>
      <div class="action-bar">
        <Button type="primary" @click.stop="search">查询</Button>
        <Button type="primary" @click="reset">重置</Button>
        <Button type="primary" @click="newOne">新增</Button>
      </div>
    </header>
    <Table border ref="selection" :columns="columns" :data="data"></Table>
  </div>
</template>

<script>
export default {
  name: 'documentManagementSearch',
  data () {
      return {
        model: '',
        data: [],
        items: [
          {
            value: '1',
            label: '个险'
          },
          {
            value: '2',
            label: '团险'
          },
          {
            value: '3',
            label: '理赔'
          }
        ],
        columns: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '业务类型',
            key: 'type'
          },
          {
            title: '批次号',
            key: 'no'
          },
          {
            title: '业务编号',
            key: 'bussiness_no'
          },
          {
            title: '版本号',
            key: 'version'
          },
          {
            title: '创建人',
            key: 'creator'
          },
          {
            title: '创建时间',
            key: 'create_time'
          },
          {
            title: '操作',
            key: 'action',
            width: 120,
            render: (h, params) => {
             return h('div', [
               h('Button', {
                 props: {
                   type: 'text',
                   size: 'small'
                 }
               }, 'View'),
               h('Button', {
                 props: {
                   type: 'text',
                   size: 'small'
                 }
               }, 'Edit')
             ])
            }
          }
        ]
      };
  },
  methods: {
    search () {
      this.$Message.info('这里是查询单据')
    },
    reset () {
      this.$Message.info('这里是重置查询数据')
    },
    newOne () {
      this.$Message.info('???')
    }
  }
};
</script>

<style lang="less">
@import "./documentManagement.less";
</style>
