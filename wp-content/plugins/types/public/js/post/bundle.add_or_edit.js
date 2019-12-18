!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t){e.exports=window.wp.components},function(e,t){e.exports=ReactDOM},,,function(e,t,n){},,,,,function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),i=n(0);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=wp.element.Component,d=wp.i18n.__,f=WPV_Toolset||{},y=function(e){window.location=f.Utils.updateUrlQuery("toolset-switch-to-classic-editor",e?"revert_to_previous_content":"keep_current_content",f.Utils.updateUrlQuery("toolset-switch-to-block-editor"))},b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,u(t).call(this,e))).state={isOpen:!1},n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=this;return React.createElement("div",null,React.createElement(i.Button,{isDefault:!0,isLarge:!0,onClick:function(){return e.setState({isOpen:!0})}},d("Use Classic Editor","wpcf")),this.state.isOpen?React.createElement(i.Modal,{className:"types-editor-switch",title:d("Use Classic Editor","wpcf"),onRequestClose:function(){return e.setState({isOpen:!1})}},f.Utils.getParameterByName("post")?React.createElement("div",null,React.createElement("p",{className:"types-editor-switch__lead"},d("If you've encountered problems using the Block Editor, you can switch to the Classic one.","wpcf")),React.createElement("p",null,d("You can either revert to the post content before you started using the Block Editor, or you can keep the current post content (which will most probably include HTML comments added by the Block Editor).","wpcf")),React.createElement("p",null,d("Please note that reverting the post content to its previous state cannot be undone if the current post type doesn't have post revisions.","wpcf")),React.createElement("div",{className:"types-editor-switch__buttons"},React.createElement(i.Button,{isDefault:!0,className:"types-editor-switch__buttons-cancel",onClick:function(){return e.setState({isOpen:!1})}},d("Cancel","wpcf")),React.createElement(i.Button,{isPrimary:!0,onClick:function(){return y(!0)}},d("Revert to post content before Block Editor","wpcf")),React.createElement(i.Button,{isPrimary:!0,onClick:function(){return y(!1)}},d("Keep current content","wpcf")))):React.createElement("div",null,React.createElement("p",{className:"types-editor-switch__lead"},d("Please save your post first before switching the editor mode.","wpcf")))):null)}}])&&a(n.prototype,o),r&&a(n,r),t}(p),h=(n(4),wp.data.select("core/editor").getCurrentPostId),m=types_post_add_or_edit_l10n||{};jQuery(document).ready((function(){var e=setInterval((function(){var e=jQuery("#editor.block-editor__container");0===e.length&&t(),0!==e.find(".edit-post-header-toolbar").length&&(m.editorMode&&"per_post"===m.editorMode&&function(){var e=jQuery("#editor.block-editor__container .edit-post-header-toolbar");if(0!==e.length){var t="types-switch-to-classic-editor-button-placeholder";e.append('<div id="'.concat(t,'"></div>')),r.a.render(React.createElement(b,null),document.querySelector("#"+t))}}(),m.needsReloadAfterSaving&&jQuery(document).on("click",".edit-post-header__settings .editor-post-publish-button, .edit-post-header__settings .editor-post-save-draft, .edit-post-header__settings .editor-post-publish-panel__toggle",(function(){var e=setInterval((function(){var t=wp.data.select("core/editor");if(!t.isSavingPost()&&!t.isAutosavingPost()&&t.didPostSaveRequestSucceed()){clearInterval(e);var n=document.getElementById("types_displayed_field_group_slugs"),o=n?JSON.parse(n.innerHTML):{},r=Object.keys(o).map((function(e){return o[e]})),i={action:m.reevaluateFieldGroup.actionName,wpnonce:m.reevaluateFieldGroup.nonce,postId:h(),displayedFieldGroups:r};jQuery.post({async:!0,url:window.ajaxurl,data:i,success:function(e){e.hasOwnProperty("data")&&e.data.hasOwnProperty("fieldGroupsChanged")&&e.data.fieldGroupsChanged&&wp.data.dispatch("core/notices").createNotice("warning",m.strings.displayConditionsMightHaveChanged,{isDismissible:!0,actions:[{url:"",label:m.strings.reloadPage}]})}})}}),1e3)})),t())}),1),t=function(){clearInterval(e)}}))}]);