                     
<h1 align="center" style="font-weight: bold;">TechFloww IT Services Landing Page</h1>

<img src="https://github.com/user-attachments/assets/779112e9-4189-415b-aa9b-897b583e0282" style="border-radius:12px">

<p align="center">
<a href="#tech">Tech Stack</a>
  <span> - </span>
<a href="#started">Getting Started + Contributing</a>
  <span> - </span>
<a href="#variables">Variables (+ my messy code)</a>
</p>


<p align="center">A Landing Page for an IT services company, made with React SWC and TailwindCSS.</p>


<p align="center">
<a href="https://github.com/AKindWorld/TechFlowwLandingPage">Repo Link</a>
  <span> | </span>
<a href="https://techfloww-landing.vercel.app">Live Deploy</a>
</p>
 
<h2 id="tech">Tech Stack</h2>

- Vite
- React SWC
- TailwindCSS
 
<h2 id="started">Getting started + Contributing</h2>

First, get the project running locally on your machine.
 
<h3>Prerequisites</h3>

- [NPM](https://docs.npmjs.com/cli/v9/configuring-npm/install)
 
<h3>Cloning</h3>

Clone the project locally

```bash
git clone https://github.com/AKindWorld/TechFlowwLandingPage.git
```

If you wish to directly contribute to this repo, fork the repo instead, then create a pull request with the changes.
 
<h3>Configure the .env variables</h2>

Create an `.env.local` file at the root folder with the following variables.

```yaml
VITE_REACT_APP_DB_REGION=us-east-1
VITE_REACT_APP_DB_ACCESS_KEY_ID={YOUR_AWS_KEY_ID}
VITE_REACT_APP_DEB_SECRET_ACCESS_KEY={YOUR_AWS_SECRET}

VITE_REACT_APP_CONTACT_FORM_URL={GOOGLE_FORMS_URL_FOR_CONTACT_FORM}
VITE_REACT_APP_CONTACT_FORM_URL2={GOOGLE_FORMS_URL_FOR_CAREERS_FORM}

```
Change the AWS region location to your server instances' location. Replace {YOUR_AWS_KEY_ID} and {YOUR_AWS_SECRET} as well.
Also replace the GOOGLE_FORMS_URL with the actual url variable, which is `https://docs.google.com/forms/d/e/[THIS PART]/viewform?...`

<h3>Starting</h3>

```bash
cd project-name
npm install
npm run dev
```
 
<h2 id="variables">Variables</h2>

There are a huge number of components in the project; there could've been even more made but that's for another day.
<br>
I'll try to list briefly what each component does, partly for my own sanity, so I don't end up having to go back to the ~~mines~~ docs six months later.

- **About.jsx** - About Section, currently positioned in the homepage.
- **Background.jsx** - A very experimental approach to using SVG shapes with layer blur as the page background. Currently best optimized for desktop & mobile default sizes. Breaks on 4K screens. Known bug: breaks on desktop-site toggling for mobile browsers until fully refreshed.
- **CareerForm.jsx** - Form component with some fields, currently used in the Careers page.
- **ContactForm.jsx** - Form component with lesser components, currently used in the Contact page.
- **DemoForm.jsx** - early implementation of the form component, not used anywhere and will be removed soon.
- **Footer.jsx** - self-explanatory, used in all pages.
- **Hero.jsx** - Hero section, used in the home page.
- **NavBar.jsx** - header, self-explanatory, used in all pages.
- **NavLinks.jsx** - very early implementation of links, not used currently and slated for removal.
- **PortfolioProfiles.jsx** - self-explanatory, used in Portfolio page, used AWS DynamoDB for data fetching.
- **PortfolioSection.jsx** - parent component for the portfolio + processoverview + testimonials, not used now and replaced with PortfolioSectionAccordion.jsx.
- **PortfolioSectionAccordion.jsx** - parent component for the portfolio + processoverview + testimonials, current being used.
- **ProcessOverview.jsx** - static component showing the SDLC.
- **ProjectShowcase.jsx** - self-explanatory, used in projects page.
- **ProjectShowcaseCard.jsx** - component for the smaller card-like showcases for projects.
- **Qualities.jsx** - early idea of a component to show cool text animations, discontinued now and not used anywhere.
- **Services_Template_AWS.jsx** - component for fetching service details from AWS DynamoDB.
- **Services_Template.jsx** - component for fetching service details from local JSON file.
- **Services.jsx** - parent of the Services_Template component.
- **TechStack.jsx** - small section to showcase the company's currently used tech stacks.
- **Testimonials_Template_AWS.jsx** - component for fetching testimonials data from AWS DynamoDB.
- **Testimonials_Template.jsx** - component for fetching testimonials data locally from a JSON file.
- **Testimonials.jsx** - parent container for Testimonials_Template.jsx.

Pages are kinda self-explanatory since it uses just the above components.

---

That's all. Thank you.
