import type { Meta, Story } from '@storybook/vue3';
import { defineComponent, ref } from 'vue';

import { QCheckbox } from '@/qComponents/QCheckbox';
import type { QCheckboxProps } from '@/qComponents/QCheckbox';

const storyMetadata: Meta = {
  title: 'Components/QCheckbox',
  component: QCheckbox,
  argTypes: {
    modelValue: { control: { type: 'none' } }
  }
};

const Template: Story<QCheckboxProps> = args =>
  defineComponent({
    setup() {
      const isChecked = ref<boolean>(true);

      return {
        isChecked,
        args
      };
    },

    template: `
      <q-checkbox
        v-model="isChecked"
        :label="args.label"
        :indeterminate="args.indeterminate"
        :disabled="args.disabled"
        :rootTag="args.rootTag"
      />
    `
  });

export const Default = Template.bind({});
Default.args = {
  label: 'Option A'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Option A',
  disabled: true
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  label: 'Option A',
  indeterminate: true
};

export default storyMetadata;
