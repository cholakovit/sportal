import React, { useState } from "react";

// Styled Elements
import {
  FieldHolder,
  FormHolder,
  ButtonHolder,
  FormTitleHolder,
} from "./MutationProviders.styles";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// Redux
import { useAddNewProviderMutation } from "../../store/apiSlice";
import { useGetProvidersQuery, selectAllProviders } from "../../store/apiSlice";
import { useAppSelector } from "../../store/hooks";

const MutationProviders = () => {
  const [addNewProvider, { isLoading }] = useAddNewProviderMutation();
  const [provider, setProvider] = useState<any>();
  const [day, setDay] = useState<any>();
  const [year, setYear] = useState<any>();
  const [page, setPage] = useState<any>();
  const [views, setViews] = useState<any>();
  const canSave = [provider, day, year, page, views].every(Boolean);

  const { isSuccess, isError }: any = useGetProvidersQuery("");

  const providers = useAppSelector(selectAllProviders);

  //console.log('zzz', providers.length)

  const onSubmit = async () => {
    if (canSave) {
      try {
        await addNewProvider({
          provider,
          day,
          year,
          page,
          views,
          id: providers.length,
        }).unwrap();
      } catch (err) {
        console.error("Failed to save the post", err);
      }
    }
  };

  return (
    <>
      <FormTitleHolder>Fill the Form</FormTitleHolder>
      <FormHolder>
        <FieldHolder>
          <TextField
            id="filled-basic"
            label="Provider"
            variant="filled"
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
            helperText="Insert letters"
          />
        </FieldHolder>
        <FieldHolder>
          <TextField
            id="filled-basic"
            label="Day"
            variant="filled"
            value={day}
            onChange={(e) => setDay(Number(e.target.value))}
            helperText="Insert numbers only"
          />
        </FieldHolder>
        <FieldHolder>
          <TextField
            id="filled-basic"
            label="Year"
            variant="filled"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            helperText="Insert numbers only"
          />
        </FieldHolder>
        <FieldHolder>
          <TextField
            id="filled-basic"
            label="Page"
            variant="filled"
            value={page}
            onChange={(e) => setPage(e.target.value)}
            helperText="Insert letters"
          />
        </FieldHolder>
        <FieldHolder>
          <TextField
            id="filled-basic"
            label="Views"
            variant="filled"
            value={views}
            onChange={(e) => setViews(Number(e.target.value))}
            helperText="Insert numbers only"
          />
        </FieldHolder>
      </FormHolder>
      <ButtonHolder>
        <Button variant="contained" onClick={onSubmit} disabled={!canSave}>
          Send
        </Button>
      </ButtonHolder>
    </>
  );
};

export default MutationProviders;
