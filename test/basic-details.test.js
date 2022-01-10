import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

const component = await fixture(html `<basic-details></basic-details>`);
const button = component.shadowRoot.querySelectorAll('lion-button');

describe('Basic details', () => {
  
 it('component access', () => {
   expect(component).to.be.accessible; });

   it('button action', () => {
    const action = Sinon.spy(component,"_toDashboard")
    button[0].click();
    expect(action.calledOnce).to.be.false; });

    // it('button action1', () => {
    //   const action = Sinon.spy(component,"_captureDetails")
    //   button[1].click();
    //   expect(action.calledOnce).to.be.false; });

});
