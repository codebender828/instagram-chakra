<template>
  <c-flex
    bg="white"
    as="nav"
    align="center"
    justify="center"
    border-bottom-color="gray.300"
    border-width="thin"
    h="54px"
    position="sticky"
    top="0"
    z-index="10"
    :px="[3, 3, 0]"
  >
    <c-flex
      w="5xl"
      my="auto"
    >
      <c-image src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Instagram logo" />
      <!-- TODO: Make a the searchbox centered when blurred -->
      <c-input-group :d="['none', 'none', 'block']" mx="auto" size="sm">
        <c-input-left-element><c-icon w="14px" h="14px" name="search" color="gray.300" /></c-input-left-element>
        <c-input placeholder="Search" />
      </c-input-group>

      <c-stack is-inline spacing="3" :ml="['auto', 'auto', 0]">
        <c-link
          w="8"
          h="8"
          d="flex"
          justify-content="center"
          align-items="center"
          rounded="md"
          as="nuxt-link"
          to="#"
        >
          <c-icon size="6" name="home" />
        </c-link>
        <c-link
          w="8"
          h="8"
          d="flex"
          justify-content="center"
          align-items="center"
          rounded="md"
          as="nuxt-link"
          to="#"
        >
          <c-icon size="6" name="message-circle" />
        </c-link>
        <c-link
          w="8"
          h="8"
          d="flex"
          justify-content="center"
          align-items="center"
          rounded="md"
          as="nuxt-link"
          to="#"
        >
          <c-icon size="6" name="compass" />
        </c-link>
        <c-link
          w="8"
          h="8"
          d="flex"
          justify-content="center"
          align-items="center"
          rounded="md"
          as="nuxt-link"
          to="#"
        >
          <c-icon size="6" name="heart" />
        </c-link>
      </c-stack>
    </c-flex>
  </c-flex>
</template>
