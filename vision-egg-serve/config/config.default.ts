import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1635385038584_8306';

  // add your egg config in here
  config.middleware = ['robot'];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };
  /**
   * dump config
   *
   * It will ignore special keys when dumpConfig
   *
   * @member Config#dump
   * @property {Set} ignore - keys to ignore
   */
  config.dump = {
    ignore: new Set([
      'pass',
      'pwd',
      'passd',
      'passwd',
      'password',
      'keys',
      'masterKey',
      'accessKey',
      // ignore any key contains "secret" keyword
      /secret/i,
    ]),
  };
  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
exports.robot = {
  ua: [/Baiduspider/i],
};
