import { h } from 'vue';

import { UITypes } from '@/UI/UITypes';

import type { FunctionalComponent, PropType } from 'vue';

type Props = {
  type?: UITypes;
  text?: string;
  disabled?: boolean;
};

const DshButton = <FunctionalComponent<Props>>function (props, ctx) {
  return h(
    'button',
    {
      class: [
        'rounded-xl',
        'px-8 py-3',
        {
          'bg-primary': props.type === UITypes.PRIMARY,
          'bg-secondary': props.type === UITypes.SECONDARY,
          'bg-accent': props.type === UITypes.ACCENT,
          'opacity-50': props.disabled,
        },
      ],
      disabled: props.disabled,
    },
    props.text
      ? h(
          'span',
          {
            class: ['text-white text-xl font-bold font-primary'],
          },
          props.text,
        )
      : ctx.slots.default?.(),
  );
};

DshButton.props = {
  text: {
    type: String,
    required: false,
    default: '',
  },
  type: {
    type: Number as PropType<UITypes>,
    required: false,
    default: UITypes.PRIMARY,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
};

export default DshButton;
