import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest';
const GuestList = (props) => 
			<ul>
        {props.guests
        	.filter( guest => !props.isFiltered || guest.isConfirmed)
        	.map((guest,index) => 
        	<Guest
        	handleConfirmation={() => props.toggleConfirmationAt(index)}
        	handleEditing={() => props.toggleEditingAt(index)}
        	name={guest.name}
        	key={index}
        	isEditing={guest.isEditing}
        	isConfirmed={guest.isConfirmed}
        	editing={guest.editing}
        	setName={(text) => props.setNameAt(text,index)}
        	removeGuest={() => props.removeGuestAt(index)} />
        )}
      </ul>;

GuestList.propTypes = {
			guests: PropTypes.array.isRequired,
			toggleConfirmationAt: PropTypes.func.isRequired,
			toggleEditingAt: PropTypes.func.isRequired,
			setNameAt: PropTypes.func.isRequired,
			isFiltered: PropTypes.func.isRequired,
			removeGuestAt: PropTypes.func.isRequired
		};

export default GuestList;