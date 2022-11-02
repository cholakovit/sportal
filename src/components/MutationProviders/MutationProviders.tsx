import { Button, TextField } from "@mui/material";

import { useState, useRef, FormEvent, MutableRefObject } from "react";
import { useForm } from "react-hook-form";

import { ButtonHolder, FieldHolder, FormHolder } from "./MutationProviders.styles";

// Redux
import { useAddNewProviderMutation } from "../../store/apiSlice";
import { selectAllProviders } from "../../store/apiSlice";
import { useAppSelector } from "../../store/hooks";

const MutationProviders = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const [submitAllowed, setSubmitAllowed] = useState<boolean>(false)
  const dayRef = useRef() as MutableRefObject<HTMLInputElement>
  const providerRef = useRef() as MutableRefObject<HTMLInputElement>
  const yearRef = useRef() as MutableRefObject<HTMLInputElement>
  const pageRef = useRef() as MutableRefObject<HTMLInputElement>
  const viewsRef = useRef() as MutableRefObject<HTMLInputElement>

  const [msg, setMsg] = useState<string>('')
  const [type, setType] = useState<string>('')

  //const canSave = [dayRef].every(Boolean);

  const [addNewProvider] = useAddNewProviderMutation();

  const providers = useAppSelector(selectAllProviders);

  const handleOnChange = () => {
    setSubmitAllowed((dayRef.current?.value.length !== 0) && 
      (providerRef.current?.value.length !== 0) &&
      (yearRef.current?.value.length !== 0) &&
      (pageRef.current?.value.length !== 0) &&
      (viewsRef.current?.value.length !== 0))
  }

  const onSubmit = async () => {
    if (submitAllowed === true) {
      try {
        await addNewProvider({
          provider: providerRef.current?.value,
          day: dayRef.current?.value,
          year: yearRef.current?.value,
          page: pageRef.current?.value,
          views: viewsRef.current?.value,
          id: providers.length,
        }).unwrap();

        providerRef.current.value = ''
        dayRef.current.value = ''
        yearRef.current.value = ''
        pageRef.current.value = ''
        viewsRef.current.value = ''

        setMsg('Success')
        setType('success')

      } catch (err) {
        console.error("Failed to save the provider", err);
        setMsg('Failed to save the provider')
        setType('error')
      }
    }
  }

  return(
    <form data-cy='form' onSubmit={handleSubmit(() => { onSubmit() })}>
      <FormHolder>
        <FieldHolder>
          <TextField
            id="filled-basic"
            data-testid="providerTest"
            label="Enter Provider..."
            variant="filled"
            inputRef={providerRef}
            {...register('provider', { required: true, minLength: 3 })}
            onChange={() => handleOnChange()}
            helperText="Required! Insert more then 3 letters"
            error={!!errors?.provider}
          />
        </FieldHolder>
        <FieldHolder>
          <TextField
            id="filled-basic"
            label="Enter Day..."
            variant="filled"
            inputRef={dayRef}
            type="number"
            data-testid='dayTest'
            {...register('day', { required: true, minLength: 3, maxLength: 3 })}
            onChange={() => handleOnChange()}
            helperText="Required! Insert numbers only - 3 digits"
            error={!!errors?.day}
          />
        </FieldHolder>
          <FieldHolder>
            <TextField
              id="filled-basic"
              label="Enter Year..."
              variant="filled"
              type="number"
              inputRef={yearRef}
              data-testid='yearTest'
              {...register('year', { required: true, minLength: 4, maxLength: 4 })}
              onChange={() => handleOnChange()}
              helperText="Required! Insert numbers only - 4 digits"
              error={!!errors?.year}
            />
          </FieldHolder>
          <FieldHolder>
            <TextField
              id="filled-basic"
              label="Enter Page..."
              variant="filled"
              inputRef={pageRef}
              data-testid='pageTest'
              {...register('page', { required: true, minLength: 3 })}
              onChange={() => handleOnChange()}
              helperText="Required! Insert more then 3 letters"
              error={!!errors?.page}
            />
            </FieldHolder>
            <FieldHolder>
              <TextField
                id="filled-basic"
                label="Enter Views..."
                variant="filled"
                inputRef={viewsRef}
                type="number"
                data-testid='viewsTest'
                {...register('views', { required: true, minLength: 1 })}
                onChange={() => handleOnChange()}
                helperText="Required! Insert numbers only"
                error={!!errors?.views}
              />
            </FieldHolder>
      </FormHolder>
      <ButtonHolder>
        <Button variant="contained" onClick={onSubmit} disabled={!submitAllowed} type='submit'>
          Send
        </Button>
      </ButtonHolder>
    </form>
  )
};

export default MutationProviders;

