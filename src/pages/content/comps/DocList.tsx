import React from 'react';

export const DocOrderedList: React.FC<{ items: React.ReactChild[], abc?: boolean, ABC?: boolean }> = props => {
   const order = props.ABC
      ? 'A B C D E F G H I J'.split(' ')
      : props.abc
         ? 'a b c d e f g h i j'.split(' ')
         : '1 2 3 4 5 6 7 8 8 9'.split(' ');
   return (
      <div className='doc-list'>
         {
            props.items.map((item, i) => (
               <div className='doc-list-item' key={i}>
                  <div>{order[i]}</div>
                  <div>{item}</div>
               </div>
            ))
         }
      </div>
   );
};

export const DocUnorderedList: React.FC<{ items: React.ReactChild[], abc?: boolean, ABC?: boolean }> = props => {
   return (
      <div className='doc-list'>
         {
            props.items.map((item, i) => (
               <div className='doc-list-item' key={i}>
                  <div>•</div>
                  <div>{item}</div>
               </div>
            ))
         }
      </div>
   );
};
