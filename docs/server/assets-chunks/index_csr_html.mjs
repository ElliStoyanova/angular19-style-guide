export default `<!doctype html>
<html lang="en" data-beasties-container="">
<head><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <meta charset="utf-8">
  <title>Angular19StyleGuideApp</title>
  <base href="/angular19-style-guide/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <style>@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmSU5fCRc4EsA.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmSU5fABc4EsA.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmSU5fCBc4EsA.woff2) format('woff2');unicode-range:U+1F00-1FFF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmSU5fBxc4EsA.woff2) format('woff2');unicode-range:U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmSU5fCxc4EsA.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmSU5fChc4EsA.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmSU5fBBc4.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');unicode-range:U+1F00-1FFF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');unicode-range:U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmEU9fCRc4EsA.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmEU9fABc4EsA.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmEU9fCBc4EsA.woff2) format('woff2');unicode-range:U+1F00-1FFF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmEU9fBxc4EsA.woff2) format('woff2');unicode-range:U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmEU9fCxc4EsA.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmEU9fChc4EsA.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmEU9fBBc4.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}</style>
  <style>@font-face{font-family:'Material Icons';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v142/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');}.material-icons{font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased;}</style>
<style>html{--mdc-text-button-container-height:32px;--mdc-filled-button-container-height:32px;--mdc-protected-button-container-height:32px;--mdc-outlined-button-container-height:32px;--mat-text-button-touch-target-display:block;--mat-filled-button-touch-target-display:block;--mat-protected-button-touch-target-display:block;--mat-outlined-button-touch-target-display:block;--mdc-filled-button-container-shape:4px;--mat-form-field-container-height:32px;--mat-form-field-container-vertical-padding:4px;--mat-toolbar-standard-height:50px}html{--mat-sys-on-surface:initial}*,:before,:after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }html{--mat-sys-background:#f9f9ff;--mat-sys-error:#ba1a1a;--mat-sys-error-container:#ffdad6;--mat-sys-inverse-on-surface:#eff0f9;--mat-sys-inverse-primary:#a5c8ff;--mat-sys-inverse-surface:#2d3037;--mat-sys-on-background:#181c21;--mat-sys-on-error:#ffffff;--mat-sys-on-error-container:#410002;--mat-sys-on-primary:#ffffff;--mat-sys-on-primary-container:#001c3a;--mat-sys-on-primary-fixed:#001c3a;--mat-sys-on-primary-fixed-variant:#004786;--mat-sys-on-secondary:#ffffff;--mat-sys-on-secondary-container:#001c3a;--mat-sys-on-secondary-fixed:#001c3a;--mat-sys-on-secondary-fixed-variant:#2f486a;--mat-sys-on-surface:#181c21;--mat-sys-on-surface-variant:#414752;--mat-sys-on-tertiary:#ffffff;--mat-sys-on-tertiary-container:#320046;--mat-sys-on-tertiary-fixed:#320046;--mat-sys-on-tertiary-fixed-variant:#6b2687;--mat-sys-outline:#717783;--mat-sys-outline-variant:#c1c6d4;--mat-sys-primary:#005faf;--mat-sys-primary-container:#d4e3ff;--mat-sys-primary-fixed:#d4e3ff;--mat-sys-primary-fixed-dim:#a5c8ff;--mat-sys-scrim:#000000;--mat-sys-secondary:#475f84;--mat-sys-secondary-container:#d4e3ff;--mat-sys-secondary-fixed:#d4e3ff;--mat-sys-secondary-fixed-dim:#afc8f1;--mat-sys-shadow:#000000;--mat-sys-surface:#f9f9ff;--mat-sys-surface-bright:#f9f9ff;--mat-sys-surface-container:#ecedf6;--mat-sys-surface-container-high:#e6e8f0;--mat-sys-surface-container-highest:#e0e2ea;--mat-sys-surface-container-low:#f2f3fc;--mat-sys-surface-container-lowest:#ffffff;--mat-sys-surface-dim:#d8dae2;--mat-sys-surface-tint:#005faf;--mat-sys-surface-variant:#dde2f0;--mat-sys-tertiary:#8540a1;--mat-sys-tertiary-container:#f9d8ff;--mat-sys-tertiary-fixed:#f9d8ff;--mat-sys-tertiary-fixed-dim:#edb1ff;--mat-sys-neutral-variant20:#2b313b;--mat-sys-neutral10:#181c21;--mat-sys-level0:0px 0px 0px 0px rgba(0, 0, 0, .2), 0px 0px 0px 0px rgba(0, 0, 0, .14), 0px 0px 0px 0px rgba(0, 0, 0, .12);--mat-sys-level1:0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12);--mat-sys-level2:0px 3px 3px -2px rgba(0, 0, 0, .2), 0px 3px 4px 0px rgba(0, 0, 0, .14), 0px 1px 8px 0px rgba(0, 0, 0, .12);--mat-sys-level3:0px 3px 5px -1px rgba(0, 0, 0, .2), 0px 6px 10px 0px rgba(0, 0, 0, .14), 0px 1px 18px 0px rgba(0, 0, 0, .12);--mat-sys-level4:0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12);--mat-sys-level5:0px 7px 8px -4px rgba(0, 0, 0, .2), 0px 12px 17px 2px rgba(0, 0, 0, .14), 0px 5px 22px 4px rgba(0, 0, 0, .12);--mat-sys-body-large:400 1rem / 1.5rem Roboto;--mat-sys-body-large-font:Roboto;--mat-sys-body-large-line-height:1.5rem;--mat-sys-body-large-size:1rem;--mat-sys-body-large-tracking:.031rem;--mat-sys-body-large-weight:400;--mat-sys-body-medium:400 .875rem / 1.25rem Roboto;--mat-sys-body-medium-font:Roboto;--mat-sys-body-medium-line-height:1.25rem;--mat-sys-body-medium-size:.875rem;--mat-sys-body-medium-tracking:.016rem;--mat-sys-body-medium-weight:400;--mat-sys-body-small:400 .75rem / 1rem Roboto;--mat-sys-body-small-font:Roboto;--mat-sys-body-small-line-height:1rem;--mat-sys-body-small-size:.75rem;--mat-sys-body-small-tracking:.025rem;--mat-sys-body-small-weight:400;--mat-sys-display-large:400 3.562rem / 4rem Roboto;--mat-sys-display-large-font:Roboto;--mat-sys-display-large-line-height:4rem;--mat-sys-display-large-size:3.562rem;--mat-sys-display-large-tracking:-.016rem;--mat-sys-display-large-weight:400;--mat-sys-display-medium:400 2.812rem / 3.25rem Roboto;--mat-sys-display-medium-font:Roboto;--mat-sys-display-medium-line-height:3.25rem;--mat-sys-display-medium-size:2.812rem;--mat-sys-display-medium-tracking:0;--mat-sys-display-medium-weight:400;--mat-sys-display-small:400 2.25rem / 2.75rem Roboto;--mat-sys-display-small-font:Roboto;--mat-sys-display-small-line-height:2.75rem;--mat-sys-display-small-size:2.25rem;--mat-sys-display-small-tracking:0;--mat-sys-display-small-weight:400;--mat-sys-headline-large:400 2rem / 2.5rem Roboto;--mat-sys-headline-large-font:Roboto;--mat-sys-headline-large-line-height:2.5rem;--mat-sys-headline-large-size:2rem;--mat-sys-headline-large-tracking:0;--mat-sys-headline-large-weight:400;--mat-sys-headline-medium:400 1.75rem / 2.25rem Roboto;--mat-sys-headline-medium-font:Roboto;--mat-sys-headline-medium-line-height:2.25rem;--mat-sys-headline-medium-size:1.75rem;--mat-sys-headline-medium-tracking:0;--mat-sys-headline-medium-weight:400;--mat-sys-headline-small:400 1.5rem / 2rem Roboto;--mat-sys-headline-small-font:Roboto;--mat-sys-headline-small-line-height:2rem;--mat-sys-headline-small-size:1.5rem;--mat-sys-headline-small-tracking:0;--mat-sys-headline-small-weight:400;--mat-sys-label-large:500 .875rem / 1.25rem Roboto;--mat-sys-label-large-font:Roboto;--mat-sys-label-large-line-height:1.25rem;--mat-sys-label-large-size:.875rem;--mat-sys-label-large-tracking:.006rem;--mat-sys-label-large-weight:500;--mat-sys-label-large-weight-prominent:700;--mat-sys-label-medium:500 .75rem / 1rem Roboto;--mat-sys-label-medium-font:Roboto;--mat-sys-label-medium-line-height:1rem;--mat-sys-label-medium-size:.75rem;--mat-sys-label-medium-tracking:.031rem;--mat-sys-label-medium-weight:500;--mat-sys-label-medium-weight-prominent:700;--mat-sys-label-small:500 .688rem / 1rem Roboto;--mat-sys-label-small-font:Roboto;--mat-sys-label-small-line-height:1rem;--mat-sys-label-small-size:.688rem;--mat-sys-label-small-tracking:.031rem;--mat-sys-label-small-weight:500;--mat-sys-title-large:400 1.375rem / 1.75rem Roboto;--mat-sys-title-large-font:Roboto;--mat-sys-title-large-line-height:1.75rem;--mat-sys-title-large-size:1.375rem;--mat-sys-title-large-tracking:0;--mat-sys-title-large-weight:400;--mat-sys-title-medium:500 1rem / 1.5rem Roboto;--mat-sys-title-medium-font:Roboto;--mat-sys-title-medium-line-height:1.5rem;--mat-sys-title-medium-size:1rem;--mat-sys-title-medium-tracking:.009rem;--mat-sys-title-medium-weight:500;--mat-sys-title-small:500 .875rem / 1.25rem Roboto;--mat-sys-title-small-font:Roboto;--mat-sys-title-small-line-height:1.25rem;--mat-sys-title-small-size:.875rem;--mat-sys-title-small-tracking:.006rem;--mat-sys-title-small-weight:500;--mat-sys-corner-extra-large:28px;--mat-sys-corner-extra-large-top:28px 28px 0 0;--mat-sys-corner-extra-small:4px;--mat-sys-corner-extra-small-top:4px 4px 0 0;--mat-sys-corner-full:9999px;--mat-sys-corner-large:16px;--mat-sys-corner-large-end:0 16px 16px 0;--mat-sys-corner-large-start:16px 0 0 16px;--mat-sys-corner-large-top:16px 16px 0 0;--mat-sys-corner-medium:12px;--mat-sys-corner-none:0;--mat-sys-corner-small:8px;--mat-sys-dragged-state-layer-opacity:.16;--mat-sys-focus-state-layer-opacity:.12;--mat-sys-hover-state-layer-opacity:.08;--mat-sys-pressed-state-layer-opacity:.12}html,body{height:100%}body{margin:0;font-family:Roboto,Helvetica Neue,sans-serif}</style><link rel="stylesheet" href="styles-CLDZOYCA.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-CLDZOYCA.css"></noscript></head>
<body class="mat-typography" ngcm="">
  <app-root></app-root>
<link rel="modulepreload" href="chunk-YX3RQBKV.js"><script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-UONBUIAQ.js" type="module"></script></body>
</html>
`;