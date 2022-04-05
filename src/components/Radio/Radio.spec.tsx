import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { customRender as render } from '../../utils/test'
import { Radio, RadioProps } from './Radio'

let mockRadioProps: RadioProps
beforeEach(() => {
  mockRadioProps = {
    id: 0,
    optionGroupId: 0,
    label: 'Cell wall',
    name: `option-0`,
    correct: false,
    checked: false,
    handleCheck: () => {},
    handleOption: () => {},
    dynamicRatio: 0,
    groupQuantity: 0,
    isAnswered: false,
  }
})

describe('Radio', () => {
  it('renders correctly', async () => {
    const { asFragment } = render(<Radio {...mockRadioProps} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
