// Styled Elements
import { ProvidersContainer, ProvidersHolder, Title } from "./List.styles";

// Redux
import { useGetProvidersQuery, selectAllProviders } from "../../store/apiSlice";
import { useAppSelector } from "../../store/hooks";

// Components
import Skeletons from "../Skeletons/SkeletonsView";
import Alert from "../Alert/AlertView";
import ProviderView from "../Provider/ProviderView";

const ListView = () => {
  const { isLoading, isSuccess, isError }: any = useGetProvidersQuery("");

  const providers = useAppSelector(selectAllProviders);

  //console.log('providers', providers)

  return (
    <ProvidersContainer>
      {isLoading ? (
        <Skeletons flag={1} width={160} height={120} />
      ) : isError ? (
        <Alert alert="Network Problem" type='error' />
      ) : isSuccess ? (
        providers.length > 0 ? (
          <>
            <Title variant="h1">List of Providers</Title>
            <ProvidersHolder>
              {providers &&
                providers.map((provider: any, index: number) => (
                  <ProviderView provider={provider} key={index} />
                ))}
            </ProvidersHolder>
          </>
        ) : (
          <Skeletons flag={1} width={160} height={120} />
        )
      ) : (
        ""
      )}
    </ProvidersContainer>
  );
};

export default ListView;
