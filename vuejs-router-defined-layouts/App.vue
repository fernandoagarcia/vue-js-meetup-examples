<template>
  <div id="app">
    <component :is="layout">
      <transition name="slide-fade" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </component>
  </div>
</template>

<script>
import { get } from 'vuex'
export default {
  computed: {
    currentLayout: 'Route/meta.layout',
    layout: function () {
      const layout = typeof this.currentLayout !== 'undefined'
        ? `${this.currentLayout}-layout`
        : `default-layout`

      return layout
    }
  }
}
</script>

<style lang="scss" scoped></style>
