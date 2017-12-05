define(['exports', 'react', 'create-react-class', '../../../../components/data-table', '../../../../components/data-table/column', '../../../../components/data-table/cell', '../../../../components/icon-settings'], function (exports, _react, _createReactClass, _dataTable, _column, _cell, _iconSettings) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var _createReactClass2 = _interopRequireDefault(_createReactClass);

	var _dataTable2 = _interopRequireDefault(_dataTable);

	var _column2 = _interopRequireDefault(_column);

	var _cell2 = _interopRequireDefault(_cell);

	var _iconSettings2 = _interopRequireDefault(_iconSettings);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function _objectWithoutProperties(obj, keys) {
		var target = {};

		for (var i in obj) {
			if (keys.indexOf(i) >= 0) continue;
			if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
			target[i] = obj[i];
		}

		return target;
	}

	var CustomDataTableCell = function CustomDataTableCell(_ref) {
		var children = _ref.children,
		    props = _objectWithoutProperties(_ref, ['children']);

		return _react2.default.createElement(
			_cell2.default,
			props,
			_react2.default.createElement(
				'a',
				{
					href: 'javascript:void(0);',
					onClick: function onClick(event) {
						event.preventDefault();
					}
				},
				children
			)
		);
	};
	CustomDataTableCell.displayName = _cell2.default.displayName;

	var columns = [_react2.default.createElement(
		_column2.default,
		{
			key: 'opportunity',
			label: 'Opportunity Name',
			property: 'opportunityName'
		},
		_react2.default.createElement(CustomDataTableCell, null)
	), _react2.default.createElement(_column2.default, {
		key: 'account-name',
		label: 'Account Name',
		property: 'accountName'
	}), _react2.default.createElement(_column2.default, {
		key: 'close-date',
		label: 'Close Date',
		property: 'closeDate'
	}), _react2.default.createElement(_column2.default, {
		key: 'stage',
		label: 'Stage',
		property: 'stage'
	}), _react2.default.createElement(_column2.default, {
		key: 'confidence',
		label: 'Confidence',
		property: 'confidence'
	}), _react2.default.createElement(_column2.default, {
		key: 'amount',
		label: 'Amount',
		property: 'amount'
	}), _react2.default.createElement(
		_column2.default,
		{
			key: 'contact',
			label: 'Contact',
			property: 'contact'
		},
		_react2.default.createElement(CustomDataTableCell, null)
	)];

	var Example = (0, _createReactClass2.default)({
		displayName: 'DataTableExample',

		getInitialState: function getInitialState() {
			return {
				items: [{
					id: '8IKZHZZV80',
					opportunityName: 'Cloudhub',
					accountName: 'Cloudhub',
					closeDate: '4/14/2015',
					stage: 'Prospecting',
					confidence: '20%',
					amount: '$25k',
					contact: 'jrogers@cloudhub.com'
				}, {
					id: '5GJOOOPWU7',
					opportunityName: 'Cloudhub + Anypoint Connectors',
					accountName: 'Cloudhub',
					closeDate: '4/14/2015',
					stage: 'Prospecting',
					confidence: '20%',
					amount: '$25k',
					contact: 'jrogers@cloudhub.com'
				}, {
					id: '8IKZHZZV81',
					opportunityName: 'Cloudhub',
					accountName: 'Cloudhub',
					closeDate: '4/14/2015',
					stage: 'Prospecting',
					confidence: '20%',
					amount: '$25k',
					contact: 'jrogers@cloudhub.com'
				}]
			};
		},
		render: function render() {
			return _react2.default.createElement(
				_iconSettings2.default,
				{ iconPath: '/assets/icons' },
				_react2.default.createElement(
					'div',
					{ style: { overflow: 'auto' } },
					_react2.default.createElement(
						'h3',
						{ className: 'slds-text-heading--medium slds-m-vertical--medium' },
						'Default Fluid Layout'
					),
					_react2.default.createElement(
						_dataTable2.default,
						{
							items: this.state.items,
							id: 'DataTableExample-1-default'
						},
						columns
					),
					_react2.default.createElement(
						'h3',
						{ className: 'slds-text-heading--medium slds-m-vertical--medium' },
						'Striped'
					),
					_react2.default.createElement(
						_dataTable2.default,
						{
							items: this.state.items,
							id: 'DataTableExample-1-striped',
							striped: true
						},
						columns
					),
					_react2.default.createElement(
						'h3',
						{ className: 'slds-text-heading--medium slds-m-vertical--medium' },
						'No Row Hover'
					),
					_react2.default.createElement(
						_dataTable2.default,
						{
							items: this.state.items,
							id: 'DataTableExample-noRowHover',
							noRowHover: true
						},
						columns
					),
					_react2.default.createElement(
						'h3',
						{ className: 'slds-text-heading--medium slds-m-vertical--medium' },
						'Column Bordered'
					),
					_react2.default.createElement(
						_dataTable2.default,
						{
							columnBordered: true,
							items: this.state.items,
							id: 'DataTableExample-columnBordered'
						},
						columns
					),
					_react2.default.createElement(
						'h3',
						{ className: 'slds-text-heading--medium slds-m-vertical--medium' },
						'Compact'
					),
					_react2.default.createElement(
						_dataTable2.default,
						{
							compact: true,
							items: this.state.items,
							id: 'DataTableExample-compact'
						},
						columns
					)
				)
			);
		}
	});

	exports.default = Example;
});