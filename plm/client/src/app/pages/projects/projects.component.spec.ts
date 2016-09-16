/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';

describe('Component: Projects', () => {
  it('should create an instance', () => {
    let component = new ProjectsComponent();
    expect(component).toBeTruthy();
  });
});
