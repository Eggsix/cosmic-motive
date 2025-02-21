import { pageBlockTypes } from '../types';

const initialState = {
    works: [
        {
            title: 'GameOut iOS',
            description: 'Product Design for Development',
            img: '/img/works/game-out/selected-work.png',
            homeImgUrl: '/img/works/game-out/hero-game-out.png',
            homeImgUrlMobile: '/img/works/game-out/gamo-out-hero-mobile.png',
            //
            url: '/selected-work/game-out',
            pageTitle: 'iOS Gaming Concept',
            pageSupTitle: 'SKETCH DASHBOARD',
            subheroList: [
                {
                    title: 'Platform',
                    list: ['Mobile + Desktop'],
                },
                {
                    title: 'Work',
                    list: ['UI + Brand Design'],
                },
                {
                    title: 'Dimensions',
                    list: ['375x812', '1024x768'],
                }
            ],
            content: {
                desktop: [
                    {
                        type: pageBlockTypes.text,
                        text: 'GameOut is a product concept complete with brand identity, functional screens, and workflows completed for an easy to use iOS Gaming App. ',
                        className: 'text-section--game-out',
                    },
                    {
                        type: pageBlockTypes.image,
                        title: '',
                        imageUrl: '/img/works/game-out/game-out-type.png',
                    },
                    {
                        type: pageBlockTypes.image,
                        title: '',
                        imageUrl: '/img/works/game-out/colors.png',
                    },
                    {
                        type: pageBlockTypes.image,
                        title: '',
                        imageUrl: '/img/works/game-out/navigation-icons.png',
                    },
                    {
                        type: pageBlockTypes.image,
                        title: '',
                        imageUrl: '/img/works/game-out/inputs.png',
                    },
                    {
                        type: pageBlockTypes.image,
                        title: '',
                        imageUrl: '/img/works/game-out/game-out-btns.png',
                    },
                    {
                        type: pageBlockTypes.image,
                        title: '',
                        imageUrl: '/img/works/game-out/game-out-cards.png',
                    },
                    {
                        type: pageBlockTypes.image,
                        title: 'Main Experience',
                        imageUrl: '/img/works/game-out/game-out-main.png',
                    },
                    {
                        type: pageBlockTypes.image,
                        title: 'iPad Gameplay',
                        imageUrl: '/img/works/game-out/game-out-gameplay.png',
                    },
                    {
                        type: pageBlockTypes.image,
                        title: 'Sort + Filter',
                        imageUrl: '/img/works/game-out/sort-filter.png',
                    },
                    {
                        type: pageBlockTypes.image,
                        title: 'Home Experience',
                        imageUrl: '/img/works/game-out/home-experience.png',
                    },
                    {
                        type: pageBlockTypes.image,
                        title: 'Mobile Gameplay',
                        imageUrl: '/img/works/game-out/mobile-gameplay.png',
                    },
                    {
                        type: pageBlockTypes.image,
                        title: 'Login + Sign up',
                        imageUrl: '/img/works/game-out/log-in.png',
                    },
                    {
                        type: pageBlockTypes.image,
                        title: 'Components',
                        imageUrl: '/img/works/game-out/components.png',
                    },
                    {
                        type: pageBlockTypes.h2,
                        title: 'Thank you for viewing.',
                        className: 'h2--thank-you',
                    },
                ],
                mobile: [
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/game-out/color-mobile.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Main Experience',
                        imageUrl: '/img/works/game-out/main-mobile.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'iPad Sidebar',
                        imageUrl: '/img/works/game-out/ipad-mobile.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Sort + Filter',
                        imageUrl: '/img/works/game-out/filter-mobile.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Home Experience',
                        imageUrl: '/img/works/game-out/home-experiance-mobile.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/game-out/main-alt@2x.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Mobile Gameplay',
                        imageUrl: '/img/works/game-out/main-gameplay.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Login + Sign up',
                        imageUrl: '/img/works/game-out/register@2x.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/game-out/login@2x.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Components',
                        imageUrl: '/img/works/game-out/video-slider@2x.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/game-out/games-graph@2x.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/game-out/chart-3-unavailable@2x.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/game-out/podium@2x.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/game-out/2-3@2x.png',
                        background: 'transparent',
                    },
                ]
            }
        },
        {
            title: 'Volta React Dashboard',
            description: 'Product Design for Volta Charging',
            img: '/img/works/volta/selected-work.png',
            homeImgUrl: '/img/works/volta/volta-hero.png',
            homeImgUrlMobile: '/img/works/volta/volta-hero-mobile.png',
            url: '/selected-work/volta',
            pageTitle: 'Actionable analytic data displaying different API issues & information',
            pageSupTitle: 'SKETCH DASHBOARD',
            subheroList: [
                {
                    title: 'Platform',
                    list: ['Web (1280px)'],
                },
                {
                    title: 'Role',
                    list: ['Interface Design'],
                },
                {
                    title: 'Release',
                    list: ['Built Internally'],
                }
            ],
            content: {
                desktop: [
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/volta/volta-graphs.png',
                        background: 'radial-gradient(circle at 50% 0, #7b8d9a, #1f2a34 79%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/volta/volta-map.png',
                        background: 'radial-gradient(circle at 50% 5%, #545f88, #060c22 83%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Light Version | Dark Version',
                        imageUrl: '/img/works/volta/dark-white.png',
                        background: 'radial-gradient(circle at 50% 0, #7b8d9a, #1d2935 39%, #141d25 97%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Collapsed Sidebar',
                        imageUrl: '/img/works/volta/collapsed-sidebar.png',
                        background: 'radial-gradient(circle at 50% 0, #7b8d9a, #1d2935 39%, #141d25 97%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Settings Menu',
                        imageUrl: '/img/works/volta/volta-settings.png',
                        background: 'url(/img/works/volta/screen-2.png) no-repeat right bottom',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/volta/transparent.png',
                        background: 'url(/img/works/volta/volta-bottom-screen.png) no-repeat right top, linear-gradient(200deg, rgb(29, 60, 97) 0%, rgb(15, 16, 32) 20%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/volta/whole-foods.jpg',
                        background: 'transparent',
                    },
                ],
                mobile: [
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Interface Components',
                        imageUrl: '/img/works/volta/ui@2x.png',
                        background: 'radial-gradient(circle at 50% 0, #7b8d9a, #1f2a34 103%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/volta/volta-expanded-dark-map-45-copy@3x.png',
                        background: 'radial-gradient(circle at 50% 5%, #545f88, #060c22 88%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/volta/volta-expanded-dark-map-45-copy@2x.png',
                        background: '#0d0d11',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/volta/screen@2x-empty.png',
                        background: 'url(/img/works/volta/screen@2x.png) no-repeat right bottom/contain, linear-gradient(190deg, #1d3c61 76%, #0f1020 100%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/volta/volta-settings@2x.png',
                        background: '#0d0d11',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/volta/volta-new-transparent.png',
                        background: 'url(/img/works/volta/volta-new.png) no-repeat center/cover',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/volta/volta-charger-empty.png',
                        background: 'url(/img/works/volta/volta-charger.png) no-repeat center/cover',
                    },
                    //
                ]
            }
        },
        {
            title: 'Westworld',
            description: 'Mobile & Desktop Website',
            img: '/img/works/westworld/west@3x.png',
            homeImgUrl: '/img/works/westworld/westworld@3x-hero-updated.png',
            homeImgUrlMobile: '/img/works/westworld/westworl-hero-mobile.png',
            url: '/selected-work/westworld',
            pageTitle: 'Defining a Digital Experience Using Sketch for Westworld.',
            pageSupTitle: 'Desktop & mobile site',
            subheroList: [
                {
                    title: 'Platform',
                    list: ['Web (1400px)', 'Mobile (@1x Baseline)'],
                },
                {
                    title: 'Role',
                    list: ['Interface Design', 'Production Files in Sketch'],
                },
                {
                    title: 'Release',
                    list: ['Discover westworld.com'],
                }
            ],
            content: {
                desktop: [
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/westworld/west-2.png',
                        background: '',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/westworld/westflow@2x.png',
                        background: '#0e223a',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/westworld/main-wireframes.png',
                        background: '#0d0f1a',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/westworld/main-wireframes-2.png',
                        background: '#0d0f1a',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/westworld/panel-2@2x.png',
                        background: '#0d0f1a',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/westworld/panel-3@2x.png',
                        background: '#0d0f1a',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/westworld/q-2@2x.png',
                        background: '#0d0f1a',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/westworld/q-4@2x.png',
                        background: '#0d0f1a',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/westworld/layer-1.png',
                        background: '#0d0f1a',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/westworld/layer-2.png',
                        background: '#0d0f1a',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/westworld/layer-3.png',
                        background: '#0d0f1a',
                    },

                    //
                ],
                mobile: [
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/westworld/west-2.png',
                        background: '',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/westworld/westflow@2x.png',
                        background: '#0e223a',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/westworld/main-wireframes-mobile.png',
                        background: '#0e223a',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/westworld/main-wireframes-1-mobile.png',
                        background: '#0e223a',
                    },

                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/westworld/main-wireframes-4-mobile.png',
                        background: '#0e223a',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Desktop',
                        imageUrl: '/img/works/westworld/panel-2@2x.png',
                        background: '#0d0f1a',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/westworld/panel-3@2x.png',
                        background: '#0d0f1a',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/westworld/q-2@2x.png',
                        background: '#0d0f1a',
                    },

                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/westworld/home-mobile.png',
                        background: '#0d0f1a',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/westworld/panel-1-mobile.png',
                        background: '#0d0f1a',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/westworld/menu-mobile.png',
                        background: '#0d0f1a',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/westworld/panel-5-freedom-mobile.png',
                        background: '#0d0f1a',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/westworld/q-4-mobile.png',
                        background: '#0d0f1a',
                    },
                ]
            }
        },
        {
            title: 'Apple',
            description: 'View Active Inventory & Select Pickup Store for Products',
            img: '/img/works/apple/apple-thumb.png',
            homeImgUrl: '/img/works/apple/mac@3x.png',
            url: '/selected-work/apple',
            pageTitle: 'View Active Inventory & Select Pickup Store for Products Avaliable on Apple.com',
            pageSupTitle: 'Apple',
            subheroList: [
                {
                    title: 'Platform',
                    list: ['Web (1400px)', 'iPad '],
                },
                {
                    title: 'Role',
                    list: ['Interface Design', 'Specifications'],
                },
                {
                    title: 'Release',
                    list: ['Apple.com (2018)'],
                }
            ],
            content: {
                desktop: [
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'iPad',
                        imageUrl: '/img/works/apple/ipad@3x.png',
                        background: '#1d1473',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Apple TV',
                        imageUrl: '/img/works/apple/apple-tv@3x.png',
                        background: '#1d1473',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'HomePod',
                        imageUrl: '/img/works/apple/home-pod@3x.png',
                        background: '#1d1473',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'iPad',
                        imageUrl: '/img/works/apple/iPad.png',
                        background: '#1d1473',
                    }
                ],
                mobile: {

                }
            }
        },
        {
            title: 'Sketch Dashboard',
            description: 'Website Design System',
            img: '/img/works/sketch/sketch@3x.png',
            homeImgUrl: '/img/works/dashboard/bg-image@3x.png',
            homeImgUrlMobile: '/img/works/dashboard/2@3x.png',
            url: '/selected-work/dashboard',
            pageTitle: 'Useful statistical data to display different chart types & information',
            pageSupTitle: 'SKETCH DASHBOARD',
            subheroList: [
                {
                    title: 'Platform',
                    list: ['Desktop design'],
                },
                {
                    title: 'Role',
                    list: ['Creative Direction', 'Interface Design'],
                },
                {
                    title: 'Release',
                    list: ['Available on Creative Market'],
                }
            ],
            content: {
                desktop: [
                    {
                        type: pageBlockTypes.image,
                        title: '',
                        imageUrl: '/img/works/dashboard/type-color.png',
                    },
                    {
                        type: pageBlockTypes.image,
                        title: 'Components',
                        imageUrl: '/img/works/dashboard/dashboard-content.png',
                    },
                    {
                        type: pageBlockTypes.image,
                        title: '',
                        imageUrl: '/img/works/dashboard/dashboard-2.png',
                    },
                    {
                        type: pageBlockTypes.parallaxImgBg,
                        title: '',
                        imageUrl: '/img/works/dashboard/dashboard-bg.png',
                    },
                    {
                        type: pageBlockTypes.avaliableOn,
                        title: 'Avaliable on',
                        imageUrl: '/img/creative-market.png',
                        link: 'https://creativemarket.com/Bussolini/906376-Sketch-Web-Dashboard-UI'
                    }
                ],
                mobile: [
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/dashboard/type-color@2x.png',
                        background: '#0d0d11',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/dashboard/type-color-3.png',
                        background: '#0d0d11',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Components',
                        imageUrl: '/img/works/dashboard/skills@2x.png',
                        background: '#0d0d11',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/dashboard/location@2x.png',
                        background: '#0d0d11',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/dashboard/radar@2x.png',
                        background: '#0d0d11',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/dashboard/breakdown@2x.png',
                        background: '#0d0d11',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/dashboard/daily@2x.png',
                        background: '#0d0d11',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/dashboard/inbox@2x.png',
                        background: '#0d0d11',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/dashboard/stats@2x.png',
                        background: '#0d0d11',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/dashboard/group@2x.png',
                        background: '#0d0d11',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/dashboard/scatter@2x.png',
                        background: '#0d0d11',
                    },
                    {
                        type: pageBlockTypes.parallaxImgBg,
                        title: '',
                        imageUrl: '/img/works/dashboard/2@2x.png',
                    },

                    //
                ]
            }
        },
        {
            title: 'Ylopo',
            description: 'IDX Website for MLS ',
            img: '/img/works/ylopo/ylopo@3x-2.png',
            homeImgUrl: '/img/works/ylopo/ylopo-mac@3x.png',
            url: '/selected-work/ylopo',
            pageTitle: 'Helping Users Find Their Perfect Home Using Sketch for Ylopo.',
            pageSupTitle: 'Desktop & mobile site',
            subheroList: [
                {
                    title: 'Platform',
                    list: ['Web (1400px)', 'Mobile (@1x Baseline 360px)'],
                },
                {
                    title: 'Role',
                    list: ['Interface Design', 'Production Files in Sketch'],
                },
                {
                    title: 'Release',
                    list: ['Ylopo.com', 'Design Systems', 'Component Libraries'],
                }
            ],
            content: {
                desktop: [
                    {
                        type: pageBlockTypes.textWith3Cols,
                        content: [
                            {
                                title: 'Problem',
                                text: '70% of traffic was from mobile with no specific mobile theme in place.',
                            },
                            {
                                title: 'Solution',
                                text: 'Design a mobile first experience that focused on enhancing conversion for new users.',
                            },
                            {
                                title: 'Outcome',
                                text: 'ARR catapulted from $20M to over $100M within the first year of new design.',
                            }
                        ]
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ylopo/ylopo-iphone-desing.png',
                        background: '#131318',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Mobile Search Results',
                        imageUrl: '/img/works/ylopo/ylopo-mobile-search-results.png', //search-results.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ylopo/ylopo-mobile-menu-animation.gif',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Desktop Search Results',
                        imageUrl: '/img/works/ylopo/ylopo-desktop-new@3x.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ylopo/ylopo-search-results.gif',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Desktop Filters',
                        imageUrl: '/img/works/ylopo/ylopo-desktop-filters-new@3x.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'More Filters',
                        imageUrl: '/img/works/ylopo/ylopo-more-filters.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Search Active',
                        imageUrl: '/img/works/ylopo/ylopo-desktop-search-active@3x.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Map View',
                        imageUrl: '/img/works/ylopo/ylopo-map-view@3x.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ylopo/ylopo-map@3x.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ylopo/ylopo-map@3x-new.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ylopo/mobile@3x-filters.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Tablet Filters',
                        imageUrl: '/img/works/ylopo/ipad-mockup.png',
                        background: 'linear-gradient(333deg, rgba(0, 0, 0, 0) 56%, #000 100%), linear-gradient(235deg, #100026, #0b3837 41%, #02181c 100%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Listing Details',
                        imageUrl: '/img/works/ylopo/white-clay.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ylopo/mobile-details.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ylopo/ylopo-schedule-showing.gif',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ylopo/ylopo-ldp.gif',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ylopo/ldp-calc-tour-home.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ylopo/ylopo-zeplin-design.png',
                        background: 'transparent',
                    },
                    /*last section, can't export images {
                        type: pageBlockTypes.avaliableOn,
                        title: 'Thank you for viewing.',
                        imageUrl: '/img/creative-market.png',
                        link: 'https://creativemarket.com/Bussolini/906376-Sketch-Web-Dashboard-UI'
                    }*/
                ],
                mobile: [
                    {
                        type: pageBlockTypes.textWith3Cols,
                        content: [
                            {
                                title: 'Problem',
                                text: '70% of traffic was from mobile with no specific mobile theme in place.',
                            },
                            {
                                title: 'Solution',
                                text: 'Design a mobile first experience that focused on enhancing conversion for new users.',
                            },
                            {
                                title: 'Outcome',
                                text: 'ARR catapulted from $20M to over $100M within the first year of new design.',
                            }
                        ]
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ylopo/iphone.png',
                        background: '#0d0d11',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Mobile Search Results',
                        imageUrl: '/img/works/ylopo/search-results-36@3x.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ylopo/map-view-clusters@3x.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ylopo/ylopo-map@3x.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ylopo/ylopo-map@3x-new.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ylopo/v-1-filters-mobile@3x.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ylopo/ylopo-mobile-menu-animation.gif',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Card Style',
                        imageUrl: '/img/works/ylopo/card-1@3x.png',
                        background: 'transparent',
                    },

                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Desktop',
                        imageUrl: '/img/works/ylopo/desktop-@3x.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ylopo/ylopo-search-results.gif',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Desktop Filters',
                        imageUrl: '/img/works/ylopo/price@3x.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ylopo/hometype@3x.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ylopo/ylopo-desktop-bed-bath@3x.png',
                        background: 'transparent',
                    },

                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Filters',
                        imageUrl: '/img/works/ylopo/group@3x.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ylopo/srp@3x.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Tablet Filters',
                        imageUrl: '/img/works/ylopo/ipad-mockup.png',
                        background: 'linear-gradient(333deg, rgba(0, 0, 0, 0) 56%, #000 100%), linear-gradient(235deg, #100026, #0b3837 41%, #02181c 100%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ylopo/mobile-v-2-calc@3x.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ylopo/ldp-contact@3x.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ylopo/ldp-image@3x.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ylopo/ylopo-schedule-showing.gif',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ylopo/ldp-calc-tour-home@3x.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ylopo/ylopo-ldp.gif',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ylopo/ylopo-zeplin-design.png',
                        background: 'transparent',
                    },
                ]
            }
        },
        {
            title: 'React Email',
            description: 'Mobile & Desktop Email',
            img: '/img/works/react-email/cover@3x.png',
            homeImgUrl: '/img/works/react-email/react-email.png',
            url: '/selected-work/react-email',
            pageTitle: 'Mobile & Desktop Email Design Built in Sketch.',
            pageSupTitle: 'Desktop & mobile site',
            subheroList: [
                {
                    title: 'Platform',
                    list: ['Mobile & Desktop'],
                },
                {
                    title: 'Role',
                    list: ['Interface Design'],
                },
                {
                    title: 'Release',
                    list: ['Built Internally'],
                }
            ],
            content: {
                desktop: [
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Mobile',
                        imageUrl: '/img/works/react-email/mobile.png',
                        background: 'radial-gradient(circle at 40% 18%, #1e263e, #161d2f 10%, #020203 31%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Desktop',
                        imageUrl: '/img/works/react-email/react-email-mobile.png',
                        background: '#020203',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Components',
                        imageUrl: '/img/works/react-email/components.png',
                        background: '#020203',
                    },
                ],
                mobile: [
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Mobile',
                        imageUrl: '/img/works/react-email/fold-mobile.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/react-email/scroll-1-mobile.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/react-email/scroll-2-mobile.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/react-email/scroll-3-mobile.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Desktop',
                        imageUrl: '/img/works/react-email/react-email-mobile.png',
                        background: '#020203',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Components',
                        imageUrl: '/img/works/react-email/components-sensors.png',
                        background: '#020203',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/react-email/components-summary.png',
                        background: '#020203',
                    },

                ]
            }
        },
        {
            title: 'Charts / Controls',
            description: 'Sketch UI Kit',
            img: '/img/works/charts/charts@3x-2.png',
            homeImgUrl: '/img/works/charts/charts-main.png',
            homeImgUrlMobile: '/img/works/charts/charts-mobile@3x.png',
            url: '/selected-work/charts-controls',
            pageTitle: 'Custom Chart Views and Dynamic Layouts Created Exclusively for Sketch.',
            pageSupTitle: 'CHARTS / CONTROLS',
            subheroList: [
                {
                    title: 'Platform',
                    list: ['Desktop'],
                },
                {
                    title: 'Role',
                    list: ['Creative Direction', 'Interface Design'],
                },
                {
                    title: 'Release',
                    list: ['View on Creative Market'],
                }
            ],
            content: {
                desktop: [
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/charts/charts@2x.png',
                        background: ' radial-gradient(circle at 50% 0%, rgba(17, 26, 42, 0.5), rgba(22, 34, 55, 0.5) 31%, rgba(0, 0, 0, 0.5) 81%), linear-gradient(to bottom, #061221, #061221)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Drop Navigation',
                        imageUrl: '/img/works/charts/drop-nav.png',
                        background: 'linear-gradient(118deg, #0d2450, #061319 98%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/charts/product-mock.png',
                        background: 'radial-gradient(circle at 50% 0, rgba(77, 166, 199, 0.5), rgba(0, 0, 0, 0.5) 78%), linear-gradient(to bottom, #061221, #061221)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/charts/data-detail-information.png',
                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.32)), linear-gradient(122deg, #0b1c3d, #143b4e 55%, #032611 98%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/charts/data-detail-information-2.png',
                        background: 'radial-gradient(circle at 50% 0, rgba(134, 35, 227, 0.5), rgba(0, 0, 0, 0.5) 78%), linear-gradient(to bottom, #061221, #061221)',
                    },
                    {
                        type: pageBlockTypes.avaliableOn,
                        title: 'Avaliable on',
                        imageUrl: '/img/creative-market.png',
                        link: 'https://creativemarket.com/CosmicMotive/3248550-Charts-Controls-UI-Kit-%E2%80%A2-Sketch'
                    }
                ],
                mobile: [] // when it empty, desktop version will be displayed on mobile
            }
        },
        {
            title: 'Mission Control React Dashboard',
            description: 'Product Design for Ylopo Mission Control',
            img: '/img/works/react-dashboard/selected-work.png',
            homeImgUrl: '/img/works/react-dashboard/mac.png',
            url: '/selected-work/react-dashboard',
            pageTitle: '',
            pageSupTitle: '',
            subheroList: [
                {
                    title: 'Platform',
                    list: ['React Desktop'],
                },
                {
                    title: 'Role',
                    list: ['Interface Design'],
                },
                {
                    title: 'Release',
                    list: ['In Production'],
                }
            ],
            content: {
                desktop: [
                    {
                        type: pageBlockTypes.textWithBg,
                        subtitle: 'Mission Control is an existing Dashboard redesign that included 70% new features. In addition to finding and posting MLS data it allows users to have a central command center for creating listings, advertisements, and providing full insights into results. The desktop product features user and admin experiences and was built using React.',
                        title: 'Mission Control Dashboard',
                        imageUrl: '/img/works/react-dashboard/ia.png',
                        background: '#070e19',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Dashboard Home',
                        imageUrl: '/img/works/react-dashboard/mission-control.png',
                        background: '#070e19',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Modal Inputs',
                        imageUrl: '/img/works/react-dashboard/mission-control-modal.png',
                        background: '#070e19',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/react-dashboard/mission-control-preview.png',
                        background: '#070e19',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/react-dashboard/generate-seller-report.png',
                        background: '#070e19',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Existing Budget Modal & Functional Wireframe',
                        imageUrl: '/img/works/react-dashboard/existing-budget.png',
                        background: '#070e19',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Revised Design',
                        imageUrl: '/img/works/react-dashboard/mission-control-budget-launch.png',
                        background: '#070e19',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/react-dashboard/mission-control-lead-no-circles.jpg',
                        background: '#070e19',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/react-dashboard/mission-control-location-active.png',
                        background: '#070e19',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/react-dashboard/mission-control-location.png',
                        background: '#070e19',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/react-dashboard/react-dashboard-dva.png',
                        background: '#070e19',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Market Listing with Facebook Ad Preview',
                        imageUrl: '/img/works/react-dashboard/market-listing.png',
                        background: '#070e19',
                    },

                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/react-dashboard/market-listing-campaigns.png',
                        background: '#070e19',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/react-dashboard/market-listing-results.png',
                        background: '#070e19',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/react-dashboard/my-leads-show-more.png',
                        background: '#070e19',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/react-dashboard/user-profile-expanded.png',
                        background: '#070e19',
                    },

                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/react-dashboard/domains-black.png',
                        background: '#070e19',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/react-dashboard/edit-domain.png',
                        background: '#070e19',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/react-dashboard/edit-domain-search-active.png',
                        background: '#070e19',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/react-dashboard/edit-domain-tiles.png',
                        background: '#070e19',
                    },

                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Notifications',
                        imageUrl: '/img/works/react-dashboard/mission-control-18.png',
                        background: '#070e19',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Notifications Full',
                        imageUrl: '/img/works/react-dashboard/mission-control-success-notify-all.png',
                        background: '#070e19',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/react-dashboard/agent-tooling.gif',
                        background: '#070e19',
                    },
                ],
                mobile: {

                }
            }
        },
        {
            title: 'Sci-Fi',
            description: 'Craft Memorable and Futuristic Product Concepts Using Sketch.',
            img: '/img/works/ski-fi/ski-fi-selected-work.png',
            homeImgUrl: '/img/works/ski-fi/sci-fi-sketch@3x.png',
            url: '/selected-work/sci-fi',
            pageTitle: 'Craft Memorable and Futuristic Product Concepts Using Sketch.',
            pageSupTitle: 'SKETCH UI KIT',
            subheroList: [
                {
                    title: 'Platform',
                    list: ['Desktop'],
                },
                {
                    title: 'Role',
                    list: ['Creative Direction', 'Interface Design'],
                },
                {
                    title: 'Release',
                    list: ['View on Creative Market'],
                }
            ],
            content: {
                desktop: [
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ski-fi/1.png',
                        background: '#141a24',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ski-fi/3.png',
                        background: '#141a24',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ski-fi/2.png',
                        background: '#141a24',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ski-fi/4.png',
                        background: '#141a24',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/ski-fi/screen-empty.png',
                        background: 'url("/img/works/ski-fi/screen@3x.png") no-repeat center/cover, #141a24',
                    },
                    {
                        type: pageBlockTypes.avaliableOn,
                        title: 'Avaliable on',
                        imageUrl: '/img/creative-market-white.png',
                        link: 'https://creativemarket.com/CosmicMotive/7238019-Sci-Fi-Sketch'
                    }
                ],
                mobile: {

                }
            }
        },
        {
            title: 'Oracle',
            description: 'Product Design for Oracle.com',
            img: '/img/works/oracle/selected-work.png',
            homeImgUrl: '/img/works/oracle/oracle@2x.png',
            url: '/selected-work/oracle',
            pageTitle: 'Desktop Component Design Library Built in Sketch.',
            pageSupTitle: 'Oracle',
            subheroList: [
                {
                    title: 'Platform',
                    list: ['Desktop'],
                },
                {
                    title: 'Role',
                    list: ['Interface Design'],
                },
                {
                    title: 'Release',
                    list: ['Internally'],
                }
            ],
            content: {
                desktop: [
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Web Standards • Implemented Designs',
                        imageUrl: '/img/works/oracle/browser.png',
                        background: 'radial-gradient(circle at 50% -15%, #727c99, #323643 10%, #131417 80%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'File Logic',
                        imageUrl: '/img/works/oracle/file-logic.png',
                        background: '#131417',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Contact Widget Design',
                        imageUrl: '/img/works/oracle/contact-widget-design.png',
                        background: '#131417',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/oracle/contact-mobile.png',
                        background: '#131417',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'CB51-Tile-Panel-Pop-Up',
                        imageUrl: '/img/works/oracle/component.png',
                        background: '#131417',
                    },

                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'CM05-Playlist-Video-player',
                        imageUrl: '/img/works/oracle/video-spotlight.png',
                        background: '#131417',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Collaborative Concept Work',
                        imageUrl: '/img/works/oracle/site-comp.png',
                        background: '#131417',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Grid System',
                        imageUrl: '/img/works/oracle/grid-system.png',
                        background: '#131417',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'CB44-Content-Panels',
                        imageUrl: '/img/works/oracle/content-panels.png',
                        background: '#131417',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'CB45-Infographic-Panel',
                        imageUrl: '/img/works/oracle/infographic-panel.png',
                        background: '#131417',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/oracle/pricing-overview-panel.png',
                        background: '#131417',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'CB58-Photo-Tiles-w:Lightbox-Content',
                        imageUrl: '/img/works/oracle/photo-tiles.png',
                        background: '#131417',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'CB92-Pricing-Pass',
                        imageUrl: '/img/works/oracle/pricing-pass.png',
                        background: '#131417',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'CB94-Compare-Benefits-Table',
                        imageUrl: '/img/works/oracle/compare-benefits-table.png',
                        background: 'radial-gradient(circle at 40% 18%, #222631, #1c1f29 10%, #121419 31%)',
                    },

                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Desktop 1600px',
                        imageUrl: '/img/works/oracle/oracle-product-page-desktop.png',
                        background: 'radial-gradient(circle at 40% 18%, #222631, #222633 10%, #121419 31%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Tablet 570px',
                        imageUrl: '/img/works/oracle/tablet.png',
                        background: '#131417',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/oracle/oracle-grid.png',
                        background: '#131417',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: 'Mobile 375px',
                        imageUrl: '/img/works/oracle/mobile.png',
                        background: '#131417',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/oracle/mobile-2.png',
                        background: '#131417',
                    },
                ],
                mobile: {

                }
            }
        },
        {
            title: 'Cosmic Chat',
            description: 'Product Design for a Chat Experience',
            img: '/img/works/cosmic-chat/cosmic-chat-thumb.png',
            homeImgUrl: '/img/works/cosmic-chat/cosmic-chat-hero-original.png',
            url: '/selected-work/cosmic-chat',
            pageTitle: 'Futuristic Chat Product Concept for Displaying Various Text Information.',
            pageSupTitle: 'Cosmic Chat',
            subheroList: [
                {
                    title: 'Platform',
                    list: ['Desktop'],
                },
                {
                    title: 'Role',
                    list: ['Creative Direction', 'Interface Design'],
                },
                {
                    title: 'Release',
                    list: ['View on Creative Market'],
                }
            ],
            content: {
                desktop: [
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/cosmic-chat/cosmic-chat-1.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/cosmic-chat/cosmic-chat-2.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/cosmic-chat/cosmic-chat-3.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/cosmic-chat/cosmic-chat-4.png',
                        background: 'transparent',
                    },
                    {
                        type: pageBlockTypes.avaliableOn,
                        title: 'Avaliable on',
                        imageUrl: '/img/creative-market-white.png',
                        link: 'https://creativemarket.com/CosmicMotive/7219704-Cosmic-Chat'
                    }
                ],
                mobile: [

                ]
            }
        },
        {
            title: 'Concept & Print Work',
            description: 'Conepts & Printed Pieces',
            img: '/img/works/concept/selected-work.png',
            url: '/selected-work/concept',
            pageTitle: 'A Collection of Printed Media Crafted for Trion Worlds and Other Concept Designs.',
            pageSupTitle: 'PRINT / CONCEPT',
            subheroList: [
                {
                    title: 'Platform',
                    list: ['Desktop'],
                },
                {
                    title: 'Role',
                    list: ['Creative Direction', 'Interface Design'],
                },
                {
                    title: 'Release',
                    list: ['Printed or Displayed'],
                }
            ],
            content: {
                desktop: [
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/concept/1.jpg',
                        background: '',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/concept/2.jpg',
                        background: '',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/concept/3.jpg',
                        background: '',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/concept/trion-cards.png',
                        background: '',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/concept/4.jpg',
                        background: '',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/concept/5.jpg',
                        background: '',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/concept/6.jpg',
                        background: '',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/concept/7.jpg',
                        background: '',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/concept/8.jpg',
                        background: '',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/concept/9.jpg',
                        background: '',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/concept/10.jpg',
                        background: '',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/concept/11.jpg',
                        background: '',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/concept/12.jpg',
                        background: '',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/concept/13.jpg',
                        background: '',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/concept/14.jpg',
                        background: '',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/concept/15.jpg',
                        background: '',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/concept/16.jpg',
                        background: '',
                    },
                ],
                mobile: {

                }
            }
        },
        {
            title: 'Sci-Fi UI Kit 2023',
            description: 'Concept Work for Sci-Fi Inspired Kit',
            img: '/img/works/sci-fi-2023/sci-fi-2023-thumb.png',
            homeImgUrl: '/img/works/sci-fi-2023/sci-fi-2023-monitor-thumb.png',
            // homeImgUrlMobile: '/img/works/sci-fi-2023/sci-fi-2023-monitor-thumb-mobile.png.png',
            url: '/selected-work/sci-fi-2023',
            pageTitle: 'Sci-Fi UI Kit 2023.',
            pageSupTitle: 'SKETCH UI KIT',
            subheroList: [
                {
                    title: 'Platform',
                    list: ['Desktop'],
                },
                {
                    title: 'Role',
                    list: ['Creative Direction', 'Interface Design'],
                },
                {
                    title: 'Release',
                    list: ['View on Creative Market'],
                }
            ],
            content: {
                desktop: [
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-1.png',
                        background: 'url("/img/works/sci-fi-2023/sci-fi-2023-background-1.png") no-repeat right center/contain, linear-gradient(193deg, #051024 93%, rgba(6, 17, 38, 0) 69%, #051024 24%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-2.png',
                        background: '#051028',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-3.png',
                        background: 'url("/img/works/sci-fi-2023/sci-fi-2023-background-2.png") no-repeat right center/contain, linear-gradient(193deg, #051024 92%, rgba(6, 17, 38, 0.54) 48%, #051024 -3%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-4.png',
                        background: 'url("/img/works/sci-fi-2023/background-test.png") no-repeat left top, #051028',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        fullwidth: true,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-5.png',
                        background: '#051028',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-6.png',
                        background: '#051028',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-7.png',
                        background: '#051028',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-8.png',
                        background: '#051028',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-9.png',
                        background: '#051028',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-10.png',
                        background: '#051028',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        fullwidth: true,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-11.png',
                        background: '#051028',
                    },
                    {
                        type: pageBlockTypes.avaliableOn,
                        title: 'Avaliable on',
                        imageUrl: '/img/creative-market.png',
                        link: 'https://creativemarket.com/CosmicMotive/12738586-Sci-Fi-UI-Kit-2023'
                    }
                ],
                mobile: [
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-mobile-1.png',
                        background: '#000',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-mobile-2.png',
                        background: 'linear-gradient(188deg, #051024 94%, rgba(6, 17, 38, 0) 67%, #051024 17%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-mobile-3.png',
                        background: 'url("/img/works/sci-fi-2023/sci-fi-2023-background-1.png") no-repeat center right, linear-gradient(188deg, #051024 94%, rgba(6, 17, 38, 0) 67%, #051024 17%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-mobile-4.png',
                        background: 'linear-gradient(188deg, #051024 94%, rgba(6, 17, 38, 0) 67%, #051024 17%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-mobile-5.png',
                        background: 'url("/img/works/sci-fi-2023/sci-fi-2023-mobile-background-1.png") no-repeat center/cover, linear-gradient(188deg, #051024 94%, rgba(6, 17, 38, 0) 67%, #051024 17%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-mobile-6.png',
                        background: 'linear-gradient(188deg, #051024 94%, rgba(6, 17, 38, 0) 67%, #051024 17%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-mobile-7.png',
                        background: 'linear-gradient(188deg, #051024 94%, rgba(6, 17, 38, 0) 67%, #051024 17%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-mobile-8.png',
                        background: 'linear-gradient(188deg, #051024 94%, rgba(6, 17, 38, 0) 67%, #051024 17%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-mobile-9.png',
                        background: 'linear-gradient(188deg, #051024 94%, rgba(6, 17, 38, 0) 67%, #051024 17%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-mobile-10.png',
                        background: 'linear-gradient(188deg, #051024 94%, rgba(6, 17, 38, 0) 67%, #051024 17%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-mobile-11.png',
                        background: 'linear-gradient(188deg, #051024 94%, rgba(6, 17, 38, 0) 67%, #051024 17%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-mobile-12.png',
                        background: 'linear-gradient(188deg, #051024 94%, rgba(6, 17, 38, 0) 67%, #051024 17%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-mobile-13.png',
                        background: 'linear-gradient(188deg, #051024 94%, rgba(6, 17, 38, 0) 67%, #051024 17%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-mobile-13.1.png',
                        background: 'linear-gradient(188deg, #051024 94%, rgba(6, 17, 38, 0) 67%, #051024 17%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-mobile-13.2.png',
                        background: 'linear-gradient(188deg, #051024 94%, rgba(6, 17, 38, 0) 67%, #051024 17%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-mobile-13.3.png',
                        background: 'linear-gradient(188deg, #051024 94%, rgba(6, 17, 38, 0) 67%, #051024 17%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-mobile-13.4.png',
                        background: 'linear-gradient(188deg, #051024 94%, rgba(6, 17, 38, 0) 67%, #051024 17%)',
                    },
                    
                    // Missed blocks
                    
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-mobile-14.png',
                        background: 'linear-gradient(188deg, #051024 94%, rgba(6, 17, 38, 0) 67%, #051024 17%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-mobile-15.png',
                        background: 'linear-gradient(188deg, #051024 94%, rgba(6, 17, 38, 0) 67%, #051024 17%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-mobile-16.png',
                        background: 'linear-gradient(188deg, #051024 94%, rgba(6, 17, 38, 0) 67%, #051024 17%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-mobile-17.png',
                        background: 'linear-gradient(188deg, #051024 94%, rgba(6, 17, 38, 0) 67%, #051024 17%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-mobile-18.png',
                        background: 'linear-gradient(188deg, #051024 94%, rgba(6, 17, 38, 0) 67%, #051024 17%)',
                    },
                    {
                        type: pageBlockTypes.textWithBg,
                        fullwidth: true,
                        title: '',
                        imageUrl: '/img/works/sci-fi-2023/sci-fi-2023-mobile-19.png',
                        background: 'linear-gradient(188deg, #051024 94%, rgba(6, 17, 38, 0) 67%, #051024 17%)',
                    },
                    {
                        type: pageBlockTypes.avaliableOn,
                        title: 'Avaliable on',
                        imageUrl: '/img/creative-market.png',
                        link: 'https://creativemarket.com/CosmicMotive/12738586-Sci-Fi-UI-Kit-2023'
                    }
                ]
            }
        },

    ],
}

export const WorkReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}