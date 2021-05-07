<template>
  <div>
    <!-- Navbar (Header) Starts -->
    <nav class="header-navbar navbar navbar-expand-lg navbar-light bg-faded">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle d-lg-none float-left" data-toggle="collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="navbar-container">
          <div class="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul class="navbar-nav">
              <li class="nav-item" >
                <a class="nav-link position-relative" id="dropdownBasic3" >
                  <i class="ft-user font-medium-3 blue-grey darken-4"></i>
                  <p class="d-none">User Settings</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <!-- Navbar (Header) Ends -->

  </div>
</template>
<script>
export  default  {
  name: 'Navbar'
}
</script>
