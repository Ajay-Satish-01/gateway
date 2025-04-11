import { ProviderConfigs } from '../types';
import { SARVAM } from '../../globals';
import {
  chatCompleteParams,
  completeParams,
  embedParams,
  responseTransformers,
} from '../open-ai-base';
import SarvamAPIConfig from './index';

const SarvamConfig: ProviderConfigs = {
  chatComplete: chatCompleteParams([], { model: 'mistral-large' }),
  complete: completeParams([], { model: 'mistral-large' }),
  embed: embedParams([], { model: 'mistral-large' }),
  responseTransforms: responseTransformers(SARVAM, {
    chatComplete: true,
  }),
  api: SarvamAPIConfig,
};

export default SarvamConfig;
