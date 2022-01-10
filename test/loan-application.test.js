import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';


const component = await fixture(html `<loan-application></loan-application>`);
const button = component.shadowRoot.querySelector('lion-button');

describe('LoanApplication', () => {
  it('component access', () => {
    expect(component).to.be.accessible; });
});
