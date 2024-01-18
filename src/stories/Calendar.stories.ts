import type { Meta, StoryObj } from '@storybook/react'

import { Calendar } from '@/components/Calendar'

const meta = {
  title: 'ReactComponentLibrary/Calendar',
  component: Calendar,
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
