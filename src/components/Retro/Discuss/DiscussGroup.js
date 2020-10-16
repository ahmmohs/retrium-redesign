import React from 'react';

function DiscussGroup ({ group }) {
  
  return (
    <div>
      <div className="notes__group">
        <div className="group__heading">{group.name}</div>
        <div>
          {
            group.items.map((item, index) => {
              return (
                <div className="note__wrapper" style={{marginBottom: '8px'}}>
                  <div className={`note__container note__container--${item.color}`}>
                    {item.value}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default DiscussGroup;