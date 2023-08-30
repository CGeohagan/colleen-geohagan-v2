import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavStyles = styled.div`
  nav ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin: 0.5em auto;
    padding: 0;
    width: 85%;
  }

  a {
    font-size: 18px;
  }

  .active a {
    color: var(--gold);
  }

  .toggle {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    .nav-wrapper {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 0;
      opacity: 0;
      transition: opacity 0.4s ease;
      z-index: 100;
    }

    .nav-active {
      height: 100%;
      opacity: 1;
    }

    nav {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--tan);
      z-index: 1000;
      transition: 1s ease-out transform;
    }

    nav ul {
      align-items: center;
      border: 4px solid var(--gold);
      flex-direction: column;
      height: calc(100% - 2em);
      justify-content: center;
      margin: 0 auto;
      width: calc(100% - 2em);
    }

    nav li {
      margin: 1em;
    }

    .active {
      color: var(--gold);
      color: pink;
    }

    .toggle {
      display: block;
      outline: 0;
      background: 0 0;
      height: 30px;
      width: 30px;
      z-index: 999;
      border: none;
      position: absolute;
      bottom: 1em;
      left: 1em;
      &:hover {
        cursor: pointer;
      }
    }

    .toggle span,
    .toggle span:after,
    .toggle span:before {
      width: 100%;
      height: 2px;
      right: 0;
      position: absolute;
    }

    .toggle span:after,
    .toggle span:before {
      content: '';
    }

    .toggle span:after {
      top: -10px;
    }

    .toggle span:before {
      top: 10px;
    }

    .toggle span,
    .toggle span:after,
    .toggle span:before {
      background-color: var(--charcoal);
      -webkit-transform-origin: center;
      transform-origin: center;
      -webkit-transition: background-color 0.6s ease-out,
        -webkit-transform 0.6s ease-out;
      transition: background-color 0.6s ease-out,
        -webkit-transform 0.6s ease-out;
      transition: transform 0.6s ease-out, background-color 0.6s ease-out;
      transition: transform 0.6s ease-out, background-color 0.6s ease-out,
        -webkit-transform 0.6s ease-out;
    }

    .toggle-active {
      span {
        background: none;
      }

      span:before,
      span:after {
        top: 0;
      }

      span:before {
        transform: rotate(45deg);
      }

      span:after {
        transform: rotate(-45deg);
      }
    }
  }
`;

const Nav = () => {
  const [isActive, setActive] = React.useState(false);

  function onClick(e) {
    setActive(!isActive);
  }

  return (
    <>
      <NavStyles>
        <div className={`nav-wrapper ${isActive ? 'nav-active' : ''}`}>
          <nav>
            <ul>
              <li>
                <Link
                  to='/'
                  activeClassName='active'
                  onClick={onClick}
                  activeStyle={{ color: 'var(--gold)' }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/projects'
                  activeClassName='active'
                  onClick={onClick}
                  activeStyle={{ color: 'var(--gold)' }}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to='/travel'
                  activeClassName='active'
                  onClick={onClick}
                  activeStyle={{ color: 'var(--gold)' }}
                >
                  Travel
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  activeClassName='active'
                  onClick={onClick}
                  activeStyle={{ color: 'var(--gold)' }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <button
          className={isActive ? 'toggle-active toggle' : 'toggle'}
          onClick={onClick}
        >
          <span></span>
        </button>
      </NavStyles>
    </>
  );
};

export default Nav;
