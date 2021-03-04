<template>
  <c-box
    bg="white"
    v-bind="$attrs"
    border-color="gray.300"
    border-width="thin"
    rounded="md"
  >
    <c-flex p="3" align="center">
      <c-avatar cursor="pointer" size="md" mr="4" :name="username" :src="avatar" />
      <c-box>
        <c-link font-weight="bold" font-size="sm">
          {{ username }}
        </c-link>
        <c-text cursor="pointer" font-size="xs">
          {{ location }}
        </c-text>
      </c-box>
    </c-flex>
    <c-aspect-ratio-box
      max-w="614px"
      :ratio="1 / 1"
    >
      <c-image
        object-fit="cover"
        :alt="caption"
        :src="image"
      />
    </c-aspect-ratio-box>
    <c-flex p="4">
      <c-stack is-inline>
        <c-icon size="6" name="heart" />
        <c-icon size="6" name="message-circle" />
        <c-icon size="6" name="send" />
      </c-stack>
      <c-icon size="6" ml="auto" name="bookmark" />
    </c-flex>
    <c-text font-weight="bold" font-size="sm" mx="4">
      18 likes
    </c-text>
    <c-box px="4" mb="2">
      <c-text font-size="sm">
        <span v-chakra font-weight="bold" mr="2">{{ username }}</span>{{ caption }}
      </c-text>
    </c-box>
    <c-text
      color="gray.500"
      mx="4"
      text-transform="uppercase"
      mb="2"
      font-size="0.7em"
    >
      11 hours ago
    </c-text>
    <c-input-group
      border-top="1px solid"
      border-color="gray.300"
      size="lg"
      rounded-top="none"
    >
      <!-- Yes you can also hack Chakra styles 😅 -->
      <c-input-left-element v-chakra="{ h: '4rem !important' }">
        <c-icon size="6" name="smile" />
      </c-input-left-element>
      <c-input
        focus-border-color="none"
        h="16"
        border="none"
        type="text"
        font-size="sm"
        placeholder="Add a comment..."
      />
      <!-- Yes you can also hack Chakra styles 😅 -->
      <c-input-right-element v-chakra="{ h: '4rem !important' }">
        <c-link as="button" font-size="sm" mr="3" font-weight="bold" color="blue.400">
          Post
        </c-link>
      </c-input-right-element>
    </c-input-group>
  </c-box>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    caption: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    }
  }
}
</script>
