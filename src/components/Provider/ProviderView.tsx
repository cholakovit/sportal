import React, { FC } from 'react'

import { Provider, ProviderContent, ProviderPropHolder1, ProviderPropHolder2 } from './Provider.style'

const ProviderView: FC<any> = (provider, key) => {

    //console.log('provider', provider)

  return (
    <Provider role='provider' key={key}>
        <ProviderContent>
          <ProviderPropHolder2>Page: {provider.provider.page}</ProviderPropHolder2>
          <ProviderPropHolder1>Date: {provider.provider.year} / {provider.provider.day}</ProviderPropHolder1>
          <ProviderPropHolder1>Views: {provider.provider.views} </ProviderPropHolder1>
          <ProviderPropHolder1>Provider: {provider.provider.provider} </ProviderPropHolder1>
        </ProviderContent>
    </Provider>
  )
}

export default ProviderView