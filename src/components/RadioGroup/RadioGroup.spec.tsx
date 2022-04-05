import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { customRender as render } from '../../utils/test'
import { RadioGroup, RadioGroupProps } from './RadioGroup'

let mockRadioGroupProps: RadioGroupProps
beforeEach(() => {
  mockRadioGroupProps = {
    id: 0,
    options: [{ option: 'Cell wall', correct: true }, { option: 'Ribosomes' }],
    handleOption: () => {},
    dynamicRatio: 0,
    isAnswered: false,
  }
})

describe('RadioGroup', () => {
  it('renders correctly', async () => {
    const { asFragment } = render(<RadioGroup {...mockRadioGroupProps} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly with three radio options', async () => {
    mockRadioGroupProps.options = [
      { option: 'Cellulose' },
      { option: 'Mitochondria', correct: true },
      { option: 'Chroloplast' },
    ]
    const { asFragment } = render(<RadioGroup {...mockRadioGroupProps} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
