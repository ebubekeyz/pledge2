import styled from 'styled-components';

const Wrapper = styled.div`
  .projects-hero {
    height: 40vh;
    background: var(--clr-primary-10);
    display: grid;
    place-items: center;
  }
  .projects-hero .section-title {
    margin-bottom: 0;
  }
  .single-project {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
  }
  .project-container img {
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
  }
  .project-container {
    position: relative;
  }
  .project-icon {
    position: absolute;
    font-size: 1.75rem;
    bottom: 0;
    left: 50%;
    -webkit-transform: translate(-50%, 50%);
    transform: translate(-50%, 50%);
    width: 4rem;
    height: 4rem;
    display: grid;
    place-items: center;
    background: var(--clr-primary-5);
    border-radius: 50%;
    color: var(--clr-primary-1);
    border: 0.375rem solid var(--clr-grey-10);
  }
  .project-details {
    padding: 2rem 1.5rem;
  }
  .project-footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: var(--clr-primary-5);
  }
  .project-footer a {
    color: var(--clr-primary-5);
    text-transform: capitalize;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    justify-self: end;
  }
  .project-footer a:hover {
    color: var(--clr-primary-1);
  }
  .projects-page-center {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 3rem 1rem;
  }
`;

export default Wrapper;
