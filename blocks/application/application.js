import { getApplication } from '../../scripts/pim.js';

export default function decorate(block) {
  const applicationID = block.querySelector('p');
  const application = getApplication(applicationID.innerHTML);
  block.querySelector('p').innerHTML = "Application: " + applicationID.innerHTML;
}