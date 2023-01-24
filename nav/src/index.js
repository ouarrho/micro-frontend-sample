console.log('navbar :)')

const Nav = `
	<a href="#" style="color: #fff;">Home</a> |
	<a href="#" style="color: #fff;">About</a> |
	<a href="#" style="color: #fff;">Contact</a> |
	<a href="#" style="color: #fff;">Sign In</a> |
	<a href="#" style="color: #fff;">Sign Up</a>
	`;

const $nav = document.querySelector( '#appNav' )

$nav.style.backgroundColor = '#222'
$nav.style.width = '100%'
$nav.style.height = '4rem'

$nav.innerHTML = Nav;