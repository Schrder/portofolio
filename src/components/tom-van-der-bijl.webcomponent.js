class MyName extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <style>
        :host {
        }
      </style>
      <span>Dummy</span>
    `;
  }
}

customElements.define("my-name", MyName);
