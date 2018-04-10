import React from 'react';
import { AHModal } from '../AHModal/AHModal';

export const AHModalLoading = props =>
  <AHModal style={{ maxWidth: 200, display: 'flex', justifyContent: 'center' }}>
    <img
    alt="loading"
      style={{ alignSelf: 'center' }}
      width={100}
      src={require('./loading.gif')}
    />
  </AHModal>;
