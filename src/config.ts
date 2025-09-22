interface Config {
  apiUrl: string
  prodUrl: string
  landingSubscription: string
  endpointAdditionalComponents: string
}

export const buildConfigs: Record<string, Config> = {
  'temcel-mozambique': {
    apiUrl: 'http://content.mz.temcel.loucosporcozinha.moob.club/',
    prodUrl: '',
    landingSubscription: '/',
    endpointAdditionalComponents: '',
  },
  test: {
    apiUrl: 'http://content.es.ve.movistar.locoporlacocina.moob.club/',
    prodUrl: 'http://es.test.locoporlacocina.moob.club/',
    landingSubscription: '/',
    endpointAdditionalComponents:
      '',
  },
}

// Función para obtener la configuración
export const getConfig = (operatorCountry = 'test') =>
  buildConfigs[operatorCountry] || buildConfigs['test']
