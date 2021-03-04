<template>
  <c-stack v-bind="$attrs" spacing="2" w="full">
    <c-flex mt="6" align="center">
      <c-avatar flex-shrink="0" mr="3" name="Jonathan Bakebwa" size="lg" src="https://bit.ly/chakra-jonathan-bakebwa" />
      <c-box mr="auto">
        <c-link href="https://twitter.com/codebender828" is-external font-weight="bold" font-size="sm">
          codebender828
        </c-link>
        <c-text font-size="sm" color="gray.500">
          Jonathan Bakebwa
        </c-text>
      </c-box>
      <c-link
        href="https://twitter.com/codebender828"
        is-external
        ml="3"
        font-weight="bold"
        font-size="sm"
        color="blue.400"
      >
        Switch
      </c-link>
    </c-flex>
    <c-flex my="4" align="center">
      <c-text font-size="0.9em" mr="auto" font-weight="bold" color="gray.500">
        Suggestions for you
      </c-text>
      <c-link
        as="nuxt-link"
        to="#"
        font-weight="bold"
        font-size="sm"
      >
        See All
      </c-link>
    </c-flex>
    <c-flex align="center">
      <c-avatar flex-shrink="0" mr="3" name="Sage" size="sm" src="https://pbs.twimg.com/profile_images/1169353373012897802/skPUWd6e_400x400.jpg" />
      <c-box mr="auto">
        <c-link href="https://twitter.com/thesegunadebayo" is-external font-weight="bold" font-size="sm">
          thesegunadebayo
        </c-link>
        <c-text font-size="xs" color="gray.500">
          Segun Adebayo
        </c-text>
      </c-box>
      <c-link
        is-external
        ml="3"
        href="https://twitter.com/thesegunadebayo"
        font-weight="bold"
        font-size="xs"
        color="blue.400"
      >
        Follow
      </c-link>
    </c-flex>
    <c-flex align="center">
      <c-avatar flex-shrink="0" mr="3" name="SybrenW" size="sm" src="https://pbs.twimg.com/profile_images/1306495804903915520/9FAg0JSJ_400x400.jpg" />
      <c-box mr="auto">
        <c-link
          href="https://twitter.com/Carwack"
          is-external
          font-weight="bold"
          font-size="sm"
        >
          Carwack
        </c-link>
        <c-text font-size="xs" color="gray.500">
          SybrenW
        </c-text>
      </c-box>
      <c-link
        ml="3"
        href="https://twitter.com/Carwack"
        is-external
        font-weight="bold"
        font-size="xs"
        color="blue.400"
      >
        Follow
      </c-link>
    </c-flex>
    <c-flex align="center">
      <c-avatar flex-shrink="0" mr="3" name="Gift Egwuenu" size="sm" src="https://pbs.twimg.com/profile_images/1358198245978222593/x9OvMVMC_400x400.jpg" />
      <c-box mr="auto">
        <c-link href="https://twitter.com/lauragift_" is-external font-weight="bold" font-size="sm">
          lauragift_
        </c-link>
        <c-text font-size="xs" color="gray.500">
          Gift Egwuenu
        </c-text>
      </c-box>
      <c-link
        href="https://twitter.com/lauragift_"
        is-external
        ml="3"
        font-weight="bold"
        font-size="xs"
        color="blue.400"
      >
        Follow
      </c-link>
    </c-flex>
    <c-flex align="center">
      <c-avatar flex-shrink="0" mr="3" name="Michael Seibel" size="sm" src="https://bit.ly/chakra-jonathan-bakebwa" />
      <c-box mr="auto">
        <c-link is-external href="https://twitter.com/mwseibel" font-weight="bold" font-size="sm">
          mwseibel
        </c-link>
        <c-text font-size="xs" color="gray.500">
          Michael Seibel
        </c-text>
      </c-box>
      <c-link
        is-external
        href="https://twitter.com/mwseibel"
        ml="3"
        font-weight="bold"
        font-size="xs"
        color="blue.400"
      >
        Follow
      </c-link>
    </c-flex>
    <c-flex align="center">
      <c-avatar flex-shrink="0" mr="3" name="Mark Chandler" size="sm" src="https://pbs.twimg.com/profile_images/1182143272594132992/jGnAUoF6_400x400.jpg" />
      <c-box mr="auto">
        <c-link href="https://twitter.com/grow_love" is-external font-weight="bold" font-size="sm">
          grow_love
        </c-link>
        <c-text font-size="xs" color="gray.500">
          Mark Chandler
        </c-text>
      </c-box>
      <c-link
        href="https://twitter.com/grow_love"
        is-external
        ml="3"
        font-weight="bold"
        font-size="xs"
        color="blue.400"
      >
        Follow
      </c-link>
    </c-flex>
    <c-box mt="6">
      <c-text font-size="xs" color="gray.400">
        <c-link>About</c-link><span v-chakra mx="1">•</span>
        <c-link>Help</c-link><span v-chakra mx="1">•</span>
        <c-link>Press</c-link><span v-chakra mx="1">•</span>
        <c-link>API</c-link><span v-chakra mx="1">•</span>
        <c-link>Jobs</c-link><span v-chakra mx="1">•</span>
        <c-link>Privacy</c-link><span v-chakra mx="1">•</span>
        <c-link>Terms</c-link><span v-chakra mx="1">•</span>
        <c-link>Locations</c-link><span v-chakra mx="1">•</span>
        <c-link>Top Accounts</c-link><span v-chakra mx="1">•</span>
        <c-link>Hashtags</c-link><span v-chakra mx="1">•</span>
        <c-link>Language</c-link><span v-chakra mx="1">•</span>
      </c-text>
    </c-box>
    <c-box mt="6">
      <c-text font-size="xs" color="gray.400">
        © 2021 INSTAGRAM ON CHAKRA UI VUE
      </c-text>
      <c-text mt="2" font-size="xs" color="gray.500">
        Made with <c-link href="https://vue.chakra-ui.com" is-external font-weight="bold" text-decoration="underline">
          @chakra-ui/vue
        </c-link>.
        View source on <c-link font-weight="bold" href="https://github.com/codebender828/instagram-chakra" is-external text-decoration="underline">
          Github
        </c-link>.
      </c-text>
    </c-box>
  </c-stack>
</template>

<script>
export default {
  inheritAttrs: false
}
</script>
