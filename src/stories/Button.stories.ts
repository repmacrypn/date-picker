import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/Button'

const meta = {
  component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Primary',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Secondary',
  },
}
