import React from 'react';

const Bracket = ({objectName, objectSeparator, children, openBracket, closeBracket, isEndComma = false}) => {
  const color = isEndComma? 'red' : 'yellow';
  return (
    <div className='json'>
      <div class="json__first">
        <span className='json__key' style={{
          color
        }}>{objectName} {objectSeparator} </span> <span className='json__open-bracket'>{openBracket}</span>
      </div>
      <div class="json__childrens">
        {children}
      </div>
      <div class="json__second">
        <span className='json__close-bracket'>{closeBracket}</span>
        { isEndComma && <span className="json__comma">,</span>}
      </div>
      
    </div>
  )
}

export default Bracket