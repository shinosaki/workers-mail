import eml from './eml.txt';
import headers from './headers.json';

export const data = {
  id: '721d3066-9874-4a5e-a0cf-3a4359a777c1',
  type: 'message',
  subject: 'お支払い日のご案内',
  from: {
    addr: 'SRS0=Lsix=pf=atmehvz.cn=contact.vpass1@lain.im',
    name: '"三井住友カード" <contact.vpass1@atmehvz.cn>'
  },
  to: [{
    addr: 'admin@lain.im',
    name: 'scrutinize@lain.im'
  }],
  headers,
  eml
};

console.log(JSON.stringify(data, null, '  '));

