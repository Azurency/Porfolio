<template>
    <div class="js-body">
        <index-header/>
        <section class="index-section">
            <h3 class="index-section__title" style="visibility: hidden;" v-scroll-reveal="{ delay: 600 }" >Actuellement</h3>
            <icon-link color="#F68E69" buttonText="G.A.R.I." style="visibility: hidden;" v-scroll-reveal="{ delay: 750 }" buttonLink="/cases/gari">
                <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20">
                    <g fill="none" fill-rule="evenodd" stroke="currentColor" transform="translate(1)">
                        <rect width="14.144" height="15.06" x="2.928" y=".75" stroke-width="1.5" rx="3.6" />
                        <rect width="8.197" height="3.955" x="5.901" y="4.098" stroke-width="1.5" rx="1.8" />
                        <ellipse cx="6.291" cy="11.995" rx="1" ry="1" />
                        <ellipse cx="13.689" cy="12.015" rx="1" ry="1" />
                        <path stroke-width="1.5" d="M17.6444444,4.3321634 L17.6444444,4.3321634 L17.6444444,4.3321634 L17.6444444,4.3321634 C18.564919,4.3321634 19.3111111,4.89628461 19.3111111,5.5921634 L19.3111111,7.38136349 L19.3111111,7.38136349 C19.3111111,8.07724228 18.564919,8.64136349 17.6444444,8.64136349 L17.6444444,8.64136349 L17.6444444,8.64136349" />
                        <path stroke-width="1.5" d="M0.555555556,4.32 L0.555555556,4.32 L0.555555556,4.32 L0.555555556,4.32 C1.47603014,4.32 2.22222222,4.88412122 2.22222222,5.58 L2.22222222,7.3692001 L2.22222222,7.3692001 C2.22222222,8.06507888 1.47603014,8.6292001 0.555555556,8.6292001 L0.555555556,8.6292001 L0.555555556,8.6292001" transform="matrix(-1 0 0 1 2.778 0)" />
                        <path stroke-width="1.5" d="M17.0555556,12.6 L17.0555556,16.7662576 C17.0555556,17.9167379 16.2596173,18.8493865 15.2777778,18.8493865 C14.2959382,18.8493865 13.5,17.9167379 13.5,16.7662576 L13.5,15.7397756" />
                        <path stroke-width="1.5" d="M6.45555517,12.6 L6.45555517,16.7662576 C6.45555517,17.9167379 5.65961695,18.8493865 4.6777774,18.8493865 C3.69593784,18.8493865 2.89999962,17.9167379 2.89999962,16.7662576 L2.89999962,15.7397756" transform="matrix(-1 0 0 1 9.356 0)" />
                    </g>
                </svg>
                Un logiciel d'affectation de services à des véhicules en respectant des contraintes.
            </icon-link>
            <icon-link color="rgba(116, 155, 209, 1.00)" buttonText="Freelance" style="visibility: hidden;" v-scroll-reveal="{ delay: 900 }" buttonLink="/#contact">
                <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18">
                    <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="1.5" transform="translate(1 1)" stroke-linecap="round" stroke-linejoin="round">
                        <rect width="18" height="12.444" y="3.556" rx="1.778" />
                        <path d="M12.6,16 L12.6,1.77777778 C12.6,0.795938223 11.7941125,0 10.8,0 L7.2,0 C6.20588745,0 5.4,0.795938223 5.4,1.77777778 L5.4,16" />
                    </g>
                </svg>
                Je suis disponible pour travailler avec vous, n'hésitez pas à me contacter.
            </icon-link>
        </section>
        <section class="index-section">
            <h3 class="index-section__title" id="travail" style="visibility: hidden;" v-scroll-reveal="{ delay: 700 }">Mon travail</h3>
            <block-projet title="G.A.R.I." color="rgba(165, 230, 237, 1.00)" @navigate="gotoLink" link="/cases/gari" style="visibility: hidden;" v-scroll-reveal="{ delay: 1050 }">
                Création d'un logiciel de gestion de l'affectation de services à des véhicules pour les réseaux de transport.
                <img src="~assets/projet_gari.png" alt="Capture G.A.R.I. v1.5" slot="image" height="100%">
            </block-projet>
            <block-projet title="RFP-Platform" color="rgba(127, 212, 204, 1.00)" @navigate="gotoLink" link="/cases/rfp-platform" style="visibility: hidden;" v-scroll-reveal="{ delay: 1125 }">
                Développment d'un logiciel de gestion de gestion d'appels d'offres.
                <img src="~assets/projet_rfpplatform.png" alt="Capture RFP-Platform" slot="image" height="100%">
            </block-projet>
            <block-projet title="Macollec-capsule" color="rgba(246, 142, 105, 1.00)" @navigate="gotoLink" link="/cases/ma-collec" style="visibility: hidden;" v-scroll-reveal="{ delay: 1200 }">
                Réalisation du design d'un site de gestion d'une collection de capsules de champagne.
                <img src="~assets/projet_macollec.png" alt="Capture Macollec-Capsule" slot="image" height="100%">
            </block-projet>
            <block-projet title="Roadtrip blog" color="rgba(157, 205, 243, 1.00)" @navigate="gotoLink" link="/cases/roadtrip" style="visibility: hidden;" v-scroll-reveal="{ delay: 1350 }">
                À l'occasion d'un roadtrip en Angleterre, j'ai mis en place en blog pour garder une trace de mon voyage.
                <img src="~assets/projet_roadtrip.png" alt="Illustration self-portrait et capture article" slot="image" height="100%">
            </block-projet>
            <block-projet title="Handball team manager" color="rgba(186, 234, 138, 1.00)" @navigate="gotoLink" link="/cases/handball-manager" style="visibility: hidden;" v-scroll-reveal="{ delay: 1500 }">
                Lors d'un projet d'étude, j'ai créé un logiciel de gestion d'un championnat de handball.
                <img src="~assets/projet_handball.png" alt="Captures Handball Manager" slot="image" height="100%">
            </block-projet>
            <block-projet title="Don't break the chain" color="rgba(218, 212, 209, 1.00)" @navigate="gotoLink" link="/cases/dont-break-the-chain" style="visibility: hidden;" v-scroll-reveal="{ delay: 1650 }">
                Design d'un prototype d'application iOS et développement d'un version android pour un projet scolaire.
                <img src="~assets/projet_dontbreakthechain.png" alt="Design de Don't break the chain" slot="image" height="100%">
            </block-projet>
        </section>
        <section class="index-section index-section--two-columns">
            <div class="index-section__column">
                <h3 class="index-section__title" v-scroll-reveal>Suivez moi</h3>
                <icon-link color="rgba(116, 155, 209, 1.00)" buttonText="@azurency" v-scroll-reveal buttonLink="http://twitter.com/azurency">
                    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="21" height="17" viewBox="0 0 21 17">
                        <path fill="none" stroke="currentColor" stroke-width="1.5" d="M19,0.00864214135 C18.1729688,0.577465221 17.257275,1.01252361 16.2881818,1.29706319 C15.222765,0.102568705 13.505865,-0.316314228 11.9890704,0.248181875 C10.4722757,0.812677978 9.47823659,2.24047445 9.5,3.82337898 L9.5,4.66548425 C6.41739235,4.74342311 3.49947641,3.31135415 1.72727273,0.850747405 C1.72727273,0.850747405 -1.72727273,8.42969477 6.04545455,11.7981158 C4.26681926,12.9753506 2.14799915,13.5656353 0,13.4823264 C7.77272727,17.6928527 17.2727273,13.4823264 17.2727273,3.79811583 C17.271932,3.56355047 17.2488024,3.32956374 17.2036364,3.09916846 C18.0850664,2.25158368 18.7070782,1.18145291 19,0.00864214135 Z" transform="translate(1 1)" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <template slot="pre">Sur twitter à</template>
                </icon-link>
                <icon-link color="#E0779F" buttonText="mon github" v-scroll-reveal buttonLink="https://github.com/Azurency">
                    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20">
                        <path fill="none" stroke="currentColor" stroke-width="1.5" d="M5.85919129,15.431848 C1.67405465,16.715924 1.67405465,13.2917214 0,12.8636961 M11.7183826,18 L11.7183826,14.687084 C11.7818988,13.8613352 11.4953074,13.0475014 10.9315769,12.4527918 C13.5598427,12.153174 16.3220329,11.1344738 16.3220329,6.46043718 C16.3218181,5.26524238 15.8722915,4.11588463 15.0664919,3.25024722 C15.4480557,2.20458695 15.4210768,1.04878402 14.9911594,0.022936257 C14.9911594,0.022936257 14.0034672,-0.276681472 11.7183826,1.28989123 C9.79992354,0.758131172 7.77765033,0.758131172 5.85919129,1.28989123 C3.57410669,-0.276681472 2.58641444,0.022936257 2.58641444,0.022936257 C2.15649712,1.04878402 2.12951816,2.20458695 2.51108198,3.25024722 C1.69927187,4.12230575 1.24928225,5.28205171 1.25554099,6.4861187 C1.25554099,11.1259132 4.01773117,12.1446135 6.64599698,12.4784733 C6.08905538,13.0670625 5.8030028,13.8700293 5.85919129,14.687084 L5.85919129,18" transform="translate(1 1)" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <template slot="pre">Faites un tour sur</template>
                </icon-link>
                <icon-link color="#EE8668" buttonText="Malt" v-scroll-reveal buttonLink="https://www.malt.fr/profile/antoinelassier">
                    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 93 92">
                        <g fill="none" fill-rule="evenodd">
                            <path stroke="currentColor" stroke-width="5.5" d="M34.561 78.975c0 7.844 5.104 12.282 11.45 12.306.016 0-.016 0 0 0 6.324.002 11.54-5.976 11.566-12.306L46.003 67.257 34.561 78.975z"/>
                            <path stroke="currentColor" stroke-width="5.5" d="M30.494 12.753a11.432 11.432 0 0 0-8.062-3.546c-3.094-.058-5.99 1.068-8.21 3.192-4.584 4.39-4.742 11.688-.354 16.272l1.718 1.794 24.332.104 3.916-3.882-13.34-13.934zM78.353 62.739l-1.718-1.794-24.332-.104-3.916 3.882 13.34 13.934c4.388 4.58 11.69 4.74 16.272.354 4.582-4.39 4.742-11.688.354-16.272"/>
                            <path stroke="currentColor" stroke-width="5.5" d="M79.246 34.335L55.92 57.255l24.742.106h.05c3.056 0 5.932-1.182 8.104-3.334A11.448 11.448 0 0 0 92.22 45.9c.026-6.344-4.974-11.728-12.974-11.566M11.558 34.05h-.054a11.425 11.425 0 0 0-8.098 3.334A11.439 11.439 0 0 0 0 45.508c-.014 3.074.578 11.556 13.16 11.556L36.3 34.156l-24.742-.106z"/>
                            <path stroke="currentColor" stroke-width="5.5" d="M78.854 13.239c-4.468-4.506-11.768-4.54-16.274-.068L13.436 61.893c-4.506 4.47-4.538 11.77-.07 16.276 4.468 4.508 11.77 4.542 16.276.07l49.142-48.722c4.508-4.47 4.538-11.772.07-16.278"/>
                            <path stroke="currentColor" stroke-width="5.5" d="M58.578 12.305c0-7.844-5.104-12.28-11.45-12.304-.016 0 .016 0 0 0C40.804 0 35.588 5.975 35.562 12.305l11.574 11.718 11.442-11.718z"/>
                        </g>
                    </svg>
                    <template slot="pre">Proposez moi une mission sur</template>
                </icon-link>
                <icon-link color="#74C4CC" buttonText="mon linkedin" v-scroll-reveal buttonLink="https://www.linkedin.com/in/antoine-lassier-b69846a6/">
                    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
                            <path stroke="currentColor" stroke-width="1.5" d="M2.04545455,0 C0.925312255,0 0,0.925312255 0,2.04545455 L0,15.9545455 C0,17.0746879 0.925312255,18 2.04545455,18 L15.9545455,18 C17.0746879,18 18,17.0746879 18,15.9545455 L18,2.04545455 C18,0.925312255 17.0746879,0 15.9545455,0 L2.04545455,0 Z" />
                            <path fill="currentColor" d="M4.44886364 3.04261364C3.67159091 3.04261364 3.04261364 3.67240909 3.04261364 4.44886364 3.04261364 5.22531818 3.67077273 5.85511364 4.44886364 5.85511364 5.2245 5.85511364 5.85511364 5.22531818 5.85511364 4.44886364 5.85511364 3.67322727 5.2245 3.04261364 4.44886364 3.04261364zM11.8380682 6.77556818C10.6639773 6.77556818 9.88486364 7.41804545 9.5625 8.02840909L9.51136364 8.02840909 9.51136364 6.95454545 7.21022727 6.95454545 7.21022727 14.7272727 9.61363636 14.7272727 9.61363636 10.8920455C9.61363636 9.87913636 9.81511364 8.89772727 11.0710227 8.89772727 12.3089318 8.89772727 12.3238636 10.0423636 12.3238636 10.9431818L12.3238636 14.7272727 14.7272727 14.7272727 14.7272727 10.4573864C14.7272727 8.36611364 14.2819773 6.77556818 11.8380682 6.77556818z" />
                            <polygon fill="currentColor" points="3.273 6.955 3.273 14.727 5.702 14.727 5.702 6.955" />
                        </g>
                    </svg>
                    <template slot="pre">Ou sur</template>
                    <span class="not-mobile">, c'est plus corporate</span>
                </icon-link>
            </div>
            <div class="index-section__column">
                <h3 class="index-section__title" v-scroll-reveal>À propos de moi</h3>
                <p class="index-section__paragraph" v-scroll-reveal>
                    Je suis Antoine, né à Orléans en France. J'ai 24 ans et suis diplômé d'un
                    <b>Master MIAGE</b> à l'Université d'Orléans.
                    <br><br>Je suis un
                    <b>developpeur full-stack</b> et un
                    <b>designer</b>. Je maitrise un grand nombre de technologies et méthodologies pour construire des sites web et des applications
                    <b>les mieux adaptées</b> à tous les besoins.
                </p>
                <br>
                <icon-link color="#96D557" buttonText="mon CV" v-scroll-reveal buttonLink="https://drive.google.com/open?id=0B6FkUBxCL2UdcThiVnNjeE9sZ2s">
                    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20">
                        <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="1.5" transform="translate(1 1)" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M8.75,0 L1.75,0 C0.783501688,0 0,0.80588745 0,1.8 L0,16.2 C0,17.1941125 0.783501688,18 1.75,18 L12.25,18 C13.2164983,18 14,17.1941125 14,16.2 L14,5.4 L8.75,0 Z" />
                            <polyline points="8.75 0 8.75 5.4 14 5.4" />
                            <path d="M10.5 9.9L3.5 9.9M10.5 13.5L3.5 13.5" />
                            <polyline points="5.25 6.3 4.375 6.3 3.5 6.3" />
                        </g>
                    </svg>
                    <template slot="pre"><span class="not-mobile">Vous pouvez aussi télécharger</span><span class="mobile-only">Téléchargez</span></template>
                </icon-link>
            </div>
        </section>
        <section class="contact-section">
            <div class="index-section index-section--center" id="contact">
                <h5 class="index-section__leadtitle" v-scroll-reveal>Disponible en freelance</h5>
                <h3 class="index-section__title index-section__title--borderless" v-scroll-reveal>Envie de travailler avec moi ?<br>Je suis toujours intéressé par de nouveaux projets.</h3>
                <call-button text="Conctactez moi" link="mailto:antoine.lassier@gmail.com" color="#2588C4" v-scroll-reveal>
                    <template slot="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18">
                            <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="1.5" transform="translate(1 1)" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M2,0 L18,0 C19.1,0 20,0.9 20,2 L20,14 C20,15.1 19.1,16 18,16 L2,16 C0.9,16 0,15.1 0,14 L0,2 C0,0.9 0.9,0 2,0 Z"/>
                                <polyline points="20 2 10 9 0 2"/>
                            </g>
                        </svg>
                    </template>
                </call-button>
            </div>
            <div class="contact-section__shape1">
                <svg xmlns="http://www.w3.org/2000/svg" width="137" height="259" viewBox="0 0 137 259">
                    <defs>
                        <linearGradient id="e" x1="75.915%" x2="17.91%" y1="16.371%" y2="76.403%">
                            <stop stop-color="#FFFFFF" offset="0%"/>
                            <stop stop-color="#EFFAFF" stop-opacity=".75" offset="60.415%"/>
                            <stop stop-color="#E3F5FB" offset="100%"/>
                        </linearGradient>
                    </defs>
                    <g fill="none" fill-rule="evenodd">
                        <circle cx="100.504" cy="68.504" r="68.504" fill="#BAEA8A"/>
                        <circle cx="50.197" cy="112.197" r="50.197" fill="url(#e)"/>
                        <path stroke="#CAE8F0" stroke-width="10" d="M86.2845427,201.465372 C54.584951,196.910147 38.7351552,211.699314 38.7351552,245.832872" transform="rotate(-36 62.51 223.247)"/>
                    </g>
                </svg>
            </div>
            <div class="contact-section__shape2">
                <svg xmlns="http://www.w3.org/2000/svg" width="180" height="290" viewBox="0 0 180 290">
                    <defs>
                        <linearGradient id="f" x1="1.634%" y1="50%" y2="50%">
                            <stop stop-color="#ED4868" offset="0%"/>
                            <stop stop-color="#ED4868" stop-opacity=".287" offset="100%"/>
                        </linearGradient>
                        <linearGradient id="g" x1="15.435%" x2="136.867%" y1="100%" y2="0%">
                            <stop stop-color="#FFFFFF" offset="0%"/>
                            <stop stop-color="#FFFFFF" stop-opacity="0" offset="100%"/>
                        </linearGradient>
                        <linearGradient id="h" x1="63.262%" x2=".776%" y1="35.628%" y2="99.224%">
                            <stop stop-color="#BBE0F7" offset="0%"/>
                            <stop stop-color="#55A3E1" offset="100%"/>
                        </linearGradient>
                    </defs>
                    <g fill="none" fill-rule="evenodd" transform="translate(-86 3)">
                        <circle cx="103.2" cy="212.2" r="103.2" fill="#9DCDF3"/>
                        <rect width="77" height="77" x="169" y="174" fill="url(#f)" opacity=".8"/>
                        <path stroke="url(#g)" stroke-width="5" d="M116,69.8610948 C117.978859,38.4278017 128.621785,22.4070715 147.92878,21.7989042 C167.235774,21.190737 181.705215,33.147243 191.337102,57.6684223 C184.245934,13.4636173 194.316195,-5.32782404 221.547886,1.29409836" stroke-linecap="round" stroke-linejoin="round"/>
                        <path stroke="url(#h)" stroke-width="5" d="M123.5,163.5 L261.793167,25.2068331" opacity=".5" stroke-linecap="square"/>
                    </g>
                </svg>
            </div>
        </section>
        <section class="index-section index-section--center">
            <h5 class="index-section__leadtitle" v-scroll-reveal>Quelques infos très utiles avant de partir</h5>
            <div class="stat-section" v-scroll-reveal>
                <stat-block title="Photos prises" color="#F68E69" class="stat-section__item">
                    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="44" height="37" viewBox="0 0 44 37">
                        <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="3" transform="translate(2 2)" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M40,29.3333333 C40,31.3583774 38.3719445,33 36.3636364,33 L3.63636364,33 C1.62805546,33 4.03717464e-16,31.3583774 0,29.3333333 L0,9.16666667 C-2.01858732e-16,7.14162258 1.62805546,5.5 3.63636364,5.5 L10.9090909,5.5 L14.5454545,0 L25.4545455,0 L29.0909091,5.5 L36.3636364,5.5 C38.3719445,5.5 40,7.14162258 40,9.16666667 L40,29.3333333 Z"/>
                            <ellipse cx="20" cy="18.333" rx="7.273" ry="7.333"/>
                        </g>
                    </svg>
                    23 653
                </stat-block>
                <stat-block title="Commits" color="#A5E6ED" class="stat-section__item">
                    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
                        <g fill="none" fill-rule="evenodd" stroke="currentColor" transform="translate(2 2)">
                            <rect width="40" height="16" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" rx="4"/>
                            <rect width="40" height="16" y="24" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" rx="4"/>
                            <circle cx="9" cy="9" r="1" stroke-width="2"/>
                            <circle cx="9" cy="33" r="1" stroke-width="2"/>
                        </g>
                    </svg>
                    1071
                </stat-block>
                <stat-block title="Musique" color="#BAEA8A" class="stat-section__item">
                    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
                        <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="3" transform="translate(2 2)" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M13.3333333,31.1111111 L4.44444444,31.1111111 C1.98984556,31.1111111 0,33.1009567 0,35.5555556 C0,38.0101544 1.98984556,40 4.44444444,40 L8.88888889,40 C11.3434878,40 13.3333333,38.0101544 13.3333333,35.5555556 L13.3333333,31.1111111 Z M40,26.6666667 L31.1111111,26.6666667 C28.6565122,26.6666667 26.6666667,28.6565122 26.6666667,31.1111111 C26.6666667,33.56571 28.6565122,35.5555556 31.1111111,35.5555556 L35.5555556,35.5555556 C38.0101544,35.5555556 40,33.56571 40,31.1111111 L40,26.6666667 Z"/>
                            <polyline points="13.333 31.111 13.333 4.444 40 0 40 26.667"/>
                        </g>
                    </svg>
                    The pirouettes
                    <br>Bagarre
                    <br>Muddy Monk
                    <br>La Femme, Halsey, ...
                </stat-block>
                <stat-block title="Séries préférées" color="#E0779F" class="stat-section__item">
                    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="44" height="40" viewBox="0 0 44 40">
                        <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="3" transform="translate(2 2)" stroke-linecap="round" stroke-linejoin="round">
                            <rect width="40" height="28" rx="4"/>
                            <path d="M12 36L28 36M20 28L20 36"/>
                        </g>
                    </svg>            
                    Fringe (the observers <img src="~assets/emoji/detective.png" alt="🕵️" class="emoji">)
                    <br>The Crown
                    <br>Halt & Catch Fire
                    <br>Sherlock
                </stat-block>
                <stat-block title="Lignes de code" color="#9DCDF3" class="stat-section__item">
                    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="36" height="44" viewBox="0 0 36 44">
                        <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="3" transform="translate(2 2)" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20,0 L4,0 C1.790861,0 0,1.790861 0,4 L0,36 C0,38.209139 1.790861,40 4,40 L28,40 C30.209139,40 32,38.209139 32,36 L32,12 L20,0 Z"/>
                            <polyline points="20 0 20 12 32 12"/>
                            <path d="M16 32L16 20M10 26L22 26"/>
                        </g>
                    </svg>
                    2 362 000
                </stat-block>
            </div>
        </section>
    </div> 
