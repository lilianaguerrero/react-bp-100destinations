/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  display: {
    id: `${scope}.display`,
    defaultMessage: 'Show Destination Cities',
  },
  input: {
    id: `${scope}.input`,
    defaultMessage: 'Add Cities to List',
  },
});
