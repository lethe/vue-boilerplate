<script>
	export default {
		name: 'PageNotFound',
		data() {
			return {
				seconds: 3,
				interval: false,
			}
		},
		methods: {
			redirect() {
				this.interval = setInterval(() => {
					--this.seconds
					if( this.seconds < 0 ) {
						this.seconds = 0
						this.$router.push({ name: 'home'})
					}
				}, 1000)
			}
		},
		mounted() {
			this.redirect()
		},
		destroyed() {
			clearInterval(this.interval)
		}
	}
</script>

<template>
	<div class="page-not-found bg-secondary">
		<div class="wrapper text-center">
			<div class="cover-container h-100 row align-items-center">
				<div role="main" class="inner cover col">
					<h1 class="cover-heading">Page Not Found</h1>
					<p class="lead">The requested page does not exist.<hr class="clearfix">We will try to automatically redirect you to our home page in <span>{{seconds}}</span> seconds.</p>
					<p class="lead">
						<button class="btn btn-light" @click="$router.go(-1)">Go Back!</button>
						<button class="btn btn-light" @click="$router.push({ name: 'home'})">Go To Home</button>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.page-not-found {
		height: 100vh;
	}
	.wrapper {
		display: -ms-flexbox;
		display: -webkit-box;
		display: flex;
		-ms-flex-pack: center;
		-webkit-box-pack: center;
		justify-content: center;
		color: white;
		height: 100vh;
		text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
		box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
	}
	.cover-container {
	  max-width: 46rem;
		  .cover {
			padding: 0 1.5rem;
			hr {
				border-color: rgba(white, 0.175)
			}
			.btn {
				font-weight: 700;
				text-shadow: none
			}
		}
	}
</style>
