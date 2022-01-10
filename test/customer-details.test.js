import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/Customer/Customer-details.js';

const component = await fixture(html `<customer-details></customer-details>`);
const button = component.shadowRoot.querySelector('lion-button');
describe('customer details', () => {

  it('component access', () => {
    expect(component).to.be.accessible; });
 
    it('button action', () => {
     const action = Sinon.spy(component,"_toEmidetails")
     button.click();
     expect(action.calledOnce).to.be.false; });

});
