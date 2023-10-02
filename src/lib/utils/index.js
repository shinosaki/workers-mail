export * from './eml';
export * from './time';

export const parseEmailAddr = (address) => {
  const [ local, domain ] = address.split('@');
  const [ userRaw, alias ] = local.split('+');
  const user = userRaw.replaceAll('.', '');

  return {
    user,
    userRaw,
    alias,
    local,
    domain,
    address,
  };
};
