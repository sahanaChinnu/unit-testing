import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';
import Sinon from 'sinon';

 const component = await fixture(html `<loanemi-details></loanemi-details>`);
 const button = component.shadowRoot.querySelectorAll('lion-button');

describe('Loan EMI details', () => {

  it('component access', () => {
    expect(component).to.be.accessible; });
 
    it('button action', () => {
       const action = Sinon.spy(component,"_toBasicDetails")
     button[0].click();
     expect(action.calledOnce).to.be.true; });

     it('button action', () => {
            const action = Sinon.spy(component,"_toCustomer")
      button[1].click();
      expect(action.calledOnce).to.be.true; });
 });
