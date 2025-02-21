import {
    PRELOADER_ON,
    PRELOADER_OFF,
    PAGE_TRANSITION_ON,
    PAGE_TRANSITION_OFF,
    ideasPageBlockTypes,
    INCREMENT_LOADED_IMAGES,
    MOBILE_MENU_ON, MOBILE_MENU_OFF, MOBILE_VIEW_ON, MOBILE_VIEW_OFF,
} from "../types";

const initialState = {
    preloader: true,
    pageTransition: false,
    routeTo: '',
    socialLinks: [
        {
            icon: '/img/icons/dribbble.svg',
            alt: 'Cosmic-motive dribble',
            url: 'https://dribbble.com/CosmicMotive',
            navTitle: 'CosmicMotive',
            navIcon: '/img/icons/nav-dribble.svg',
        },
        {
            icon: '/img/icons/behance.svg',
            alt: 'Cosmic-motive behance',
            url: 'https://www.behance.net/CosmicMotive',
            navTitle: '/CosmicMotive',
            navIcon: '/img/icons/nav-behance.svg',
        },
        {
            icon: '/img/icons/linkedin.svg',
            alt: 'Cosmic-motive linkedin',
            url: 'https://www.linkedin.com/company/77155561',
            navTitle: 'in/CosmicMotive',
            navIcon: '/img/icons/nav-linkedin.svg',
        },
        {
            icon: '/img/icons/twitter.svg',
            alt: 'Cosmic-motive twitter',
            url: 'https://mobile.twitter.com/cosmicmotive',
            navTitle: '@CosmicMotive',
            navIcon: '/img/icons/twitter-nav.svg',
        }
    ],
    contactEmail: 'info@CosmicMotive.com',
    ideas: [
        {
            url: '/ideas/what-is-lean-design/',
            title: 'What is Lean Design?',
            subtitle: 'A look into Lean Startup Method and Lean UI / UX Design.',
            category: 'Agile Software Development',
            content: [
                {
                    type: ideasPageBlockTypes.text,
                    title: 'Picking the Right CMS.',
                    text: 'Lean Startup Method is a book written by Eric Ries that applies lean methodologies within product design cycles. Developed from his experience as a startup advisor, employee, and founder he sought to create an easier way to measure and align user expectation’s with solutions. After the failure of his first startup Eric recognized the issue was overlooking the wants of their target users, while spending too much time focusing on their initial product launch. Afterwards he saw another large and expensive product launch fail and discovered the error in both instances as',
                },
                {
                    type: ideasPageBlockTypes.text,
                    title: '',
                    text: 'Ries found in order to build a great company one must begin with a focus on users in the form of research and discovery. Building an MVP (Minimum Viable Product) and testing and iterating quickly results in less waste and better product alignment in the market. Eric developed what he calls the “five whys” to further stress the importance of understanding the placement of the product before any design work is ever done. '
                },
                {
                    type: ideasPageBlockTypes.text,
                    title: '',
                    text: 'By combining user’s expectations with a solution Eric sought to reduce the amount of work that isn’t usable in final delivery or would test poorly by users. Eric inspired lean methodologies primarily in areas like user interface and experience design by taking a similar approach to defining user’s expectations and working backward to achieve a product solution.'
                },
                {
                    type: ideasPageBlockTypes.text,
                    title: '',
                    text: 'In Lean UX the focus is on the experience under design and is less focused on final deliverables than traditional UX. It requires a greater level of collaboration within a cross-functional team, and similar to Lean Startup is focused on obtaining feedback early and often to iterate quickly on new decisions. (2)',
                },
                {
                    type: ideasPageBlockTypes.text,
                    title: '',
                    text: 'The nature of Agile is to work in rapid, iterative cycles and Lean UX mimics this format to ensure generated data can be applied in each iteration. Lean methodologies compliment Agile software development by working in parallel to assemble and produce necessary elements for production, with little waste on producing elements that aren’t used in final production or alter user’s perception in a negative way. ',
                },
                {
                    type: ideasPageBlockTypes.text,
                    title: '',
                    text: 'By applying Lean methodologies to your product design cycles you can expect to speed up innovation, have a stronger degree of certainty with usability, and ensure what is created is inline with user’s expectations of your product. This gives design and development the ability to iterate and pivot quickly, providing organizations the ability to move fast with confidence. It aligns every business sector to achieve a universal goal and promotes cross-collaboration through knowledge sharing. By multiplying business impact and aligning it to user’s expectations it provides a clear path for a successful product to grow. The focus of Lean methodologies is to discover this recipe early and often, and continue to promote that value to users in a direct way. ',
                },
                {
                    type: ideasPageBlockTypes.text,
                    title: '',
                    text: 'Lean Startup Method and Lean UI / UX design also aligns business objectives with a product solution in parallel. You’re also ensuring what you build is inline with user’s expectations, and will be received well at launch and into the first iterations of the product. From a resource point of view Lean has helped me as a designer to instill business logic within design so seamlessly that the experience takes over and engages the user. This is a powerful tool in product design since it often means the ability for a user to be successful or have pain points within product cycles. I use Lean methodologies in all of my work as a way to collaborate and retain the best designs that are often used in final production. It alleviates the need to have a waterfall approach to product development, which for early stage startups is a tough gamble considering the flexibility agile provides. Instead of building all elements before production Lean allows companies to have insight before a product launch that not only helps in the initial launch, but provides a format for deliverables needed to sustain an Agile setting. The concept of testing early and often is commonly overlooked in larger product design cycles, and is one foundational element that should be a focus for companies to promote. Lean methodologies do a great job at stressing the importance of collaboration, not only within a company, but with users as well. ',
                },
                {
                    type: ideasPageBlockTypes.text,
                    title: 'References:',
                    text: '<a target="_blank" rel="noopener nofollow" href="https://en.wikipedia.org/wiki/The_Lean_Startup">https://en.wikipedia.org/wiki/The_Lean_Startup</a> <br/> <a target="_blank" rel="noopener nofollow" href="https://www.interaction-design.org/literature/article/a-simple-introduction-to-lean-ux">https://www.interaction-design.org/literature/article/a-simple-introduction-to-lean-ux</a>',
                },
            ]
        },
        {
            url: '/ideas/jpg-vs-png/',
            title: 'JPG vs PNG.',
            subtitle: 'Where and when to use each format and how best to optimize each.',
            category: 'INSIGHT / Process',
            content: [
                {
                    type: ideasPageBlockTypes.text,
                    title: '',
                    text: 'One aspect that repeats in design is the format in which digital files are saved and stored. I’ve researched JPG and PNG formats in addition to using my experience in print and digital production to help define a process.'
                },
                {
                    type: ideasPageBlockTypes.text,
                    title: '',
                    text: 'JPG handles pixel data better, such as images, but creates a lossy compressed file that renders any future edits in lower quality. PNG is lossless and is a lot sharper for things like typography, but the cost is large file sizes. In most of my work online outside of Dribbble I primarily use JPG to present my work. This is primarily due to the fact that most text doesn’t have to be crisp and the file size is the biggest factor in this choice. I’ve noticed with PNG there is room for color errors and in general a PNG is almost always darker when saved than the true value on the screen. By embedding a sRGB profile it can solve some of these aspects, but in general when small differences in value are needed JPG has always performed better for me. I appreciate showing my work in full-quality, however there are slight disadvantages to using PNG that goes beyond just file size. When presenting work in PNG format I often have to lighten backgrounds to get the right look. The same with shadows since a difference of 10-20% could make a huge difference in how it renders. Granted not one file format is perfect compared to the production file, however in general the two biggest factors with rendering colors and file size always has me going back to JPG. It is important to note factors such as monitor and browser make a huge difference as well, since even with accurate color profiles an image can still be rendering inaccurately compared to it’s source.'
                },
                {
                    type: ideasPageBlockTypes.text,
                    title: '',
                    text: 'In general I find save for web in Photoshop or exporting as JPG from Sketch the two optimal ways in documenting work. It is important to keep things like contrast, spacing, and values in perspective when completing a design so that the final result is as close to the source as possible. Another aspect that can be overlooked is the size of your design. Larger canvas sizes will most likely benefit from the smaller file size of JPG, whereas crisp graphics such as icons are best served in PNG. In order to determine the best approach I’d balance the size of the render and format to ensure the best result. It also important to note that most mobile screens I produce are in PNG format, but I use JPG when placing those images into larger compositions. I find a balance of both useful in crafting a quality end result. '
                },
            ]
        },
        {
            url: '/ideas/defining-your-minimum-viable-product/',
            title: 'Defining your Minimum Viable Product.',
            subtitle: 'Useful insights for getting your product out the door.',
            category: 'INSIGHT / Mobile Apps',
            content: [
                {
                    type: ideasPageBlockTypes.text,
                    title: 'Product Validation.',
                    text: 'The process of building a minimum viable product is an exciting journey that culminates a variety of business initiatives into one cohesive path. A minimum viable product serves as a proof-of-concept build to demonstrate the primary functionality of your mobile application. The focus of the build allows users an opportunity to experience the key features of your application and provide a feedback loop into effecting the product’s evolution in a direct way. The idea of building, measuring, and learning over time helps define a path for great products to develop. The goal of shipping software early is to increase knowledge over time. This approach to user-centered design is beneficial to individuals building their first application, as well as corporate entities looking for ways to quickly ideate new product ideas. The first step when beginning to think about your proof of concept build is to validate your idea as something uniquely valued by your users. I often hear ideas for applications that already exist in the marketplace, or are so similar to other applications it wouldn’t make sense to replicate. '
                },
                {
                    type: ideasPageBlockTypes.text,
                    title: 'It is important when considering the functionalities for your application that you take a unique approach to serving your users.',
                    text: 'I find with new product ideas they can overlook aspects that makes the difference between marketplace viability. Before a proof-of-concept build is considered it is important that as much work has been done to validate its place in the market for the users you are serving. An early and strong relationship between users and how they affect your product helps ensure a progressive path for the product’s evolution. '
                },
                {
                    type: ideasPageBlockTypes.text,
                    title: '',
                    text: 'The start of any great idea has been molded and shaped by the environment around it to be as unique as possible in it’s approach. For mobile applications this is having distinct differences for how you approach your product versus the competition. Once there is a clear path for your innovative idea to take shape achieving it becomes much easier.'
                },
                {
                    type: ideasPageBlockTypes.text,
                    title: '',
                    text: 'On most projects I usually start with brainstorming and competitive or comparative analysis. Creating a moodboard of interface patterns, branding elements, and colors help define a palette to drive design thinking. This helps clients and I to think similarly about how to approach the design, while providing visual examples to solutions that may work. I base most design decisions from quantitative or qualitative data, and develop personas to guide user experience. The goal of utilizing competitive or comparative data is to base your design decisions from, and to begin to define the reasons behind why certain patterns fit. It also gives insight into the competitive landscape and how best to position your product for success. '
                },
                {
                    type: ideasPageBlockTypes.text,
                    title: 'Validated? Great, Let’s Work!',
                    text: 'Once the key concept behind your idea is refined you can start to work on the functionality of your application. I find it helpful to work from a development backlog to map designs with user stories once key functionality has been defined. A development backlog should include the full scope of functionality for your application, which is often trimmed down or reprioritized based on the scope of the MVP. The backlog begins by defining the goal for your app. You then define roles and personas for your user group, in addition to non-functional requirements. When it comes to defining functional requirements it helps to create epics for your users stories, then writing them individually. '
                },
                {
                    type: ideasPageBlockTypes.text,
                    title: '',
                    text: 'This approach helps define development and design tasks simultaneously with product decisions. User stories capture and refine product decisions, and once those are completed the task of designing page flows and interactions becomes drastically easier. I rely upon a backlog as a foundational element for organized product design. '
                },
                {
                    type: ideasPageBlockTypes.text,
                    title: '',
                    text: 'The design process can begin at various stages, but from experience I have found it best to start design after a backlog has been completed with approval from the product owner. Once a general pass for layout and interactions is completed, more detail can be applied to individual screens. I consider my process for wireframing functional, meaning the elements are built using vector shapes, but for ideating colors and layer effects are omitted. This helps work out the specifications of design elements in perfect pixel form, so that once they are approved applying final visual design is a straightforward process. '
                },
                {
                    type: ideasPageBlockTypes.text,
                    title: 'Refine and Condense.',
                    text: 'Now that a development backlog is populated and the designs are close to complete an estimation can occur to define duration and cost. The estimation process is a highly important one. Without the right direction I have heard of many clients being led down various paths that are costly and don’t result in providing you with a functioning app. It is also important to consider the integrity of the code that is provided, since in many cases I have found rebuilding rather than refactoring code is the best option. When user stories are completed a group of developers and non-developers would then go through each individual use case and estimate the complexity on a point scale. A low point relates to a relatively easy task, where a higher point accounts for more complexity. At the end of the estimation the total story points are combined and a timeline is defined using an assumed velocity. When defining velocity keep in mind more developers can\'t necessarily build something faster, it is important to have the right amount of resources dedicated to fulfill the need. '
                },
                {
                    type: ideasPageBlockTypes.text,
                    title: 'My goal is to define information architecture and perfomance correctly from the start, with room to scale or refine within the code base as needed. ',
                    text: 'I find the estimation piece as the most complex throughout the process. As a designer I am confident with the work I can produce, however in building digital products there are so many aspects that can potentially go beyond scope in an agile setting. The product owner should be a single person defining the decisions that impact the build for each week, helping to keep the build on track. Agile software development traditionally takes a two-week cycle to build feature sets and move onto another sprint. I’ve found in proof-of-concept builds that having shorter week-long sprints helps manage all aspects more directly, and results in less potential issues arising towards release. It helps pace the design and development sprints in more manageable chunks so that you quickly see where issues arise and solve them before they get your timeline too far off scope. '
                },
                {
                    type: ideasPageBlockTypes.text,
                    title: 'Execute.',
                    text: 'Using an agile project management tool such as Pivotal helps organize your sprints on a weekly basis based on prioritization from the product owner. Given the velocity (amount of work that can be completed given resources over time) a weekly basis for points is established and the product owner is free to add or re-prioritize stories accordingly. Agile sprint cycles culminates with testing features that have been implemented to ensure working functionality. Once the designs are implemented it is necessary to take a pass at the layout to ensure development and design aspects match. There are tools that automate this process directly from your designs, which I find extremely useful in my own work. It helps to remove any doubt and in situations when you are dealing with off-shore teams, while helping to bridge cultural and linguistic gaps. This is why I am a huge fan of crafting pixel-perfect products. '
                },
                {
                    type: ideasPageBlockTypes.text,
                    title: '',
                    text: 'Designs that are not implemented correctly are considered bugs in the system, and sent back for a second pass to ensure the quality is the same as the design. Any bugs that are found from functionality to design errors are tracked and corrected during the QA process. In the end you should have a seamless journey from ideation towards execution. '
                },
            ]
        },
        {
            url: '/ideas/processwire-a-designers-perspective/',
            title: 'Content Management Systems: A Designer\'s Perspective.',
            subtitle: 'A deeper look into designing custom content management systems.',
            category: 'INSIGHT / Development',
            content: [
                {
                    type: ideasPageBlockTypes.text,
                    title: 'Picking the Right CMS.',
                    text: 'Content management systems are extremely helpful for web design. Since I first designed a website a lot has changed with the ways in which designs are produced, and how those aspects are served in development. I could remember hand-coding most of my early stuff and the concept of responsive or SVG icons was still pretty far off. Since then a lot of companies have leveraged technology in unique ways to adapt for a wide variety of use cases, from desktop computers to smartphones. The concept of a content management system (CMS) is pretty simple. It allows you to publish, edit and modify content, organize, delete as well as maintenance from a central interface. It automates the eco-system to a website. When considering a CMS it is helpful to know what tool you are dealing with. Wordpress is by far the most popular CMS out there, although there are a lot of other companies that compete for a similar ease of use. I recently used ProcessWire for my current site and have found more flexibility in the way the site is structured versus Wordpress. CMS is all about adapting a set of tools to accommodate the project you have at hand. '
                },
                {
                    type: ideasPageBlockTypes.text,
                    title: '',
                    text: 'Wordpress does a great job at larger integrations and blog content, but it comes preloaded with modules that not all sites necessarily take advantage of. Other management systems give the information architect more freedom to customize modules and sections to their preference or need, but require additional optimization to make them competitive with something like Wordpress. I find my work in building custom websites as one where you are constantly weighing the return on investment, while balancing the output and quality of the design. '
                },
                {
                    type: ideasPageBlockTypes.text,
                    title: 'Grid Systems.',
                    text: 'Grid systems are vital to any website. Think of it as a movable foundation for your digital property. At desktop size your website fits within certain parameters and breakpoints, and when it shifts to tablet that base becomes smaller and elements adapt. A grid system is vital to having an organized and streamlined process from design through development. Bootstrap and Foundation are both common frameworks that do excellent jobs at handling front-end grid systems. Add-ons such as Susy make customizing breakpoints and gutter spacing much easier. This is especially helpful when diving into mobile details since smartphones can vary in form factor. My first step before beginning any web design work is to define breakpoints, or the maximum allowable width sizes to a grid. I consider large format monitors, laptops, tablets, and smartphones. Column and gutter spacing I usually take as a case-by-case basis to decided what is best based on content. I\'ve found 30px gutters seems to fit well for most projects, but tend to go smaller for mobile devices. '
                },
                {
                    type: ideasPageBlockTypes.text,
                    title: 'Designing a Custom Site.',
                    text: 'Now that foundational elements are established with what CMS and grid system you are using the design process can begin. Sky is the limit with front-end integration, meaning you can do a lot with visual customization. It is helpful to look at and understand how and why companies use certain elements in their site in order to adapt them for your own. I find competitive analysis is vastly informative in the design process, however the missing link for most people is the amount of time and resources a company has put into developing those resources. This is where a balance of things that fit within your scope and budget can align to innovative and interesting ways of presenting your website. I primarily use Sketch for custom site designs, however I also appreciate the creative aspects Photoshop integrates into their software. In Sketch I define artboard sizes and grid systems. In Photoshop I will create a new document to the largest breakpoint and define a grid using GuideGuide. Most of my work recently has been interpreting wireframes, so a lot of the ideation part is loosely defined. In situations where I am ideating more I will usually start with a sketch or comparative analysis based on the industry. It helps greatly to have content documented in a text editor such as Microsoft Word. It ensures the text editing of your site is preserved, while giving structure and direction to that content. I find tools like Google docs useful as well for collaborating with offshore teams and other project members. '
                },
                {
                    type: ideasPageBlockTypes.text,
                    title: '',
                    text: 'When beginning a custom design I start from a blank canvas. After defining the grid and breakpoints I then build out the visuals. I use vector shapes in all of my work and will start by defining spacing for navigational and other elements on the page. It helps to understand the primary pieces of functionality so you can refine your decisions in those areas. Once larger elements are specified on the page I define more detail. I am always conscious of icon sizing and typographic layout to ensure consistent creative direction, and how to reference those decisions once the design is complete. I find doing it this way helps to move designs along quickly, there are cases where I am constrained within existing guidelines and create a loose guide to base the work from. I consider typography and how best to balance it on the page with headlines, sub-headlines, and body text. Defining H1, H2, H3 and other header tags within the word doc helps to visualize it within the design. Once the design is completed I will usually define a UI kit that relates the custom elements in the work to an over-arching theme. '
                },
            ]
        },
        {
            url: '/ideas/defining-an-agile-design-process/',
            title: 'Defining an Agile Design Process.',
            subtitle: 'Taking steps to coordinate design with development cycles.',
            category: 'INSIGHT / Process',
            content: [
                {
                    type: ideasPageBlockTypes.text,
                    title: 'Waterfall vs. Agile',
                    text: 'In software development there are two ways to develop products: waterfall or agile. The waterfall process takes the necessary time to design and plot all aspects of the application from front to back, and does a hand-off to development for implementation. With agile the work is compiled into a development backlog that includes the full scope of your project, however it is broken out into two-week sprint cycles in development. Both have advantages and disadvantages, but for the purpose of this post I wanted to focus on the positive aspects of defining an agile design process.'
                },
                {
                    type: ideasPageBlockTypes.text,
                    title: '',
                    text: 'Agile software development helps to integrate product, design, and development strategies seamlessly. Since so much can change within the evolution of a product, agile has become a standard for most agencies looking to innovate rapidly. Agile allows for tasks to be assembled and prioritized throughout the week, and gives a great deal of flexibility. A traditional sprint cycle is two-weeks, and design is usually one sprint ahead in handing off the production assets for the next sprint.'
                },
                {
                    type: ideasPageBlockTypes.text,
                    title: '',
                    text: 'Since agile contains so many moving pieces it can be easy to get lost or disorganized. I find having a development backlog from the start helps sync product and development tasks, which makes designing the full scope of the features a lot easier to complete. Once there is a clear direction to the development backlog it is a lot easier to map out the different aspects of the build. Since a product owner traditionally prioritizes the tasks completed within a sprint cycle it is helpful to be flexible in how you approach your design. I usually map interactions to user stories to ensure the proper screens are accounted for, and will refine individual screens as the sprint cycle approaches. Taking a soft pass at the overall layout of the app helps define a baseline of files to work from, which makes adding or editing screens a lot easier. Keeping each screen confined to an artboard helps to organize your design. I like to take a general pass at all the screens prior to getting too far into details. This helps to define an over-arching creative direction, while developing interface patterns for repeating content elements. This part is vital to ensuring consistency and quality throughout your application. Without the right direction I have seen many clients come to me with designs that are less than halfway complete and lack any clear direction to the decisions they chose stylistically. '
                },
                {
                    type: ideasPageBlockTypes.text,
                    title: 'The goal of my work is to create consistent experiences that align product, design, and development into one cohesive path.',
                    text: 'Before any development is done a kickoff meeting is held with every stakeholder to coordinate the efforts in the build. The estimation timelines and assumed velocity (amount of work that can be complete given resources) help to define the story points that can be included per week. I find one dedicated design resource leading two development resources produces the right amount of velocity for most sprint cycles, which equates to around 12 points per week. Once a baseline is established for velocity the planning part can take place. It\'s helpful to plan all weeks of the sprint at the initial start to give some organization to the build. Every two-weeks there is a list of tasks completed, and at the end of those two-weeks there is a review process for functionality and design. In smaller proof of concept builds I find one-week sprint cycles work a little better. '
                },
                {
                    type: ideasPageBlockTypes.text,
                    title: 'Defining Agile Design',
                    text: 'The process of designing on an agile schedule is something that always has its fair share of complexities. By starting with a development backlog it helps to ensure the product and development aspects are accounted for, so when designs are completed it accounts for as many edges cases as possible.'
                },
                {
                    type: ideasPageBlockTypes.text,
                    title: '',
                    text: 'The goal is not to define a process that is rigid in implementation, but rather to suggest that by coordinating the efforts from product, design, and development it creates a more consistent and cohesive product. '
                },
            ]
        },
    ],
    imagesLoaded: 0,
    mobileMenuOpened: false,
    isMobile: true,
    heroSlides: [
        {
            projectName: 'Infinite Innovation',
            title: 'Product Design, Branding and\nIntegrated Digital Experiences.',
            subtitle: 'From ideation through final production, our vision is always focused on your users.',
            mobileTitle: 'Product Design, Branding & Digital Experiences',
            mobileSubtitle: 'From ideation through final production, our vision is always focused on your users.',
            btnText: 'CREATIVE SERVICES',
            btnUrl: '/selected-work',
            img: '/img/hero-slide-1.webp',
            imgMobile: '/img/1.png',
        },
        {
            projectName: 'Agile & Lean',
            title: 'Infinite Design Innovation Leading\nContinuous Development Cycles.',
            subtitle: 'From ideation through final production, our vision is always focused on your users.',
            mobileTitle: 'Mobile Product Design Using Native & Web Technologies',
            mobileSubtitle: 'We transform ideas into products using the latest web and mobile technologies.',
            btnText: 'CREATIVE SERVICES',
            btnUrl: '/selected-work',
            img: '/img/volta@2x.png',
            imgMobile: '/img/2.png',
        },
        {
            projectName: 'Native & Web',
            title: 'Interactive & Dynamic Media\nVisualized in Interfaces.',
            subtitle: 'From ideation through final production, our vision is always focused on your users.',
            mobileTitle: 'Interactive & Dynamic Media Visualized in Interfaces ',
            mobileSubtitle: 'From defined API’s to customizing your own, our experience can help visualize your data.',
            btnText: 'CREATIVE SERVICES',
            btnUrl: '/selected-work',
            img: '/img/data-detail-information.png',
            imgMobile: '/img/3.png',
        },
        {
            projectName: 'Digital Solutions',
            title: 'Full-Cycle Product Solutions\nUsing Lean & Agile Methodologies.',
            subtitle: 'From ideation through final production, our vision is always focused on your users.',
            mobileTitle: 'Full-Cycle Product Solutions Using Lean & Agile Methodologies',
            mobileSubtitle: 'Defining custom interfaces for unqiue data sets and user types.',
            btnText: 'CREATIVE SERVICES',
            btnUrl: '/selected-work',
            img: '/img/case-4-bg.png',
            imgMobile: '/img/4.png',
        }
    ],
    appMessages: [
        {
            id: 1,
            title: "Hello world",
            text: "thanks",
            type: "success"
        },
        {
            id: 2,
            title: "Hello world",
            text: "thanks",
            type: "error"
        }
    ]
}

export const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRELOADER_ON:
            return {
                ...state,
                preloader: true,
            };
        case PRELOADER_OFF:
            return {
                ...state,
                preloader: false,
            }
        case PAGE_TRANSITION_ON:
            return {
                ...state,
                pageTransition: true,
                routeTo: action.data,
            }
        case PAGE_TRANSITION_OFF:
            return {
                ...state,
                pageTransition: false,
            }
        case INCREMENT_LOADED_IMAGES:
            return {
                ...state,
                imagesLoaded: state.imagesLoaded + 1,
            }
        case MOBILE_MENU_ON:
            return {
                ...state,
                mobileMenuOpened: true,
            }
        case MOBILE_MENU_OFF:
            return {
                ...state,
                mobileMenuOpened: false
            }
        case MOBILE_VIEW_ON:
            return {
                ...state,
                isMobile: true
            }
        case MOBILE_VIEW_OFF:
            return {
                ...state,
                isMobile: false
            }
        default:
            return state;
    }
}