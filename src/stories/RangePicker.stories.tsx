import { Meta, StoryObj } from '@storybook/react'

import { RangePicker } from '@/components/RangePicker'

const meta = {
  title: 'ReactComponentLibrary/RangePicker',
  component: RangePicker,
} satisfies Meta<typeof RangePicker>

export default meta
type Story = StoryObj<typeof meta>

export const RangePickerTemplate: Story = {
  args: {},
}
