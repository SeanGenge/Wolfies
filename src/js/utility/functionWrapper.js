// Since react router dom somehow requires you to use hooks and hooks cannot be used on react classes, I am creating a wrapper for those classes to use some of the functionality from react router dom

import React from 'react';
import { useParams } from 'react-router-dom';

export function functionWrapper(Component) {
	return props => {
		return <Component {...props} params={useParams()} />;
	}
}