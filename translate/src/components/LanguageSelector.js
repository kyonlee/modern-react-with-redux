import React from 'react';

import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
	static contextType = LanguageContext;

	render() {
		return (
			<div>
				Select a language:&nbsp;
				<i
					className="flag uk"
					onClick={() => this.context.onLanguageChange('english')}
				/>
				<i
					className="flag kr"
					onClick={() => this.context.onLanguageChange('korean')}
				/>
			</div>
		);
	}
}

export default LanguageSelector;
