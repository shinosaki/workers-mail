import { createMimeMessage } from "mimetext";
import { postalMime } from 'postal-mime/dist/node';

export const createEML = (options = {}) => {
  const {
    subject = '',
    message: {
      contentType = 'text/plain',
      data = '',
    },
    from,
    to,
  } = options;

  const msg = createMimeMessage();

  msg.setSubject(subject);
  msg.setSender(from);
  msg.setRecipients(...to);
  msg.addMessage({ contentType, data });

  return msg.asRaw();
};

const parse = (eml) => new postalMime.default().parse(eml);
export const parseEML = async (arg) => (Array.isArray(arg))
  ? await Promise.all(arg.map(async v => ({ ...v, email: await parse(v.eml) })))
  : (arg?.eml) ? { ...arg, email: await parse(arg.eml) }
  : parse(eml);
