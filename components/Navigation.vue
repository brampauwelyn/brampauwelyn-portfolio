	<template>
    <!-- header -->
    <header class="header">
      <div class="container">
        <nuxt-link to="/" class="main-logo">
					<img src="/images/logo.svg" width="60" alt="">
				</nuxt-link>
        <div class="main-nav float-right">
          <ul class="menu">
            <li>
							<nuxt-link to="/">Home</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/about">About</nuxt-link>
						</li>
            <li>
							<nuxt-link to="/work" class="parent">Work</nuxt-link>
							<ul class="submenu visible">
								<li :key="index" v-for="(work,index) in allWork">
									<nuxt-link to="`work/${work.name}`">{{ work.name }}</nuxt-link>
								</li>
							</ul>
						</li>
            <li><nuxt-link to="/contact">Contact</nuxt-link></li>
          </ul>
        </div>
      </div>

      <div class="mobile-nav"></div>
    </header>
  </template>

  <script>
  export default {
		name: 'Navigation'
	}
  </script>

  <style>
  .header {
	width: 100%;
	height: 150px;
	position: relative;
	z-index: 100;
}

.header .main-logo {
	display: inline-block;
	text-transform: uppercase;
	font-family: 'Ubuntu';
	font-size: 22px;
	font-weight: 700;
	color: #111111;
	line-height: 40px;
	letter-spacing: 10px;
	margin-top: 55px;
}

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

.header .trigger__subnav {
	width: 8px;
	height: 20px;
	position: relative;
	cursor: pointer;
	margin-top: 65px;
}

.header .trigger__subnav span {
	width: 4px;
	height: 4px;
	border-radius: 50%;
	background: #111111;
	position: absolute;
	-webkit-transition: all 0.3s ease;
	transition: all 0.3s ease;
}

.header .trigger__subnav span:nth-child(1) {
	top: 0;
}

.header .trigger__subnav span:nth-child(2) {
	top: 50%;
	margin-top: -2px;
}

.header .trigger__subnav span:nth-child(3) {
	bottom: 0;
}

.header .trigger__subnav:hover span {
	background: #ff9999;
}

.header .mobile-nav {
	width: 100%;
	position: absolute;
	top: 100%;
	left: 0;
	background: #111111;
	margin-top: 15px;
	opacity: 0;
	visibility: hidden;
	-webkit-transition: all 0.3s ease;
	transition: all 0.3s ease;
}

.header .mobile-nav.visible {
	margin-top: 0;
	opacity: 1;
	visibility: visible;
}

.header .mobile-nav .menu li {
	display: block;
	position: relative;
	line-height: normal;
}

.header .mobile-nav .menu li:not(:last-child) {
	margin: 0;
	border-bottom: 0 !important;
}

.header .mobile-nav .menu li a {
	display: block;
	font-size: 12px;
	font-weight: 500;
	padding: 15px 5vw;
}

.header .mobile-nav .menu li a.parent::before {
	content: '';
	width: 0;
	height: 0;
	border-top: 4px solid #ffffff;
	border-right: 4px solid transparent;
	border-left: 4px solid transparent;
	position: absolute;
	top: 50%;
	right: 5vw;
	margin-top: -2px;
}

.header .mobile-nav .menu li a {
	color: #ffffff;
}

.header .mobile-nav .menu li .submenu {
	width: 100%;
	position: relative;
	top: 0;
	text-align: left;
	margin-top: 0;
	opacity: 1;
	visibility: visible;
	padding: 0;
	-webkit-transition: none;
	transition: none;
}

.header .mobile-nav .menu li .submenu li a {
	font-size: 12px;
	color: #b3b3b3;
	padding: 0 10vw;
	background: #1e1e1e !important;
}

.header .mobile-nav .menu li .submenu li a.active {
	color: #ffffff;
}

.header .mobile-nav .menu li .submenu .submenu {
	position: relative;
	top: 0;
	right: 0;
}

.header .mobile-nav .menu li .submenu .submenu li a {
	color: #b3b3b3;
	padding: 15px 15vw;
}

.header .trigger {
	width: 22px;
	height: 18px;
	position: relative;
	margin-top: 66px;
	cursor: pointer;
}

.header .trigger .icon-bar {
	width: 100%;
	height: 2px;
	position: absolute;
	left: 0;
	background: #111111;
	-webkit-transition: all 0.3s ease;
	transition: all 0.3s ease;
}

.header .trigger .icon-bar.top {
	top: 0;
}

.header .trigger .icon-bar.middle {
	top: 50%;
	margin-top: -1px;
}

.header .trigger .icon-bar.bottom {
	bottom: 0;
}

.header .trigger.active .icon-bar.top {
	top: 50%;
	margin-top: -1px;
	-webkit-transform: rotate(-45deg);
	transform: rotate(-45deg);
}

.header .trigger.active .icon-bar.middle {
	width: 0;
}

.header .trigger.active .icon-bar.bottom {
	bottom: 50%;
	margin-bottom: -1px;
	-webkit-transform: rotate(45deg);
	transform: rotate(45deg);
}
  </style>
  
  
