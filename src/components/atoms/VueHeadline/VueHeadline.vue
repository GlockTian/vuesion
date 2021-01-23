<template>
  <component
    :is="component"
    :class="[
      $style.vueHeadline,
      appearanceLevel ? $style[`h${appearanceLevel}`] : $style[`h${level}`],
      $style[color],
      serifs && $style.serifs,
    ]"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';
import { textColorVariationValidator } from '@/components/prop-validators';

export default defineComponent({
  name: 'VueHeadline',
  components: {},
  props: {
    level: { type: String, required: true },
    appearanceLevel: { type: String, default: null },
    native: { type: Boolean, default: true },
    color: { type: String, default: null, validator: textColorVariationValidator },
    serifs: { type: Boolean, default: false },
  },
  setup(props) {
    const component = computed(() => {
      let component = `h${props.level}`;

      if (props.native === false) {
        component = 'div';
      }

      return component;
    });

    return {
      component,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueHeadline {
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

.h1 {
  font-size: $text-8;
  font-weight: $font-weight-semi-bold;
  letter-spacing: $letter-spacing-1;
  line-height: $line-height-8;
}

.h2 {
  font-size: $text-6;
  font-weight: $font-weight-semi-bold;
  letter-spacing: $letter-spacing-1;
  line-height: $line-height-6;
}

.h3 {
  font-size: $text-5;
  font-weight: $font-weight-semi-bold;
  letter-spacing: $letter-spacing-1;
  line-height: $line-height-5;
}

.h4 {
  font-size: $text-4;
  font-weight: $font-weight-semi-bold;
  letter-spacing: $letter-spacing-1;
  line-height: $line-height-4;
}

.h5 {
  font-size: $text-3;
  font-weight: $font-weight-semi-bold;
  letter-spacing: $letter-spacing-1;
  line-height: $line-height-3;
}

.h6 {
  font-size: $text-2;
  font-weight: $font-weight-semi-bold;
  letter-spacing: $letter-spacing-1;
  line-height: $line-height-2;
}
</style>
