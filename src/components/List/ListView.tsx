// Styled Elements
import { ProvidersContainer, ProvidersHolder } from "./List.styles";

// Redux
import { useGetProvidersQuery, selectAllProviders } from "../../store/apiSlice";
import { useAppSelector } from "../../store/hooks";

// Components
import Skeletons from "../Skeletons/SkeletonsView";
import Error from "../Error/Error";
import ProviderView from "../Provider/ProviderView";

const ListView = () => {
  const { isLoading, isSuccess, isError }: any = useGetProvidersQuery("");

  const providers = useAppSelector(selectAllProviders);

  //console.log('providers', providers)

  return (
    <ProvidersContainer>
      <ProvidersHolder>
        {isLoading ? (
          <Skeletons flag={1} width={160} height={120} />
        ) : isError ? (
          <Error error="Network Problem" />
        ) : isSuccess ? (
          providers.length > 0 ? (
            <>
              {providers &&
                providers.map((provider: any, index: number) => (
                  <ProviderView provider={provider} key={index} />
                ))}
            </>
          ) : (
            <Skeletons flag={1} width={160} height={120} />
          )
        ) : (
          ""
        )}
      </ProvidersHolder>
    </ProvidersContainer>
  );
};

export default ListView;
