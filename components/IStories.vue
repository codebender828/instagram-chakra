<template>
  <c-stack
    :rounded="['none', 'md']"
    bg="white"
    w="full"
    border-color="gray.300"
    border-width="thin"
    py="4"
    pl="4"
    spacing="4"
    is-inline
    overflow="hidden"
    v-bind="$attrs"
  >
    <c-flex direction="column" max-w="68px">
      <c-box p="2px" mb="1" rounded="full" bg="pink.400">
        <c-avatar cursor="pointer" name="Jonathan Bakebwa" w="16" h="16" src="https://pbs.twimg.com/profile_images/1226325332665356289/Df8y5lf-_400x400.jpg" />
      </c-box>
      <c-text font-size="xs" is-truncated>
        codebender828
      </c-text>
    </c-flex>
    <c-flex direction="column" max-w="68px">
      <c-box p="2px" mb="1" rounded="full" bg="pink.400">
        <c-avatar cursor="pointer" name="Jessica Sachs" w="16" h="16" src="https://pbs.twimg.com/profile_images/1362678110966214658/0-ahtunk_400x400.jpg" />
      </c-box>
      <c-text font-size="xs" is-truncated>
        _jessicasachs
      </c-text>
    </c-flex>
    <c-flex direction="column" max-w="68px">
      <c-box p="2px" mb="1" rounded="full" bg="pink.400">
        <c-avatar cursor="pointer" name="Ben Hong" w="16" h="16" src="https://pbs.twimg.com/profile_images/1305674805757333504/-4nFHMCK_400x400.jpg" />
      </c-box>
      <c-text font-size="xs" is-truncated>
        bencodezen
      </c-text>
    </c-flex>
    <c-flex direction="column" max-w="68px">
      <c-box p="2px" mb="1" rounded="full" bg="pink.400">
        <c-avatar cursor="pointer" name="Anthony Fu" w="16" h="16" src="https://pbs.twimg.com/profile_images/1255727296532541440/iC5IubYd_400x400.jpg" />
      </c-box>
      <c-text font-size="xs" is-truncated>
        antfu
      </c-text>
    </c-flex>
    <c-flex direction="column" max-w="68px">
      <c-box p="2px" mb="1" rounded="full" bg="pink.400">
        <c-avatar cursor="pointer" name="Segun Adebayo" w="16" h="16" src="https://pbs.twimg.com/profile_images/1169353373012897802/skPUWd6e_400x400.jpg" />
      </c-box>
      <c-text font-size="xs" is-truncated>
        thesegunadebayo
      </c-text>
    </c-flex>
    <c-flex direction="column" max-w="68px">
      <c-box p="2px" mb="1" rounded="full" bg="pink.400">
        <c-avatar cursor="pointer" name="Folasade Agbaje" w="16" h="16" src="https://pbs.twimg.com/profile_images/1172169788665278464/xZ-dYEwE_400x400.jpg" />
      </c-box>
      <c-text font-size="xs" is-truncated>
        _estheragbaje
      </c-text>
    </c-flex>
    <c-flex direction="column" max-w="68px">
      <c-box p="2px" mb="1" rounded="full" bg="pink.400">
        <c-avatar cursor="pointer" name="Maria Lamardo" w="16" h="16" src="https://pbs.twimg.com/profile_images/1093122665257336832/nST2IiJk_400x400.jpg" />
      </c-box>
      <c-text font-size="xs" is-truncated>
        MariaLamardo
      </c-text>
    </c-flex>
    <c-flex direction="column" max-w="68px">
      <c-box p="2px" mb="1" rounded="full" bg="pink.400">
        <c-avatar cursor="pointer" name="Phaneroo" w="16" h="16" src="https://pbs.twimg.com/profile_images/1315933776053260288/c9ryY-Cn_400x400.jpg" />
      </c-box>
      <c-text font-size="xs" is-truncated>
        Phanerookampala
      </c-text>
    </c-flex>
  </c-stack>
</template>

<script lang="js">
export default {
  name: 'IStories',
  inheritAttrs: false
}
</script>
