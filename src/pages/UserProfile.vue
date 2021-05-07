<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <edit-profile-form>
          </edit-profile-form>
        </div>
        <div class="col-md-4">
          <user-card/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import EditProfileForm from "@/pages/UserProfile/EditProfileForm";
  import UserCard from "@/pages/UserProfile/UserCard";
  export default {
    components: {
      UserCard,
      EditProfileForm
    }
  }

</script>
<style>

</style>
