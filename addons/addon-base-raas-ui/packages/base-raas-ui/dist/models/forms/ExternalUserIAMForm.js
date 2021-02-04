"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExternalUserIAMForm = getExternalUserIAMForm;
exports.getIAMFormFields = getIAMFormFields;

var _form = require("../../helpers/form");

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
function getIAMFormFields() {
  var isIAMRequired = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var rulesPrefix = isIAMRequired ? 'required|' : '';
  return [{
    name: 'accessKeyId',
    label: 'IAM User Access Key Id',
    placeholder: 'Access Key for your IAM user',
    rules: "".concat(rulesPrefix, "string|size:20")
  }, {
    name: 'secretAccessKey',
    label: 'IAM User Secret Access Key',
    placeholder: 'Secret access Key for your IAM user',
    rules: "".concat(rulesPrefix, "string|size:40")
  }, {
    name: 'region',
    label: 'AWS Region',
    placeholder: 'us-east-1',
    rules: "".concat(rulesPrefix, "string|regex:/^[a-z]{2}(-gov)?-[a-z]*-\\d$/")
  }, {
    name: 'pin',
    label: 'PIN',
    placeholder: 'A PIN or password to secure your IAM credentials',
    rules: 'required|string|between:4,16'
  }];
}

function getExternalUserIAMForm() {
  return (0, _form.createForm)(getIAMFormFields());
}
//# sourceMappingURL=ExternalUserIAMForm.js.map