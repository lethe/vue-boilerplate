<script>
	export default {
		props: {
			label: null,
			name: null,
			placeholder: null,
			value: {},
			type: {
				type: String,
				default: 'text'
			}
	    },
	    data () {
	      return {}
	    },
	}
</script>
<template>
	<div class="form-group">
		<label v-if="label">{{label}}</label>
		<slot name="input"></slot>
		<slot name="error-text"></slot>
	</div>
</template>