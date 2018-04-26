<template>
  <Card>
      <p>
          <Icon type="ios-keypad"></Icon>
          影像扫描
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
import { MediaApi } from '@/api'
import * as table from './data/ImageScan'
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
      MediaApi.getList(this.searchParams)
        .then(resp => {
          this.list = resp.data
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>

<style>

</style>
