import React from 'react';

const CookTime = ({time,calorie}) => {

    return (
        <div className='mr-10 flex justify-end gap-5 text-gray-400 font-semibold'>
          <div >
            <p>Total Time = <br />
            <span className='mr-2'>{time}</span>minutes</p>
        </div>  
          <div>
            <p>Total Calories = <br />
            {
            
            
              <span className='mr-2'>{calorie}</span>
            }Calories</p>
        </div>  
        </div>
    );
};

export default CookTime;