"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExternalUserPinForm = getExternalUserPinForm;
exports.getExternalUserPinFormFields = getExternalUserPinFormFields;

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
function getExternalUserPinFormFields() {
  return [{
    name: 'pin',
    label: 'PIN',
    placeholder: 'A PIN or password to secure your IAM credentials',
    rules: 'required|string|between:4,16'
  }];
}

function getExternalUserPinForm() {
  return (0, _form.createForm)(getExternalUserPinFormFields());
}
//# sourceMappingURL=ExternalUserPinForm.js.map