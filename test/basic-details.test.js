import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

const component = await fixture(html `<basic-details></basic-details>`);
const button = el.shadowRoot.querySelectorAll('lion-button');

describe('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files

 it('component access', () => {
   expect(component).to.be.accessible; });

it('button ')

});
