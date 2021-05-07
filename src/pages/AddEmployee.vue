<template>
  <card>
    <h4 slot="header" class="card-title">Add/Edit Profile</h4>
    <form>
      <div class="row">
        <div class="col-md-6">
          <base-input type="text"
                    label="Address1"
                    placeholder="Addres1"
                    v-model="employee.address1">
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input type="text"
                    label="Address2"
                    placeholder="Addres2"
                    v-model="employee.address2">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <base-input type="text"
                      label="City"
                      placeholder="City"
                      v-model="employee.city">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="text"
                    label="Client Id"
                    placeholder="Client Id"
                    v-model="employee.client_id">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="text"
                    label="Country Id"
                    placeholder="Country Id"
                    v-model="employee.country_id">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <base-input type="email"
                    label="Email Address"
                    placeholder="Email Address"
                    v-model="employee.email_address">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="text"
                      label="First name"
                      placeholder="First name"
                      v-model="employee.first_name">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="text"
                      label="Last Name"
                      placeholder="Last Name"
                      v-model="employee.last_name">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <base-input type="text"
                    label="Province"
                    placeholder="Province"
                    v-model="employee.province">
          </base-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <base-input type="text"
                      label="Role Id"
                      placeholder="Role Id"
                      v-model="employee.role_id">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="text"
                      label="State Id"
                      placeholder="State Id"
                      v-model="employee.state_id">
          </base-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <base-input type="text"
                      label="Title"
                      placeholder="Title"
                      v-model="employee.title">
          </base-input>
        </div>
      </div>

      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-right col-sm-1" @click.prevent="updateProfile">
          Add
        </button>
        <button type="submit" class="btn btn-default btn-fill float-right col-sm-1" @click.prevent="back">
          Back
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>
<script>
  import Card from '@/components/Cards/Card'

  export default {
    components: {
      Card
    },
    data () {
      return {
        employee: {
          address1: '',
          address2: '',
          city: '',
          client_id: '3',
          country_id: '',
          email_address: '',
          first_name: '',
          last_name: '',
          province: '',
          role_id: '4',
          state_id: '',
          title: ''
        }
      }
    },
    created() {
      this.getEmployeeDetail(this.$route.params.id)
    },
    methods: {
      updateProfile () {
        const apiReq = `client/1/employee`
        console.log(this.employee);
        this.$api
                .post(apiReq, JSON.stringify(this.employee))
                .then(res => {
                  console.log("log====>", res)
                  //this.$router.push('/employee');
                })
                .catch(() => {
                  this.isLoading = false;
                });
      },

      getEmployeeDetail(id) {
        const apiReq = `client/1/employee/${id}`
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

      back() {
        this.reset()
        this.$router.push('/employee');
      },

      reset() {
        this.employee = {
          address1: '',
          address2: '',
          city: '',
          client_id: '3',
          country_id: '',
          email_address: '',
          first_name: '',
          last_name: '',
          province: '',
          role_id: '4',
          state_id: '',
          title: ''
        }
      }
    }
  }

</script>
<style>

</style>
