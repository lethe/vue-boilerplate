<script>
	import { mapGetters } from "vuex";
	import MainHeader from "@/components/Header.vue";
	import RegisterForm from "@/components/auth/RegisterForm.vue";

	export default {
		name: 'SamplePage',
		data() {
			return {}
		},
		components: {
			MainHeader,
			RegisterForm
		},
		computed: {

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
			<div class="row">
				<div class="col-5">
					<register-form></register-form>
				</div>
			</div>
		</div>
	</section>
</template>