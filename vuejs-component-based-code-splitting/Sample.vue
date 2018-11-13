<template>
  <div>
    <keep-alive>
      <async-component></async-component>
    </keep-alive>
  </div>
</template>

<script>
import AsyncLoading from './AsyncLoading'
import AsyncErrorMessage from './AsyncErrorMessage'
const AsyncSampleComp = import('./AsyncSampleComp')

export default {
  components: {
    AsyncComponent: () => ({
      // The component we want to load.
      component: AsyncSampleComp,
      // The component to use as a placeholder while the
      // async component is loading.
      loading: AsyncLoading,
      // The component to render instead if there is an error
      // loading the async component.
      error: AsyncErrorMessage,
      // The delay before the loading component is shown.
      delay: 200,
      // If this timeout is reached, the async component is considered
      // to have failed loading.
      timeout: 12000
    })
  }
}
</script>
<style scoped lang="scss"></style>
