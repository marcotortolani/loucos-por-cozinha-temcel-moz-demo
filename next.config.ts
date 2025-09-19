import { withNextVideo } from "next-video/process";


import { NextConfig } from "next";
import { buildConfigs  } from "@/config";

const operatorCountry = process.env.NEXT_PUBLIC_OPERATOR_COUNTRY;
const config = buildConfigs[operatorCountry as keyof typeof buildConfigs || "test"];

const nextConfig: NextConfig = {
  /* config options here */
  // reactStrictMode: true,
  env: {
    NEXT_PUBLIC_OPERATOR_COUNTRY: operatorCountry || "test",
    NEXT_PUBLIC_API_URL: config.apiUrl,
    NEXT_PUBLIC_LANDING_SUBSCRIPTION: config.landingSubscription ,
    NEXT_PUBLIC_ENDPOINT_ADDITIONAL_COMPONENTS: config.endpointAdditionalComponents,
    NEXT_PUBLIC_URL_CHATBOT: 'https://test.moob.club:8005/IA/mz/temcel/locoporlacocina/chat',
    NEXT_PUBLIC_WEB3FORMS_URL: 'https://api.web3forms.com/submit',
    NEXT_PUBLIC_WEB3FORMS_API_KEY: '78c750e5-3c34-4b18-8273-1aaf574dd707',
    ENDPOINT_VALIDATION_HASH: config.apiUrl + "wp-json/api/v1/validate_hash/",    
    ENDPOINT_CREATE_USER: "https://api.gaming.moob.club/api/v1/createuser",
  },
  distDir: operatorCountry ? `.next-${operatorCountry}` : '.next', // Cambia la carpeta de salida dinámicamente
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-sa-east-1.amazonaws.com'
      }
    ],
  },
}

export default withNextVideo(nextConfig);