</template>

<script>
import { cumulativeOffset } from 'assets/js/utils'

import IndexHeader from '~/components/header.vue'
import IconLink from '~/components/icon_link.vue'
import BlockProjet from '~/components/bloc_projet.vue'
import CallButton from '~/components/call_action_button.vue'
import StatBlock from '~/components/stat_block.vue'

export default {
    components: {
        IndexHeader,
        IconLink,
        BlockProjet,
        CallButton,
        StatBlock
    },
    head: {
        title: 'Accueil'
    },
    transition: {
        mode: 'out-in',
        css: false,
        enter (el, done) {
            done()
        },
        leave (elt, done) {
            // Réduction de l'opacité de l'index
            document.querySelector('.js-body').style.opacity = 0

            const selectedCase = document.querySelector('#navanim')
            const transitionDuration = 500

            if (selectedCase) {
                // Calcul de la position actuelle du top
                const doc = document.documentElement
                const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)

                // Calcul des offsets top et left de la case qui a été cliquée
                const offset = cumulativeOffset(selectedCase)

                // Création d'un nouvel élément pour la transition
                const animatedEl = document.createElement('div')

                animatedEl.style.position = 'absolute'
                animatedEl.style.zIndex = '999'
                animatedEl.style.backgroundColor = selectedCase.firstChild.style.backgroundColor
                animatedEl.style.transition = 'all ' + transitionDuration + 'ms cubic-bezier(.19,.91,.66,.99)'
                animatedEl.style.width = selectedCase.clientWidth + 'px'
                animatedEl.style.height = selectedCase.clientHeight + 'px'
                animatedEl.style.top = offset.top + 'px'
                animatedEl.style.left = offset.left + 'px'
                animatedEl.style.transformOrigin = '50% top 0'
                animatedEl.setAttribute('id', 'js-caseHeader')

                document.body.appendChild(animatedEl)

                // Cacher la case qui a été cliqué (elle est remplacée par le nouvel élément)
                selectedCase.firstChild.style.transition = 'none'
                selectedCase.firstChild.style.opacity = 0

                // Flush du style et mise en forme de l'animatedEl
                window.getComputedStyle(animatedEl).opacity

                // Transition vers la case study
                const translateY = 'translateY(' + (top - offset.top) + 'px)'
                const scaleX = 'scaleX(' + window.innerWidth / selectedCase.clientWidth + ')'
                const scaleY = 'scaleY(' + 350 / selectedCase.clientHeight + ')'

                animatedEl.style.transform = translateY + ' ' + scaleX + ' ' + scaleY
            }

            // Changement de page après la transition
            setTimeout(() => {
                if (selectedCase) {
                    selectedCase.removeAttribute('id')
                }
                done()
            }, transitionDuration)
        }
    },
    methods: {
        gotoLink (el, link) {
            el.setAttribute('id', 'navanim')
            this.$router.push(link)
        }
    }
}
</script>

