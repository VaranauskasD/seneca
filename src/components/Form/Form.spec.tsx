import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { customRender as render } from '../../utils/test'
import { Form, FormProps } from './Form'

let mockFormProps: FormProps
beforeEach(() => {
  mockFormProps = {
    question: 'An animal cell contains',
    optionGroups: [
      [{ option: 'Cell wall', correct: true }, { option: 'Ribosomes' }],
      [{ option: 'Cytoplasm', correct: true }, { option: 'Chloroplast' }],
      [
        { option: 'Partially permeable membrane', correct: true },
        { option: 'Impermeable membrane' },
      ],
      [{ option: 'Cellulose' }, { option: 'Mitochondria', correct: true }],
      [
        { option: 'Cellulose' },
        { option: 'Ribosomes' },
        { option: 'Mitochondria', correct: true },
        { option: 'Chroloplast' },
      ],
    ],
    handleOption: () => {},
    isAnswered: false,
    dynamicRatio: 0,
  }
})

describe('Form', () => {
  it('renders correctly', async () => {
    const { asFragment } = render(<Form {...mockFormProps} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly when answer is reached', async () => {
    mockFormProps.isAnswered = true
    const { asFragment } = render(<Form {...mockFormProps} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
