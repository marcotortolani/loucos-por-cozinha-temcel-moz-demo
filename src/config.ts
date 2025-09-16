interface Config {
  apiUrl: string
  prodUrl: string
  landingSubscription: string
  endpointAdditionalComponents: string
}

export const buildConfigs: Record<string, Config> = {
  'temcel-mozambique': {
    apiUrl: '',
    prodUrl: '',
    landingSubscription: '/',
    endpointAdditionalComponents:
      'https://test.moob.club:8002/config-portales/lxc-test.json',
  },
  test: {
    apiUrl: 'http://content.es.ve.movistar.locoporlacocina.moob.club/',
    prodUrl: 'http://es.test.locoporlacocina.moob.club/',
    landingSubscription: '/',
    endpointAdditionalComponents:
      'https://test.moob.club:8002/config-portales/lxc-test.json',
  },
}

// Función para obtener la configuración
export const getConfig = (operatorCountry = 'test') =>
  buildConfigs[operatorCountry] || buildConfigs['test']
