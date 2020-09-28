import React from 'react';

import NoRetros from './NoRetros';

function Landing ({hasRetros}) {
  return (
    hasRetros ? (
      <NoRetros />
    ) : (
      <div>
        Lol
      </div>
    )
  );
}

export default Landing;