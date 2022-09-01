// React Hooks
import { useState } from "react";
import { useForm } from "react-hook-form";

// Styled Elements
import {
  FieldHolder,
  FormHolder,
  ButtonHolder,
  FormTitleHolder,
} from "./MutationProviders.styles";

// Mui Elements
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// Redux
import { useAddNewProviderMutation } from "../../store/apiSlice";
import { selectAllProviders } from "../../store/apiSlice";
import { useAppSelector } from "../../store/hooks";

//Components
import Alert from "../Alert/AlertView";

const MutationProviders = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const [provider, setProvider] = useState<string>('');
  const [day, setDay] = useState<number>(0);
  const [year, setYear] = useState<number>(0);
  const [page, setPage] = useState<string>('');
  const [views, setViews] = useState<number>(0);
  const [msg, setMsg] = useState<string>('')
  const [type, setType] = useState<string>('')
  
  const canSave = [provider, day, year, page, views].every(Boolean);

  const [addNewProvider] = useAddNewProviderMutation();

  const providers = useAppSelector(selectAllProviders);

  const onSubmit = async (data: any) => {
    if (canSave && data.provider?.length > 0) {
      try {
        await addNewProvider({
          provider,
          day,
          year,
          page,
          views,
          id: providers.length,
        }).unwrap();

        setProvider('')
        setDay(0)
        setYear(0)
        setPage('')
        setViews(0)

        setMsg('Success')
        setType('success')

      } catch (err) {
        console.error("Failed to save the provider", err);
        setMsg('Failed to save the provider')
        setType('error')
      }
    }
  }

  return (
    <form onSubmit={handleSubmit((data) => {
      onSubmit(data)
    })}>
      <FormTitleHolder>Fill the Form - All Fields are required!</FormTitleHolder>
      <Alert alert={msg} type={type} />
      <FormHolder>
        <FieldHolder>
          <TextField
            id="filled-basic"
            label="Enter Day..."
            variant="filled"
            value={day}
            type="number"
            data-testid='dayTest'
            {...register('day', { required: true, minLength: 3, maxLength: 3 })}
            onChange={(e) => setDay(Number(e.target.value))}
            helperText="Required! Insert numbers only - 3 digits"
            error={!!errors?.day}
          />
        </FieldHolder>
        <FieldHolder>
          <TextField
            id="filled-basic"
            label="Enter Provider..."
            variant="filled"
            value={provider}
            data-testid='providerTest'
            {...register('provider', { required: true, minLength: 3 })}
            onChange={(e) => setProvider(e.target.value)}
            helperText="Required! Insert more then 3 letters"
            error={!!errors?.provider}
          />
        </FieldHolder>
        <FieldHolder>
          <TextField
            id="filled-basic"
            label="Enter Year..."
            variant="filled"
            type="number"
            value={year}
            data-testid='yearTest'
            {...register('year', { required: true, minLength: 4, maxLength: 4 })}
            onChange={(e) => setYear(Number(e.target.value))}
            helperText="Required! Insert numbers only - 4 digits"
            error={!!errors?.year}
          />
        </FieldHolder>
        <FieldHolder>
          <TextField
            id="filled-basic"
            label="Enter Page..."
            variant="filled"
            value={page}
            data-testid='pageTest'
            {...register('page', { required: true, minLength: 3 })}
            onChange={(e) => setPage(e.target.value)}
            helperText="Required! Insert more then 3 letters"
            error={!!errors?.page}
          />
        </FieldHolder>
        <FieldHolder>
          <TextField
            id="filled-basic"
            label="Enter Views..."
            variant="filled"
            value={views}
            type="number"
            data-testid='viewsTest'
            {...register('views', { required: true, minLength: 1 })}
            onChange={(e) => setViews(Number(e.target.value))}
            helperText="Required! Insert numbers only"
            error={!!errors?.views}
          />
        </FieldHolder>
      </FormHolder>
      <ButtonHolder>
        <Button variant="contained" onClick={onSubmit} disabled={!canSave} type='submit'>
          Send
        </Button>
      </ButtonHolder>
    </form>
  );
};

export default MutationProviders;
