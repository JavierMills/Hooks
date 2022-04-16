import React from 'react';
import PropTypes from 'prop-types';

export const ShowIncremente = React.memo(( { increment }) => {
    console.log('Olaaaaaaa');
  return (
    <div>
        <button
        className='btn btn-success'
        onClick={ () => {
            increment( 5 );
        }}
        >Incrementar</button>
    </div>
  )
})

ShowIncremente.propTypes = {
    increment : PropTypes.func.isRequired
}