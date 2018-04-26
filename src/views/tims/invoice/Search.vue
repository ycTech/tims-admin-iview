<template>
    <Card>
        <p>
            <Icon type="ios-keypad"></Icon>
            单据查询
        </p>
        <Row style="margin:15px 0;">
            <Input
                v-model="searchParams.keywords"
                style="width: 200px;"
                icon="search"
                @on-change="getList"
            />
            <Button type="primary" @click="getList">查询</Button>
        </Row>
        <Row>
            <Table
                :border="true"
                :columns="columns"
                :data="list">
            </Table>
        </Row>
    </Card>
</template>

<script>
import { InvoiceApi } from '@/api'
import * as table from './data/search'
export default {
  data () {
    return {
      list: [],
      columns: table.columns,
      searchParams: {
        keywords: ''
      }
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      InvoiceApi.getList(this.searchParams).then(resp => {
        this.list = resp.data
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style>

</style>
