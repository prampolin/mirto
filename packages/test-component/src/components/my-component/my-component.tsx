import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
