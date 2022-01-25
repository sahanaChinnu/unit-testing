import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

const errorComponent = await fixture(html `<loan-error></loan-error>`);
const errorButton = errorComponent.shadowRoot.querySelector('lion-button');
const successComponent = await fixture(html `<loan-success></loan-success>`);
const successbutton = successComponent.shadowRoot.querySelector('lion-button');

describe('Success screen ', () => {

  it('component access', () => {
    expect(successComponent).to.be.accessible; });
 
    it('button action', () => {
     const action = Sinon.spy(successComponent,"_toHome")
     successbutton.click();
     expect(action.calledOnce).to.be.true; });

});

describe('error screen', () => {
  it('component access', () => {
    expect(errorComponent).to.be.accessible; });
 
    it('button action', () => {
     const action = Sinon.spy(errorComponent,"_toHome")
     errorButton.click();
     expect(action.calledOnce).to.be.true; });
});
