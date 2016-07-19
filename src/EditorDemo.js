/* @flow */
import React, { Component } from 'react';
import RichTextEditor, { createEmptyValue, EditorValue } from './RichTextEditor';
import { convertToRaw } from 'draft-js';
import autobind from 'class-autobind';

type Props = {};
type State = {
  value: EditorValue;
  format: string;
};

export default class EditorDemo extends Component {
  props:Props;
  state:State;

  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      value: createEmptyValue(),
      format: 'html'
    };
  }

  handleFileUpload(cb, event) {
    var reader = new FileReader();

    reader.addEventListener("load", function () {
      cb(reader.result);
    }, false);

    const file = event.target.files[0];

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  render():React.Element {
    let { value, format } = this.state;

    return (
      <div className="editor-demo">
        <div className="row">
          <p>این دموی درفت.جی‌اس ایوند است.</p>
        </div>
        <div className="row">
          <RichTextEditor
            value={value}
            onChange={this._onChange}
            onFileChange={this.handleFileUpload}
            className="react-rte-demo"
            placeholder="یه چیزی بگو"
            toolbarClassName="demo-toolbar"
            editorClassName="demo-editor"
          />
        </div>
        <div className="row">
          <label className="radio-item">
            <input
              type="radio"
              name="format"
              value="html"
              checked={format === 'html'}
              onChange={this._onChangeFormat}
            />
            <span>اچ‌تی‌ام‌ال</span>
          </label>
          <label className="radio-item">
            <input
              type="radio"
              name="format"
              value="markdown"
              checked={format === 'markdown'}
              onChange={this._onChangeFormat}
            />
            <span>مارک‌داون</span>
          </label>
        </div>
        <div className="row">
          <textarea
            className="source"
            placeholder="Editor Source"
            value={value.toString(format)}
            onChange={this._onChangeSource}
          />
        </div>
        <div className="row btn-row">
          <span className="label">Debugging:</span>
          <button className="btn" onClick={this._logState}>Log Content State</button>
          <button className="btn" onClick={this._logStateRaw}>Log Raw</button>
        </div>
      </div>
    );
  }

  _logState() {
    let editorState = this.state.value.getEditorState();
    let contentState = window.contentState = editorState.getCurrentContent().toJS();
    console.log(contentState);
  }

  _logStateRaw() {
    let editorState = this.state.value.getEditorState();
    let contentState = editorState.getCurrentContent();
    let rawContentState = window.rawContentState = convertToRaw(contentState);
    console.log(JSON.stringify(rawContentState));
  }

  _onChange(value:EditorValue) {
    this.setState({ value });
  }

  _onChangeSource(event:Object) {
    let source = event.target.value;
    let oldValue = this.state.value;
    this.setState({
      value: oldValue.setContentFromString(source, this.state.format),
    });
  }

  _onChangeFormat(event:Object) {
    this.setState({ format: event.target.value });
  }
}
