interface Config {
  apiUrl: string
  prodUrl: string
  landingSubscription: string
}

export const buildConfigs: Record<string, Config> = {
  'temcel-mozambique': {
    apiUrl: 'http://content.mz.temcel.loucosporcozinha.moob.club/',
    prodUrl: 'http://mz.temcel.loucosporcozinha.club',
    landingSubscription:
      'https://mz.wap.moob.club/landing/site/tmcel/loucoporcozinha/default1',
  },
  test: {
    apiUrl: 'http://content.test.mz.temcel.loucosporcozinha.moob.club',
    prodUrl: 'http://mz.temcel.loucosporcozinha.club',
    landingSubscription: '/',
  },
}

// Función para obtener la configuración
export const getConfig = (operatorCountry = 'test') =>
  buildConfigs[operatorCountry] || buildConfigs['test']
