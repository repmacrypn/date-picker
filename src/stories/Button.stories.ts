import type { Meta, StoryObj } from '@storybook/react'

import { DatePicker } from '@/components/DatePicker'

const meta = {
  component: DatePicker,
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
