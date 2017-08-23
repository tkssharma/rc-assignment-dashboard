import React, { Component } from 'react';

const ResultListItem = function(props) {

	const {profile_picture,last_name,first_name,current_company,current_location,current_role,total_experience} = props.candidate;

	return (
		<div className="profile" onClick={e => props.selectCandidate(props.candidate,e)}>
			 <div className="profile-pic">
					<img src={profile_picture} className="img-responsive" />
			 </div>
			 <div className="details">
						<h3 className="details-name">{first_name} {last_name}</h3>
						<h3 className="details-txt">total experience {total_experience}</h3>
						<h4 className="details-txt">Company : {current_company}</h4>
						<h4 className="details-txt">Location : {current_location}</h4>
						<h4 className="details-txt">Role :{current_role}</h4>
			 </div>
		</div>
	)
};


export default ResultListItem;
