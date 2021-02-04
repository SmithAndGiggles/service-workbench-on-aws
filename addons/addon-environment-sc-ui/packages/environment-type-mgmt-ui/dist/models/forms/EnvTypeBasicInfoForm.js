"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAddEnvTypeBasicInfoForm = getAddEnvTypeBasicInfoForm;

var _lodash = _interopRequireDefault(require("lodash"));

var _form = require("@aws-ee/base-ui/dist/helpers/form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
function getAddEnvTypeBasicInfoForm(envType) {
  var addEnvTypeBasicInfoFormFields = {
    name: {
      label: 'Name',
      placeholder: 'Name for this workspace type',
      extra: {
        explain: 'Easily identifiable name for this workspace type. ' + 'It must be an alpha numeric string starting with an alphabet and ' + 'may contain underscore ( _ ) and/or dash ( - ).'
      },
      value: _lodash["default"].get(envType, 'name') || '',
      rules: ['required', 'min:2', 'max:16383', 'regex:/^[a-zA-Z0-9_\\-]*/']
    },
    desc: {
      label: 'Description',
      placeholder: 'Description for this workspace type',
      extra: {
        explain: 'Description for this workspace type. Markdown syntax is supported'
      },
      value: _lodash["default"].get(envType, 'desc') || '',
      rules: 'max:8191|string'
    }
  };
  return (0, _form.createForm)(addEnvTypeBasicInfoFormFields);
} // eslint-disable-next-line import/prefer-default-export
//# sourceMappingURL=EnvTypeBasicInfoForm.js.map