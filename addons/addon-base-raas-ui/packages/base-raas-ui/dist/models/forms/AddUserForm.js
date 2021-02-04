"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAddUserFormFields = getAddUserFormFields;
exports.getAddUserForm = getAddUserForm;

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
var addUserFormFields = {
  email: {
    label: 'Username',
    placeholder: 'Type email address as username for the user',
    extra: {
      explain: 'Username in email format'
    },
    rules: 'required|email|string'
  },
  identityProviderName: {
    label: 'Identity Provider',
    extra: {
      explain: 'Identity Provider for this user'
    }
  },
  projectId: {
    label: 'Project Id',
    extra: {
      explain: 'Select Project for this user'
    }
  },
  userRole: {
    label: 'UserRole',
    extra: {
      explain: "Select user's role"
    }
  },
  status: {
    label: 'Status',
    extra: {
      explain: 'Active users can log into the Research Portal',
      yesLabel: 'Active',
      noLabel: 'Inactive',
      yesValue: 'active',
      noValue: 'inactive'
    }
  }
};

function getAddUserFormFields() {
  return addUserFormFields;
}

function getAddUserForm() {
  return (0, _form.createForm)(addUserFormFields);
}
//# sourceMappingURL=AddUserForm.js.map