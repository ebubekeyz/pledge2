import styled from 'styled-components';

const Wrapper = styled.aside`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-grey-10);
    z-index: 4;
    display: grid;
    /* align-items: center;
  justify-content: center; */
    place-items: center;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    /* add later */
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  /* toggle sidebar */
  .show-sidebar {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  .sidebar-links {
    text-align: center;
  }
  .sidebar-links a {
    font-size: 2rem;
    text-transform: capitalize;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    color: var(--clr-grey-5);
    letter-spacing: var(--spacing);
    display: inline-block;
    margin-bottom: 1.5rem;
  }
  .sidebar-links a:hover {
    color: var(--clr-primary-5);
  }
  .social-icons {
    display: grid;
    margin-top: 3rem;
    width: 20rem;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
  }
  .social-icon {
    font-size: 1.5rem;
    color: var(--clr-grey-1);
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }
  .social-icon:hover {
    color: var(--clr-primary-5);
  }
  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 3rem;
    background: transparent;
    border: transparent;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    color: #bb2525;
    cursor: pointer;
  }
  .close-btn:hover {
    color: #e66b6b;
  }
  @media screen and (min-width: 768px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Wrapper;
