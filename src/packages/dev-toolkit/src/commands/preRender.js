/* eslint-disable no-underscore-dangle */
import { buildFolder } from '../webpack/projectSettings';
import { log, bootstrap, getWebpackAssets, preRender } from '../utilities';

bootstrap().then(({ server }) => {
  const { preRenderEntryPoint } = global.__devToolkitCommandOptions;

  if (!preRenderEntryPoint) {
    log({ message: 'Starting your Server App…\n', useSeparator: true });
  }
  try {
    getWebpackAssets().then(({ assets }) => {
      preRender({ server, webpackAssets: assets, buildFolder }).then(() =>
        log({ message: '\n⭐️  PreRender finished ⭐️\n', type: 'success' })
      );
    });
  } catch (error) {
    log({ message: 'Unable to preRender', error });
  }
});
