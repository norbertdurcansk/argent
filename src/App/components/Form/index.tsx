import React from 'react'
import Button from '~/components/Button'
import Icon from '~/components/Icon'
import Text from '~/components/Text'
import { SearchContainer, Input } from './index.styled'
import { useForm } from 'react-hook-form'

export type FormValues = {
  address: string
}

interface Props {
  onSubmit: (values: FormValues) => void
}

const Form = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      address: '',
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Text className="mb-2">Enter your wallet address:</Text>
      <SearchContainer>
        <div className="relative">
          <Input
            disabled={isSubmitting}
            hasError={!!errors?.address}
            type="text"
            {...register('address', {
              required: true,
            })}
          />
          {errors?.address ? (
            <Text className="absolute left-[8px] bottom-[-20px]" small error>
              {errors?.address.type == 'required' ? <>Required</> : null}
            </Text>
          ) : null}
        </div>
        <Button primary disabled={isSubmitting}>
          <Icon src="/icons/arrow.svg" height="16px" />
        </Button>
      </SearchContainer>
    </form>
  )
}

export default Form
