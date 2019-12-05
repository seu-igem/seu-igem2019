import React from 'react';

export const body = {
   title: '404',
   hasAside: false,
   hasInfobar: false,
   hasRating: false,
   translatable: false,
   content: (<>
      <h2 style={{ background: 'red', border: '0 none', borderRadius: 8, paddingLeft: '.4em' }}>
         <span style={{ color: 'white' }}>Whoops!</span>
      </h2>
      <p>404 - Page not found</p>
      <p>One of our Team must be punished for this unacceptable failure!</p>
   </>),
};
