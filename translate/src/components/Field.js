import React from 'react';

import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
	static contextType = LanguageContext;

	render() {
		const text = this.context.language === 'english' ? 'Name' : '이름';

		return (
			<div className="field">
				<label>{text}</label>
				<input type="text" />
			</div>
		);
	}
}

export default Field;
