// ModalIndicator.js

'use strict';

import React, {Component} from "react";
import {View} from 'react-native';

import Overlay from '../Overlay/Overlay';
import ModalIndicatorView from './ModalIndicatorView';

// let miKey = null;
let miOverlay = null;

export default class ModalIndicator extends Overlay {

  static IndicatorView = ModalIndicatorView;

  static show(text) {
    if (miOverlay) {
      miOverlay.text = text;
      return;
    }
    // miKey = super.show(
    //   <this.IndicatorView text={text} ref={v => miOverlay = v} />
    // );
    let key = super.show(
      <this.IndicatorView text={text} ref={v => miOverlay = v} />
    );
    return key
  }

  static hide(key) {
    // if (miKey) {
    //   super.hide(miKey);
    //   miKey = null;
    //   miOverlay = null;
    // }
    if (key) {
      super.hide(key);
      miOverlay = null;
    }
  }

}
