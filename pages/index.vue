<template>
  <c-flex
    as="main"
    max-w="935px"
    flex-flow="row nowrap"
    w="full"
    mx="auto"
  >
    <!-- Posts container -->
    <c-flex
      my="6"
      direction="column"
      align="stretch"
      flex-shrink="0"
      float="left"
      max-w="614px"
      w="full"
      :mr="[0, 0, 6]"
    >
      <i-stories mb="5" />
      <c-stack spacing="5">
        <i-post
          v-for="(post, i) in posts"
          :key="i"
          :username="post.username"
          :location="post.location"
          :image="post.image"
          :caption="post.caption"
          :avatar="post.avatar"
        />
      </c-stack>
    </c-flex>
    <i-side-panel my="6" :d="['none', 'none', 'flex']" />
  </c-flex>
</template>

<script lang="js">
export default {
  name: 'Home',
  data () {
    return {
      posts: [{
        username: 'RealLifeNaruto',
        image: 'https://images.unsplash.com/photo-1559531717-8fdbe29ae8b3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1191&q=80',
        avatar: 'https://bit.ly/naruto-sage',
        caption: 'Is this heaven? Miss you, Jiraiya Sensei 🙏🏽',
        location: 'Konoha'
      },
      {
        username: 'yyxx09834',
        avatar: 'https://bit.ly/chakra-evan-you',
        image: 'https://images.unsplash.com/photo-1614829574910-e7e09ca1c8bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1527&q=80'
      }]
    }
  }
}
</script>
