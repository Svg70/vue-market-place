<template>
  <div :class="b()">
    <div :class="b('wrapper')">
      <div :class="b('logo')">
        <img :src="logo"/>
      </div>
      <div :class="b('right-menu')">
        <div :class="b('menu-sign')">
            <div :class="b('menu-sign-line')"></div>
            <div :class="b('menu-sign-line')"></div>
            <div :class="b('menu-sign-line')"></div>
          
        </div>
        <div :class="b('right-menu--upper-row')">

          <div :class="b('right-menu--upper-row-left')">
            <nuxt-link v-if="!isAuth" to="/registration" :class="b('right-menu--upper-row-link')">Sign up</nuxt-link>
            <nuxt-link to="/about-us" :class="b('right-menu--upper-row-link')">About Us</nuxt-link>
            <nuxt-link to ="./" :class="b('right-menu--upper-row-link-lang')">English</nuxt-link>
            <nuxt-link v-if="isAuth" to="/login" :class="b('right-menu--upper-row-link')">Sell</nuxt-link>
            <nuxt-link v-if="isAuth" to="/" :class="b('right-menu--upper-row-link')">Buy</nuxt-link>
          </div>
          <div :class="b('right-menu--upper-row-right')">
            <nuxt-link v-if="isAuth" to="/messages" :class="b('right-menu--upper-row-link')">
              <font-awesome-icon :icon="envelope" />
              {{ messages }}
            </nuxt-link>
            <nuxt-link v-if="isAuth" to="/user-info" :class="b('right-menu--upper-row-link')">
              {{ user }}
            </nuxt-link>
            <nuxt-link v-if="!isAuth" to="/login" :class="b('right-menu--upper-row-link')">Login</nuxt-link>
            <nuxt-link v-if="isAuth" to="/" :class="b('right-menu--upper-row-link')">Log out</nuxt-link>
          </div>
        </div> 
        <div :class="b('right-menu--lower-row')">
          <div :class="b('search')">
            <div :class="b('search-categories')">
              All categories
            </div>
            <input :class="b('search-input')"/>
            <div :class="b('search-button')">
             <font-awesome-icon :icon="search" />
            </div>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons'


export default {
  name: 'app-header',
  data() {
    return {
      logo: logo,
      envelope: faEnvelope,
      search: faSearch,
    }
  },
  props: {
    isAuth: Boolean,
    user: String,
    messages: Number,
  },
  components: {
    FontAwesomeIcon,
  }
}
</script>

<style lang="scss">
@import '../assets/styles/main.scss';

  .app-header{
    height: 140px;
    background-color: $dark-color;
    
    &__wrapper {
      display: flex;
    }

    &__logo {
      img {
        height: 120px;
        margin: 10px 30px 10px 10%;
      }
    }

    &__menu-sign {
      height: 40px;
      width: 40px;
      margin: 20px;
      border: 1px solid #EDF7F5;
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;

      &-line{
        height: 3px;
        width: 25px;
        background-color: $light-color;
      }

      

      @media screen and (min-width: 850px) {
        display: none;
      }
    }

    &__right-menu {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 100%;

      &--upper-row {
        display: flex;
        width: 100%;
        justify-content: space-between;
        height: 40px;
        margin-top: 10px;

        &-link {
          margin-left: 20px;
          margin-right: 20px;
          text-decoration: none;
          color: $light-color;
          font-size: 1.2rem;
          font-weight: 400;

          &-lang {
            margin-left: 20px;
            margin-right: 20px;
            text-decoration: none;
            color: $light-color;
            font-size: 1.2rem;
            font-weight: 400;

            &:after {
              content: "";
              z-index: 1;
              right: 10px;
              position: relative;
              top: 30%;
              margin-left: 15px;
              transform: translateY(-50%);
              border-color: #fff transparent transparent;
              border-style: solid;
              border-width: 4px 4px 0;
            }
          }
        }
        @media screen and (max-width: 850px) {
          display: none;
        }
      }
      
      &--lower-row {
        display: flex;
        justify-content: flex-end;
        height: 40px;
        width:100%;
        margin-top: 20px;

        @media screen and (max-width: 850px) {
          margin-top: 0;
        }
      }
    }

    &__search {
      display: flex;
      align-items: center;
      background-color: $gray-color;
      width: calc(100% - 200px);

      &-categories {
        width: 200px;
        text-align: center;
      }
      
      &-input {
        width: 100%;
        height: 30px;
      }

      &-button {
        width: 40px;
        display: flex;
        justify-content: center;
        cursor: pointer;
      }
    }

  }
</style>