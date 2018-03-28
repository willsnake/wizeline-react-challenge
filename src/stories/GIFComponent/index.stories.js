import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { gifComponentData } from '../mockData';

storiesOf('GIF', module).add(
  'Default',
  withInfo({
    inline: true,
    propTables: [
      {
        displayName: 'Segment',
        propTypes: {
          title: PropTypes.string,
          actions: PropTypes.object,
          noPaddingContent: PropTypes.bool,
          titleStyle: PropTypes.object
        }
      }
    ],
    propTablesExclude: [Segment],
    text: `This is the container used for all the charts.`
  })(() => (
    <Segment
      title={segmentData.title}
      noPaddingContent={segmentData.noPaddingContent}
      actions={<Button />}
    />
  ))
);
