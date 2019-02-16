	<template>
    <!-- header -->
    <header class="header">
      <div class="container">
				<Logo />
				<MainNav/>
      </div>
      <div class="mobile-nav"></div>
    </header>
  </template>

  <script>
import Logo from '@/components/navigation/Logo.vue';
import MainNav from '@/components/navigation/MainNav.vue';

  export default {
		name: 'Navigation',
		components: {
			Logo,
			MainNav
		}
	}
  </script>

  <style>
  .header {
	width: 100%;
	height: 150px;
	position: relative;
	z-index: 100;
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
  
  
