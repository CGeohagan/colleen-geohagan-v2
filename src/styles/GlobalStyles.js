import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --coral: #C3746A;
    --gold: #d7c07e;
    --green: #668a5d;
    --light-blue: #dbe4eb;
    --blue-grey: #7C868F;
    --blue: #5f88f0;
    --charcoal: #3b4035;
    --dark-grey: #3E4730;
    --tan: #bd8a49;
    --brown: #b78e58;
    --flower-padding: 1em;
    --small-width: 768px;
    --medium-width: 1024px;
    --main-bg-color: var(--blue-grey);
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: var(--charcoal);
    transition: 0.3s color cubic-bezier(0.39, 0.575, 0.565, 1);
    &:hover {
      color: var(--gold);
    }
  }


  a,
  body,
  div,
  h1,
  h2,
  p,
  ol,
  ul {
    color: var(--charcoal);
    font-family: 'Cormorant Garamond', serif;
    font-weight: 400;
  }

  .bold-italic {
    font-weight: 500;
    font-style: italic;
  }

  html {
    height: 100vh;
    width: 100vw;
  }

  body {
    background-color: var(--main-bg-color);
    transition: background-color 0.3s ease;
    border: 4px solid var(--gold);
    height: calc(100% - 2em);
    margin: 1em;
    position: relative;
    width: calc(100% - 2em);
  }

  svg {
    width: 100%;
    height: auto;
  }

  .no-transition {
    transition: none;
  }

  .about {
    --main-bg-color: var(--coral);
  }

  .projects {
    --main-bg-color: var(--blue);
  }

  .travel {
    --main-bg-color: var(--brown);
  }




  /* .left {
    left: 0;
    padding-left: var(--flower-padding);
  }

  .right {
    right: 0;
    padding-right: var(--flower-padding);
  } */

  .center {
    padding: var(--flower-padding) 0;
  }

  .top {
    align-items: flex-start;
    padding-top: var(--flower-padding);
  }

  .bottom {
    align-items: flex-end;
    padding-bottom: var(--flower-padding);
  }

  /* // Layout Styles for pages with more content
  // Figure out a way to organize this better
  .travel {
    .content {
      width: 100%;
      max-width: 100%;
      padding: 0 5%;

    }

    .initials-wrapper {
      padding: 7% 0 3%;
    }

    .nav-wrapper {
      border: 4px solid var(--gold);
      width: 80%;
      margin: 0 auto;
    }

    .flowers.bottom,
    .left .dot,
    .right .dot,
    .bottom-content .dot {
      display: none;
    }

    main {
      padding: 1em .5em;
      box-shadow: none;
      overflow: scroll;
    }

    .top-content {
      height: 150px;
    }

    .flowers_section {
      transform: scale(.8)
    }
  } */



`;

export default GlobalStyles;
