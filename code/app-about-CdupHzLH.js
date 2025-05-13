import{i as l,c as h,S as p,H as b,e as u,x as i,a as m,s as g,t as v}from"./index-DrK_Ike8.js";const _=l`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }
`;var f=l`
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
`,c=class extends p{constructor(){super(...arguments),this.hasSlotController=new b(this,"footer","header","image")}render(){return i`
      <div
        part="base"
        class=${u({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};c.styles=[h,f];c.define("sl-card");var y=Object.getOwnPropertyDescriptor,w=(o,d,n,s)=>{for(var r=s>1?void 0:s?y(d,n):d,a=o.length-1,t;a>=0;a--)(t=o[a])&&(r=t(r)||r);return r};let e=class extends m{render(){return i`
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
    `}};e.styles=[g,_];e=w([v("app-about")],e);export{e as AppAbout};
//# sourceMappingURL=app-about-CdupHzLH.js.map
