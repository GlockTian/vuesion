<template>
  <component :is="as" :class="[$style.vueText, $style[color], serifs && $style.serifs]">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { textColorVariationValidator } from '@/components/prop-validators';

export default defineComponent({
  name: 'VueText',
  components: {},
  props: {
    as: { type: String, default: 'span' },
    appearance: { type: String, default: 'body' },
    color: { type: String, default: null, validator: textColorVariationValidator },
    serifs: { type: Boolean, default: false },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueText {
  &.serifs {
    font-family: $font-family-serif;
  }

  &.primary {
    color: var(--brand-primary);
  }

  &.neutral {
    color: var(--brand-neutral);
  }

  &.danger {
    color: var(--brand-danger);
  }

  &.warning {
    color: var(--brand-warning);
  }

  &.success {
    color: var(--brand-success);
  }

  &.info {
    color: var(--brand-info);
  }

  &.high-emphasis {
    color: var(--brand-high-emphasis-text-color);
  }

  &.medium-emphasis {
    color: var(--brand-medium-emphasis-text-color);
  }

  &.low-emphasis {
    color: var(--brand-low-emphasis-text-color);
  }

  &.high-emphasis-inverse {
    color: var(--brand-high-emphasis-text-color-inverse);
  }

  &.medium-emphasis-inverse {
    color: var(--brand-medium-emphasis-text-color-inverse);
  }

  &.low-emphasis-inverse {
    color: var(--brand-low-emphasis-text-color-inverse);
  }
}
</style>
