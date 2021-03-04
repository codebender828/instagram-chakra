<template>
  <c-box
    bg="white"
    v-bind="$attrs"
    border-color="gray.300"
    border-width="thin"
    rounded="md"
  >
    <c-flex p="3" align="center">
      <c-avatar size="md" mr="4" :name="username" :src="avatar" />
      <c-box>
        <c-link font-weight="bold" font-size="sm">
          {{ username }}
        </c-link>
        <c-text font-size="xs">
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
    <c-box px="4" pb="4">
      <c-text font-size="sm">
        {{ caption }}
      </c-text>
    </c-box>
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
