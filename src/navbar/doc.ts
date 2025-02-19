import { registerComponent } from "@nextrap/doc-visualizer";

import { LogoLeuffen } from "./doc-assets/leuffen";
import { LogoOchza } from "./doc-assets/ochza";
import { LogoAlvico } from "./doc-assets/alvico";
import { LogoDrMueller } from "./doc-assets/drmueller";

registerComponent({
    package: "navbar",
    description: "Navbar component",
    title: "NXA Navbar Component",
    examples: [
        {
            title: "Navbar Examples",
            description: "Examples of navbars",
            lang: "html",
            code: `
                <style>
                    .nx-doc-example-divider {
                        font-size: 24px;
                        margin-top: 40px;
                    }
                    .nx-doc-example-wrapper {
                        position:relative;
                        margin-top: 40px;
                        width: 100%;"
                    }
                    .nx-doc-example-hero-image-spacer {
                        height: 480px;
                        padding: 1rem;
                        padding-top: 6rem;
                        background: #f2f2f2;
                        opacity: 0.5;
                        background-image: radial-gradient(#848484 1px, #f2f2f2 1px);
                        background-size: 24px 24px;
                        text-align: center;
                        margin-left: -1rem;
                        margin-right: -1rem;
                    }
                </style>
                <div class="nx-doc-example-divider">
                    Example 1: med.leuffen.de
                </div>
                <div class="nx-doc-example-wrapper">
                    <!-- Example, med.leuffen.de -->
                    <style>
                        .navbar-example-leuffen {
                            --nxa-header-background-scroll: #fff;
                            --nxa-navbar-logo-height: 48px;
                        }
                    </style>
                    <nxa-navbar class="navbar-example-leuffen" data-config='{"overlapNextElement": true, "stickyOnScroll": true}'>
                        <div class="nxa-navbar-logo" slot="left">
                        ${LogoLeuffen}
                        </div>

                        <nav class="nxa-navigation nxa-navigation--left" slot="center">
                            <ul>
                                <li>
                                    <a href="#">Praxiswebsite</a>
                                </li>
                                <li>
                                    <a href="#/funktionen/">Funktionen</a>
                                </li>
                                <li>
                                    <a href="#/preise/">Preise</a>
                                </li>
                                <li>
                                    <a href="#/konfigurator/">Jetzt beraten lassen</a>
                                </li>
                                <li class="nxa-navigation-item--pusher">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" /></svg> <b>(0201) 7 58 59 936</b>
                                </li>
                                <li>
                                    <a href="#/kontakt/">
                                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </nxa-navbar>
                    
                    <div class="nx-doc-example-hero-image-spacer">
                        Fancy Hero Image
                    </div>
                </div>

                <div class="nx-doc-example-divider">
                    Example 2: och-za.de
                </div>
                <div class="nx-doc-example-wrapper">
                    <!-- Example, och-za.de -->
                    <style>
                        .navbar-example-ochza {
                            --nxa-header-background-scroll: #fff;
                            --nxa-navbar-logo-height: 112px;
                            --nxa-navbar-logo-height-scroll: 80px;
                        }
                    </style>
                    <nxa-navbar class="navbar-example-ochza" data-config='{"overlapNextElement": true, "stickyOnScroll": true, "hideOnScroll": true, "alwaysShowMobileNav": true, "slotInMenu": "right"}'>
                        <div class="nxa-navbar-logo nxa-navbar-logo--wide nxa-navbar-logo--center" slot="center">
                        ${LogoOchza}
                        </div>

                        <nav class="nxa-navigation nxa-navigation--always-mobile" slot="right">
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#/leistungen/">Unsere Leistungen</a>
                                </li>
                                <li>
                                    <a href="#/ueber-uns/">Über uns</a>
                                </li>
                                <li>
                                    <a href="#/informationen/">Informationen für Zahnärzte</a>
                                </li>
                                <li>
                                    <a href="#/kontakt/">Kontakt & Anfahrt</a>
                                </li>
                            </ul>
                        </nav>
                    </nxa-navbar>
                    
                    <div class="nx-doc-example-hero-image-spacer">
                        Fancy Hero Image
                    </div>
                </div>

                <div class="nx-doc-example-divider">
                    Example 3: alvi-co.de
                </div>
                <div class="nx-doc-example-wrapper">
                    <!-- Example, alvi-co.de -->
                    <style>
                        .navbar-example-alvico {
                            --nxa-header-background: #f6f6f6;
                            --nxa-header-topbar-background: #ffffff;
                            --nxa-navbar-logo-height: 60px;

                        }
                    </style>
                    <nxa-navbar class="navbar-example-alvico" data-config='{"stickyOnScroll": true, "hideTopbarOnScroll": true}'>
                        <div class="nxa-topbar nxa-topbar--right" slot="topbar">
                            <strong>Für unsere Kunden:</strong>
                            Melden Sie sich bei unserem 24h Notdienst.
                        </div>
                        <div class="nxa-navbar-logo" slot="left">
                        ${LogoAlvico}
                        </div>

                        <nav class="nxa-navigation nxa-navigation--right" slot="center">
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#/leistungen/">Unsere Leistungen</a>
                                </li>
                                <li>
                                    <a href="#/ueber-uns/">Über uns</a>
                                </li>
                                <li>
                                    <a href="#/informationen/">Informationen für Zahnärzte</a>
                                </li>
                                <li>
                                    <a href="#/kontakt/">Kontakt & Anfahrt</a>
                                </li>
                            </ul>
                        </nav>
                    </nxa-navbar>
                    
                    <div class="nx-doc-example-hero-image-spacer">
                        Fancy Hero Image
                    </div>
                </div>
                
                <div class="nx-doc-example-divider">
                    Example 4: dr-mcmueller.de
                </div>
                <div class="nx-doc-example-wrapper">
                    <!-- Example, dr-mcmueller.de -->
                    <style>
                        .navbar-example-drmcmueller {
                            --nxa-header-background: #ffffff;
                            --nxa-header-topbar-background: #f5f5f5;
                            --nxa-navbar-logo-height: 162px;
                        }
                        .navbar-example-drmcmueller .nxa-navbar-logo {
                            position: absolute;
                            bottom: 0;
                            transform: translateY(40%);
                        }
                        .navbar-drmcmueller-center-content {
                            display: flex;
                            margin-left: var(--nxa-navbar-logo-height);
                        }
                    </style>
                    <nxa-navbar class="navbar-example-drmcmueller" data-config='{"alwaysShowMobileNav": true, "slotInMenu": "right"}'>
                        <div class="nxa-topbar" slot="topbar">
                            <h1>Zahnärztin Dr. M.C. Müller</h1>
                        </div>
                        <div class="nxa-navbar-logo" slot="left">
                        ${LogoDrMueller}
                        </div>

                        <div class="nxa-navbar-slot-grow navbar-drmcmueller-center-content" slot="center">
                            <div>
                                Heidornstraße 2, Hannover
                            </div>
                            <div>
                                Heidornstraße 2, Hannover
                            </div>
                            <div>
                                Heidornstraße 2, Hannover
                            </div>
                        </div>

                        <nav class="nxa-navigation nxa-navigation--always-mobile" slot="right">
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#/leistungen/">Unsere Leistungen</a>
                                </li>
                                <li>
                                    <a href="#/ueber-uns/">Über uns</a>
                                </li>
                                <li>
                                    <a href="#/informationen/">Informationen für Zahnärzte</a>
                                </li>
                                <li>
                                    <a href="#/kontakt/">Kontakt & Anfahrt</a>
                                </li>
                            </ul>
                        </nav>
                    </nxa-navbar>
                    
                    <div class="nx-doc-example-hero-image-spacer" style="height: 200vh;">
                        Fancy Hero Image
                    </div>
                </div>
                
            `,
        },
    ],
});
