<b-navbar-nav>
          <b-nav-item to="/user/login" exact-active-class="active">Login</b-nav-item>
          <b-nav-item to="/user/register" class="button is-primary" exact-active-class="active">Registreren</b-nav-item>
        </b-navbar-nav>


 v-if="!$auth.loggedIn" v-if="$auth.loggedIn"



 <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
























         <!-- Right aligned nav items -->
      <!--b-navbar-nav class="ml-auto"
          v-if="$auth.loggedIn"-->
          <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item tag="router-link" :to="{ path: '/user/my-account' }" exact-active-class="active">Profile</b-dropdown-item>
          <b-dropdown-item tag="router-link" :to="{ path: '/user/logout' }" exact-active-class="active">Log Uit</b-dropdown-item>
          </b-nav-item-dropdown>
        
       
        <template slot="end"
            v-if="!$auth.loggedIn">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <!--b-navbar-item tag="router-link" :to="{ path: '/' }" class="button is-primary" exact-active-class="active">
                        <strong>Registreer</strong>                    
                    </b-navbar-item-->
                    <nuxt-link class="button is-primary" id="router-link" :to="{ path: '/user/register' }">
                        <strong>Registreer</strong>                    
                    </nuxt-link>
                    
                    <nuxt-link class="button is-light" to="/user/login" exact-active-class="active">
                        <strong>Log in</strong>                    
                    </nuxt-link>
                    
                    
                    
                    
                </div>
            </b-navbar-item>
        </template>