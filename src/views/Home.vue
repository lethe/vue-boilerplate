<template>
  <section class="home">
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">Hello, world!</h1>
        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
        <p>
          <button class="btn btn-outline-dark mr-2" @click="$router.push('404')" role="button">404 Page</button>
          <button class="btn btn-outline-dark" @click="$router.push({ name: 'samplePage'})">Go To Sample Page</button>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  components: {

  }
}
</script>
