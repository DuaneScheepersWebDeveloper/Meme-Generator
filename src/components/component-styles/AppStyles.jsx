import { styled } from 'styled-components';
export const HeaderStyles = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4em;
  padding: 1em;
  background: linear-gradient(
    90deg,
    var(--clr-accent-dark) 1.18%,
    var(--clr-accent-light) 100%
  );
  color: var(--clr-primary);

  .header-img {
    height: 100%;
    width: auto;
    margin-right: 0.5em;
  }

  .header-title {
    font-size: 1.25rem;
    margin-right: auto;
  }

  .header-project {
    font-size: 0.75rem;
    font-weight: 500;
  }
`;

export const MainStyles = styled.main`
  padding: 36px;
  .form {
    display: grid;
    grid-template: 40px 40px / 1fr 1fr;
    gap: 17px;
  }
  .form-inputs {
    border-radius: 5px;
    border: 1px solid;
    text-indent: 5px;
  }
  .form-button {
    grid-column: 1 / -1;
    border-radius: 5px;
    cursor: pointer;
    background: linear-gradient(90.41deg, #711f8d 1.14%, #a818da 100%);
    color: white;
    border: none;
  }
  .meme-image-div {
    text-align: center;
    margin: 10px;
  }
  .meme-image {
    text-align: center;
    max-width: 100%;
    height: 350px;
    border-radius: 3px;
  }
`;
