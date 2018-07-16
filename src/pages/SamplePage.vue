<script>
	import { mapGetters } from "vuex";
	import MainHeader from "@/components/Header.vue";
	import RegisterForm from "@/components/auth/RegisterForm.vue";
	import LoginForm from "@/components/auth/LoginForm.vue";

	export default {
		name: 'SamplePage',
		data() {
			return {
				form : 'register'
			}
		},
		components: {
			MainHeader,
			RegisterForm,
			LoginForm
		},
		computed: {

		},
		methods: {
			changeForm(name) {
				this.form = name
			}
		},
		created() {
			
		}
	}
</script>

<template>
	<section>
		<main-header />
		<div class="jumbotron">
			<div class="container">
				<h1 class="display-5">Hello from Sample Page</h1>
				<p>
					<button class="btn btn-outline-dark" @click="$router.go(-1)">Go Back!</button>
					<button class="btn btn-outline-dark" @click="$router.push({ name: 'home'})">Go To Home</button>
				</p>
			</div>
		</div>
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-7" v-if="form == 'register'">
					<h2>Register Form</h2>
					<hr/>
					<register-form></register-form>
					<hr/>
					<button @click="changeForm('login')" class="btn btn-link">Go to login form</button>
				</div>
				<div class="col-7" v-if="form == 'login'">
					<h2>Login Form</h2>
					<hr/>
					<login-form></login-form>
					<hr/>
					<button @click="changeForm('register')" class="btn btn-link">Go to register form</button>
				</div>
			</div>
		</div>
	</section>
</template>