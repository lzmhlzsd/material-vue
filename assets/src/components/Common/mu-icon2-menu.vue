<template>
  <div class="mu-icon2-menu">
    <icon-button :tooltip="tooltip" :tooltipPosition="tooltipPosition" :icon="icon" @click="handleOpen">

    </icon-button>
    <popover :open="openMenu" :trigger="trigger" :scroller="scroller" :anchorOrigin="anchorOrigin"
      :targetOrigin="targetOrigin" @close="handleClose">
      <mu-menu v-if="openMenu" @change="change" popover :value="value" @itemClick="itemClick" :multiple="multiple" :desktop="desktop" :maxHeight="maxHeight">
        <slot></slot>
      </mu-menu>
    </popover>
  </div>
</template>

<script>
import { iconButton, popover, menu } from 'muse-ui'
export default {
  name: 'mu-icon-menu',
  props: {
    icon: {
      type: String,
      required: true
    },
    value: {},
    multiple: {
      type: Boolean,
      default: false
    },
    desktop: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: false
    },
    maxHeight: {
      type: Number
    },
    anchorOrigin: {
      type: Object,
      default () {
        return {
          vertical: 'top',
          horizontal: 'left'
        }
      }
    },
    targetOrigin: {
      type: Object,
      default () {
        return {
          vertical: 'top',
          horizontal: 'left'
        }
      }
    },
    scroller: {
      type: [window.HTMLDocument, window.Element, window.Window]
    },
    itemClickClose: {
      type: Boolean,
      default: true
    },
    tooltip: {
      type: String
    },
    tooltipPosition: {
      type: String,
      default: 'bottom-center'
    }
  },
  data () {
    return {
      openMenu: this.open,
      trigger: null
    }
  },
  methods: {
    handleOpen () {
      this.openMenu = true
      this.$emit('open')
    },
    handleClose () {
      this.openMenu = false
      this.$emit('close')
    },
    change (value) {
      this.$emit('change', value)
    },
    itemClick (item) {
      if (this.itemClickClose) {
        this.handleClose()
      }
      this.$emit('itemClick', item)
    }
  },
  mounted () {
    this.trigger = this.$el
  },
  watch: {
    open (val, oldVal) {
      if (val === oldVal) return
      this.openMenu = val
    }
  },
  components: {
    'icon-button': iconButton,
    popover,
    'mu-menu': menu
  }
}
</script>

<style lang="css">
.mu-icon-menu{
  display: inline-block;
  position: relative;
}
</style>
