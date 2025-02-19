import{i,c as h,S as p,H as b,x as c,e as u,r as m,s as v,t as _}from"./index-DDrsSLl_.js";const g=i`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }
`;var f=i`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,n=class extends p{constructor(){super(...arguments),this.hasSlotController=new b(this,"footer","header","image")}render(){return c`
      <div
        part="base"
        class=${u({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};n.styles=[h,f];n.define("sl-card");var y=Object.defineProperty,w=Object.getOwnPropertyDescriptor,x=(l,a,o,e)=>{for(var r=e>1?void 0:e?w(a,o):a,d=l.length-1,s;d>=0;d--)(s=l[d])&&(r=(e?s(a,o,r):s(r))||r);return e&&r&&y(a,o,r),r};let t=class extends m{render(){return c`
      <app-header ?enableBack="${!0}"></app-header>

      <main>
        <h2>About Page</h2>

        <sl-card>
          <h2>Did you know?</h2>

          <p>PWAs have access to many useful APIs in modern browsers! These
            APIs have enabled many new types of apps that can be built as PWAs, such as advanced graphics editing apps, games,
            apps that use machine learning and more!
          </p>

          <p>Check out <a
              href="https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/handle-files">these
              docs</a> to learn more about the advanced features that you can use in your PWA</p>
        </sl-card>
      </main>
    `}};t.styles=[v,g];t=x([_("app-about")],t);export{t as AppAbout};
//# sourceMappingURL=app-about-Cetxyugb.js.map
