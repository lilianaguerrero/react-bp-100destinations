/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage: 'An app that suggests new cities to travel to',
  },
  startProjectMessage: {
    id: `${scope}.start_project.message`,
    defaultMessage:
      'Peruse a list of inspirational cities to visit and add your own cities!',
  },
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'Add your city!',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Input a city, country',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  },
});
