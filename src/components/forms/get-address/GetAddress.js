import React from 'react'
import PropTypes from 'prop-types'
import Input from '../../input'
import Button from '../../button'
import { useForm } from 'react-hook-form'
import { RHFInput } from 'react-hook-form-input'
import * as S from './styled'

export const GetAddress = () => {
  const { register, handleSubmit, setValue, errors } = useForm({
    mode: 'onChange'
  })

  const onSubmit = values => {
    console.log(values)
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.InputWrapper>
        <RHFInput
          as={<Input id='cep' name='cep' />}
          name='cep'
          mask='11111-111'
          className={errors.cep ? 'error' : null}
          placeholder='Digite seu CEP'
          setValue={setValue}
          register={register({ required: true, pattern: /[0-9]{5}-[\d]{3}/g })}
        />
        {errors.cep && <S.HelpMessage>Campo necessário</S.HelpMessage>}
      </S.InputWrapper>
      <Button>Buscar</Button>
    </S.Form>
  )
}

GetAddress.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string
}
