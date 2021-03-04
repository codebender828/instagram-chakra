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
        <c-divider border-color="gray.400" />
        <c-text text-align="center" mt="2" font-size="xs" color="gray.500">
          Made with <c-link href="https://vue.chakra-ui.com" is-external font-weight="bold" text-decoration="underline">
            @chakra-ui/vue
          </c-link>.
          View source on <c-link font-weight="bold" href="https://github.com/codebender828/instagram-chakra" is-external text-decoration="underline">
            Github
          </c-link>.
        </c-text>
      </c-stack>
    </c-flex>
    <i-side-panel position="sticky" top="78px" h="fit-content" my="6" :d="['none', 'none', 'flex']" />
  </c-flex>
</template>

<script lang="js">
export default {
  name: 'Home',
  data () {
    return {
      posts: [
        {
          username: 'youyuxi',
          avatar: 'https://bit.ly/chakra-evan-you',
          image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80',
          caption: '😍 This is probably the best plated sushi I\'ve ever seen.',
          location: 'New Jersey'
        },
        {
          username: 'mercedesbenz',
          avatar: 'https://scontent-sin6-3.cdninstagram.com/v/t51.2885-19/s150x150/128444312_195044392220087_2626476807974979382_n.jpg?tp=1&_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_ohc=wqK0rLrRLpgAX8cbEJQ&oh=8b0c2e990fd5e9b62b7fffebf8ba207c&oe=6069CF5C',
          image: 'https://scontent-sin6-3.cdninstagram.com/v/t51.2885-15/e35/156616835_814914645757720_7457190410066923442_n.jpg?tp=1&_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=1&_nc_ohc=mHTbLH7YvXYAX_eLiwL&oh=cfb1774edc4f08be81e83763c525de62&oe=606C3688',
          caption: 'Padded areas and the dashboard are finished in fine nappa leather as standard, with a range of additional cushions and leather interior linings available on request',
          location: 'Kampala, Uganda'
        },
        {
          username: 'pineapplepizza',
          image: 'https://images.unsplash.com/photo-1611074083671-b09e8717c415?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80',
          avatar: 'https://images.unsplash.com/profile-1588250549355-02d238251bf6image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
          caption: 'Love it when mom cooks! There\'s no place like home.',
          location: 'Johannesburg'
        },
        {
          username: 'RealLifeNaruto',
          image: 'https://images.unsplash.com/photo-1559531717-8fdbe29ae8b3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1191&q=80',
          avatar: 'https://bit.ly/naruto-sage',
          caption: 'Is this heaven? Miss you, Jiraiya Sensei 🙏🏽',
          location: 'Konoha'
        }
      ]
    }
  }
}
</script>
