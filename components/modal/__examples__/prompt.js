define(['exports', 'react', 'create-react-class', '../../../../components/icon-settings', '../../../../components/modal', '../../../../components/button'], function (exports, _react, _createReactClass, _iconSettings, _modal, _button) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var _createReactClass2 = _interopRequireDefault(_createReactClass);

	var _iconSettings2 = _interopRequireDefault(_iconSettings);

	var _modal2 = _interopRequireDefault(_modal);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var Example = (0, _createReactClass2.default)({
		displayName: 'ModalExample',

		getInitialState: function getInitialState() {
			return {
				isOpen: false
			};
		},
		toggleOpen: function toggleOpen() {
			this.setState({ isOpen: !this.state.isOpen });
		},
		render: function render() {
			return _react2.default.createElement(
				_iconSettings2.default,
				{ iconPath: '/assets/icons' },
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_button2.default, { label: 'Open Prompt Variant', onClick: this.toggleOpen }),
					_react2.default.createElement(
						_modal2.default,
						{
							dismissible: false,
							footer: [_react2.default.createElement(_button2.default, { key: 'promptBtn', label: 'Got it', onClick: this.toggleOpen })],
							isOpen: this.state.isOpen,
							onRequestClose: this.toggleOpen,
							prompt: 'error',
							size: 'medium',
							title: _react2.default.createElement(
								'span',
								null,
								'Service Unavailable'
							)
						},
						_react2.default.createElement(
							'div',
							{ className: 'slds-m-around--medium' },
							'The service you"re trying to reach is unavailable due to limited conectivity. Please restart the application or contact your system administrator for assistance.'
						)
					)
				)
			);
		}
	}); // `~` is replaced with design-system-react at runtime
	exports.default = Example;
});