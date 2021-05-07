<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="card-plain">
            <template slot="header">
              <h4 class="card-title">Employee</h4>
              <div class="text-center">
                <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="createProfile">
                  Create Employee
                </button>
              </div>
            </template>
            <div class="table-responsive">
              <table class="table">
                <thead>
                <slot name="columns">
                  <tr>
                    <th v-for="column in fields" :key="column.key">{{column.label}}</th>
                  </tr>
                </slot>
                </thead>
                <tbody>
                <tr v-for="(item, index) in employee" :key="index">
                  <slot :row="item">
                    <td v-for="column in fields" :key="column.key" >
                      <div v-if="column.key != 'action'">
                        {{itemValue(item, column.key, index)}}
                      </div>
                      <div v-else>
                        <b-icon-trash class="cp text-danger mr-2" @click="deleteConfirmation(itemValue(item, 'id', index))"></b-icon-trash>
                        <b-icon-pencil-square class="cp text-primary" @click="editUser(item.id)"></b-icon-pencil-square>
                      </div>
                    </td>
                  </slot>
                </tr>
                <td>

                </td>
                <tr v-if="employee.length === 0" >
                  <td :colspan="fields.length">
                    <span class="no-data">No Data Available</span>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from '@/components/Cards/Card.vue'
export default {
  components: {
    Card
  },
  data () {
    return {
      employee: [],
      fields: [
        { key: 'index', label: 'Index' },
        { key: 'first_name', label: 'First Name' },
        { key: 'last_name', label: 'Last Name' },
        { key: 'email_address', label: 'Email' },
        { key: 'address1', label: 'Address1' },
        { key: 'address2', label: 'Address2' },
        { key: 'city', label: 'City' },
        { key: 'state', label: 'State' },
        { key: 'action', label: 'Action' }
      ]
    }
  },
  methods: {
    itemValue (item, column, index) {
      if (column === 'index') {
        return index + 1
      }
      return item[column.toLowerCase()] ? item[column.toLowerCase()] : '-'
    },
    createProfile () {
      this.$router.push('/employee/add');
    },
    editUser (id) {
      this.$router.push(`/employee/${id}/edit`)
    },
    /**
     * Get Employee Listing
     */
    get() {
      const apiReq = `client/1/employees`
      this.$api
          .get(apiReq)
          .then(res => {
            console.log("log====>", res)
            this.employee = res.data
            this.isLoading = false;
            this.pagination = res.data.data.pagination;
            console.log(res.data.data.data)
          })
          .catch(() => {
            this.isLoading = false;
          });
    },

    /**
     * Delete employee from Database
     * @param id
     */
    deleteRecord(id) {
      this.isLoading = true;
      this.$api
          .delete(`truck/${id}`)
          .then(() => {
            this.isLoading = false;
            this.currentPage = 1;
            this.get(1); // After Delete , get records
          })
          .catch(err => {
            this.isLoading = false;
            console.log(err.response);
          });
    },

    /**
     * Confirm before Delete
     * @param id
     */
    deleteConfirmation(id) {
      this.$bvModal.msgBoxConfirm('Are you sure, you want to delete this record?', {
        title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      })
          .then(value => {
            if(value) {
              // TODO
              this.deleteRecord(id);
            }
          })
          .catch(err => {
            // An error occurred
            console.log(err)
          })
    },

    /**
     * Change Per page Result
     * @param value
     */
    changePerPageResult(value) {
      this.perPage = value;
      this.get(this.currentPage)
    }
    },
  created() {
    this.get();
  }
}
</script>
<style>
</style>
