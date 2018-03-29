import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

// Component
import { Header } from '../../components';

import { menuData } from '../mockData';

storiesOf('Header Component', module).add(
  'Default',
  withInfo({
    inline: true,
    propTables: [
      {
        displayName: 'Header',
        propTypes: {}
      }
    ],
    propTablesExclude: [Header],
    text: `This is the header used for all the sections.`
  })(() => <Header />)
);
