import { ProviderAPIConfig } from '../types';

const SarvamAPIConfig: ProviderAPIConfig = {
  getBaseURL: ({ providerOptions }) => `https://api.sarvam.ai`,
  headers: ({ providerOptions }) => ({
    Authorization: `Bearer ${providerOptions.apiKey}`,
    'Content-Type': 'application/json',
    Accept: 'application/json, text/event-stream',
  }),
  getEndpoint: ({ fn }) => {
    switch (fn) {
      case 'createTranscription':
        return '/speech-to-text';
      case 'createTranslation':
        return '/speech-to-text-translate';
      case 'createSpeech':
        return '/text-to-speech';
      case 'chatComplete':
        return '/v1/chat/completions';
      case 'complete':
        return '/v1/completions';
      case 'embed':
        return '/v1/embeddings';
      default:
        return '';
    }
  },
};

export default SarvamAPIConfig;
