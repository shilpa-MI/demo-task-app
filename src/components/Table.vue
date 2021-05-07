<template>
  <div>
    <table class="table">
      <thead>
      <slot name="columns">
        <tr>
          <th v-for="column in columns" :key="column.key">{{column.label}}</th>
        </tr>
      </slot>
      </thead>
      <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <slot :row="item">
          <td v-for="column in columns" :key="column.key" >{{itemValue(item, column.key, index)}}</td>
        </slot>
      </tr>
      <tr v-if="data.length === 0" >
        <td :colspan="columns.length">
          <span class="no-data">No Data Available</span>
        </td>
      </tr>
      </tbody>
    </table>

  </div>
</template>
<script>
  export default {
    name: 'l-table',
    props: {
      columns: Array,
      data: Array
    },
    methods: {
      hasValue (item, column) {
        return item[column.toLowerCase()] !== 'undefined'
      },
      itemValue (item, column, index) {
        if (column === 'index') {
          return index + 1
        }
        return item[column.toLowerCase()] ? item[column.toLowerCase()] : '-'
      }
    }
  }
</script>
<style>
</style>
