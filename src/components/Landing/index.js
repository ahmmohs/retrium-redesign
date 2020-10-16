import React from 'react';
import HasRetros from './HasRetros';
import NoRetros from './NoRetros';

function Landing ({ actionItems, setActionItems }) {
  return (
    actionItems.length > 0 ? (
      <HasRetros actionItems={actionItems} setActionItems={setActionItems} />
    ) : (
      <NoRetros />
    )
  );
}

export default Landing;