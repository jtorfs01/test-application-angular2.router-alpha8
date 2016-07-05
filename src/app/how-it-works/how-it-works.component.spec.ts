/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { HowItWorksComponent } from './how-it-works.component';

describe('Component: HowItWorks', () => {
  it('should create an instance', () => {
    let component = new HowItWorksComponent();
    expect(component).toBeTruthy();
  });
});
