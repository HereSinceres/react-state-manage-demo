import { container } from 'inversify-props';

import { ExampleAlertService, IExampleAlertService } from './shared';
// eslint-disable-next-line
export default () => {
  container.addSingleton<IExampleAlertService>(ExampleAlertService);
};
