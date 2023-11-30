class MyName extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <style>
          div:hover > span {
            margin-inline-start: 4px;
            transition: all 0.5s ease-out;
          }
      </style>
      <div>
        tom van der bijl<span>l</span>
      </div>
    `;
  }
}

customElements.define("my-name", MyName);
