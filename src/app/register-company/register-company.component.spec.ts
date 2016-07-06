/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { RegisterCompanyComponent } from './register-company.component';

describe('Component: RegisterCompany', () => {
  it('should create an instance', () => {
    let component = new RegisterCompanyComponent();
    expect(component).toBeTruthy();
  });
});
