/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License").
 *  You may not use this file except in compliance with the License.
 *  A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 *  or in the "license" file accompanying this file. This file is distributed
 *  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *  express or implied. See the License for the specific language governing
 *  permissions and limitations under the License.
 */
import _ from 'lodash';
import React from 'react';
import { observer } from 'mobx-react';
import { Table } from 'semantic-ui-react'; // expected props
// - rows (via props), an array of objects, [ { title, value }, { title, value }, ... ]
// - className (via props)

const Component = observer(({
  rows = [],
  className = ''
}) => {
  if (rows.length === 0) return null;
  return /*#__PURE__*/React.createElement(Table, {
    basic: "very",
    className: `animated ${className}`
  }, /*#__PURE__*/React.createElement(Table.Header, null, /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.HeaderCell, {
    width: 10
  }, "Property"), /*#__PURE__*/React.createElement(Table.HeaderCell, {
    width: 6
  }, "Value"))), /*#__PURE__*/React.createElement(Table.Body, null, _.map(rows, (item, index) => /*#__PURE__*/React.createElement(Table.Row, {
    key: index
  }, /*#__PURE__*/React.createElement(Table.Cell, {
    width: 10
  }, item.title), /*#__PURE__*/React.createElement(Table.Cell, {
    width: 6
  }, convert(item.value))))));
});

function convert(value) {
  return _.isNil(value) ? 'Not Provided' : value.toString();
}

export default Component;
//# sourceMappingURL=PropertyTable.js.map