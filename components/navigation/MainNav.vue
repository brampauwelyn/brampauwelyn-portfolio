<template>
  <div class="main-nav float-right">
    <ul class="menu">
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li @mouseover="submenuActive = true" @mouseleave="submenuActive = false">
      <nuxt-link to="" class="parent">Work</nuxt-link>
        <ul class="submenu" :class="{visible: submenuActive}">
          <li :key="index" v-for="(work,index) in this.$root.allWork">
            <nuxt-link :to="work.seoUrl">{{ work.name }}</nuxt-link>
          </li>
        </ul>
      </li>
      <li>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'MainNav',
  data: function(){
    return {
      submenuActive: false,
    }
  }
}
</script>

<style lang="scss">
.header .menu {
	list-style: none;
}

.header .menu li {
	display: inline-block;
	position: relative;
	line-height: 150px;
}

.header .menu li a {
	display: block;
	font-size: 15px;
	font-weight: 500;
	position: relative;
	padding: 0 25px;
	-webkit-transition: all 0.2s ease;
	transition: all 0.2s ease;
}

.header .menu li a:hover,
.header .menu li a.active {
	color: #b3b3b3;
}

.header .menu li a.parent:after {
	display: inline-block;
	vertical-align: middle;
	content: '';
	width: 3px;
	height: 3px;
	border-radius: 50%;
	background: #111111;
	margin-left: 10px;
}

.header .menu li:last-child a {
	padding-right: 0;
}

.header .menu li .submenu {
	min-width: 200px;
	position: absolute;
	top: 100%;
	right: 0;
	text-align: right;
	white-space: nowrap;
	margin-top: 10px;
	padding: 25px 0;
	opacity: 0;
	visibility: hidden;
	background: #ffffff;
	box-shadow: 0 0 25px rgba(17, 17, 17, 0.1);
	-webkit-transition: all 0.3s ease;
	transition: all 0.3s ease;
}

.header .menu li .submenu.visible {
	margin-top: 0;
	display: block;
	opacity: 1;
	visibility: visible;
}

.header .menu li .submenu li {
	display: block;
	line-height: 35px;
}

.header .menu li .submenu li:not(:last-child) {
	margin-right: 0;
}

.header .menu li .submenu li a {
	display: block;
	font-size: 13px;
	font-weight: normal;
}

.header .menu li .submenu li a.active,
.header .menu li .submenu li a:hover {
	color: #b3b3b3;
}

.header .menu li .submenu li:last-child a {
	padding-right: 25px;
}

.header .menu li .submenu li .submenu {
	top: 0;
	right: 100%;
}
</style>

