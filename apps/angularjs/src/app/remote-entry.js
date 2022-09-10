import angular from 'angular';

export class MfeAngularJs extends HTMLElement {
  connectedCallback() {
    const root = document.createElement('div');
    root.setAttribute('ui-view', '');

    this.appendChild(root);
    angular.bootstrap(root, ['app']);
  }
}

customElements.define('angularjs-module-root', MfeAngularJs);