<style lang="scss">
@import 'assets/scss/_variables.scss';

.js-body {
    transition: opacity 0.5s;
    opacity: 1;
}

/* Index
   ========================================================================== */

.index-section {
    @include container;
    margin-top: 5em;

    &--two-columns {
        display: flex;
        flex-direction: row;

        & .index-section__column:first-child {
            margin-right: $container-outside-gutter*2;
        }

        & .index-section__column:last-child {
            margin-left: $container-outside-gutter*2;
        }

        @include respond-to($phone) {
            flex-direction: column;

            & .index-section__column:first-child {
                margin: 0;
            }

            & .index-section__column:last-child {
                margin: 0;
            }
        }

        @media only screen and (max-width: 979px) {
            & .index-section__column:first-child {
                margin-right: $container-outside-gutter/2;
            }

            & .index-section__column:last-child {
                margin-left: $container-outside-gutter/2;
            }
        }
    }

    &--center {
        text-align: center;
    }

    &__column {
        flex: 1 1 50%;
    }

    /**
    * 1. En gras.
    * 2. Ajoute un espace entre la bordure et le titre.
    */

    &__title {
        font-family: "europa", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 26px;
        font-weight: 700; /* 1 */
        letter-spacing: -1px;
        color: $dark-text;
        padding-bottom: 5px; /* 2 */
        border-bottom: 2px solid $title-border-bottom-color;
        margin: 0 0 1em 0;

        &--borderless {
            border: 0;
        }
    }

    &__leadtitle {
        text-transform: uppercase;
        color: $contact-leadtitle;
        font-weight: 500;
        font-size: 14px;
        margin: 0  0 1em 0;
    }

    &__paragraph {
        margin: 0;

        b {
            font-weight: 700;
            color: $dark-text;
        }
    }
}

.contact-section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5em;
    height: 350px;
    background: $iceberg;
    position: relative;

    & .index-section {
        margin: 0;
        z-index: 10;
    }

    &__shape1 {
        position: absolute;
        right: 0;
        top: 25px;
        height: 259px;
    }

    &__shape2 {
        position: absolute;
        height: 290px;
        left: 0;
        bottom: 0;
    }

    @include respond-to($phone) {
        &__shape1 {
            right: -80px;
        }

        &__shape2 {
            left: -80px;
        }
    }
}

.stat-section {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 3em 0;

    @include respond-to($tablet-portrait) {
        justify-content: flex-start;
        margin: 2em 0;

        &__item {
            flex: 0 0 33%;
            margin: .5em 0;
        }
    }

    @include respond-to($phone) {
        justify-content: flex-start;
        margin: 2em 0;

        &__item {
            flex: 0 0 50%;
            margin: .5em 0;
        }
    }
}

</style>
