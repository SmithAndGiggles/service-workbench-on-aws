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
import { observer, inject } from 'mobx-react';
import { decorate, action, runInAction, observable } from 'mobx';
import { withRouter } from 'react-router-dom';
import { Button, Header, Dimmer, Loader } from 'semantic-ui-react';
import { displayError, displaySuccess } from '@aws-ee/base-ui/dist/helpers/notification';
import { gotoFn } from '@aws-ee/base-ui/dist/helpers/routing';
import getUIState from '../../../workflow-common/component-states/WorkflowCommonCardState';
import WorkflowTemplateCardTabs from '../../../workflow-templates/WorkflowTemplateCardTabs'; // expected props
// - editor (via prop) an instance of the WorkflowDraftEditor model
// - uiEventBus (via props)
// - onCancel (via props)
// - location (from react router)

class WorkflowDraftPublisher extends React.Component {
  constructor(props) {
    super(props);

    this.handleCancel = event => {
      event.preventDefault();
      event.stopPropagation();
      this.processing = false;
      const onCancel = this.props.onCancel || _.noop;
      onCancel();
    };

    this.handlePrevious = event => {
      event.preventDefault();
      event.stopPropagation();
      this.processing = false;
      this.getEditor().previousPage();
    };

    this.handlePublish = async event => {
      event.preventDefault();
      event.stopPropagation();
      const editor = this.getEditor();
      const {
        draft
      } = editor;
      const goto = gotoFn(this);
      this.processing = true;

      try {
        const publishResult = await editor.publish(draft);
        runInAction(() => {
          this.processing = false;
        }); // TODO examine the publishResult and figure out if we have validation errors

        if (publishResult.hasErrors) {
          throw new Error('There were validation errors in your submission');
        }

        const eventBus = this.getUiEventBus();
        await eventBus.fireEvent('workflowPublished', publishResult.workflow);
        displaySuccess('The workflow draft is published successfully');
        goto('/workflows/published');
        return;
      } catch (error) {
        runInAction(() => {
          this.processing = false;
        });
        displayError(error);
      }
    };

    runInAction(() => {
      this.processing = false;
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  getUiEventBus() {
    return this.props.uiEventBus;
  }

  getState() {
    const version = this.getVersion();
    return getUIState(`${version.id}-workflow-draft-publish-page`);
  } // Return WorkflowDraftEditor


  getEditor() {
    return this.props.editor;
  } // Returns WorkflowVersion


  getVersion() {
    return this.getEditor().version;
  }

  render() {
    const processing = this.processing;
    const version = this.getVersion();
    const uiState = this.getState();
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Dimmer.Dimmable, {
      dimmed: processing
    }, /*#__PURE__*/React.createElement(Dimmer, {
      active: processing,
      inverted: true
    }, /*#__PURE__*/React.createElement(Loader, {
      inverted: true
    }, "Processing")), /*#__PURE__*/React.createElement(Header, {
      as: "h3",
      color: "grey",
      className: "mt0 mb3"
    }, "Review & Publish"), /*#__PURE__*/React.createElement(WorkflowTemplateCardTabs, {
      template: version,
      uiState: uiState,
      className: "mb4 mt0"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      floated: "right",
      color: "teal",
      disabled: processing,
      className: "ml2",
      content: "Publish",
      onClick: this.handlePublish
    }), /*#__PURE__*/React.createElement(Button, {
      floated: "right",
      icon: "left arrow",
      labelPosition: "left",
      disabled: processing,
      className: "ml3",
      content: "previous",
      onClick: this.handlePrevious
    }), /*#__PURE__*/React.createElement(Button, {
      floated: "left",
      disabled: processing,
      onClick: this.handleCancel
    }, "Cancel")));
  }

} // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


decorate(WorkflowDraftPublisher, {
  handleCancel: action,
  handlePublish: action,
  handlePrevious: action,
  processing: observable
});
export default inject('uiEventBus')(withRouter(observer(WorkflowDraftPublisher)));
//# sourceMappingURL=WorkflowDraftPublisher.js.map