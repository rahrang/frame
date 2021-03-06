import styled from 'styled-components';

export default styled.div`
  background-color: ${props => props.theme.colors.darker};
  color: ${props => props.theme.colors.light};
  padding-top: 2rem;
  padding-bottom: 2rem;

  border-top: 1px solid white;

  .footer {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 2rem;

    h3 {
      color: ${props => props.theme.colors.light};
    }

    .contact-form {
      width: 100%;
      background-color: ${props => props.theme.colors.dark};
      padding: 1rem;
      border-radius: ${props => props.theme.br};

      form.contact {
        span.label {
          font-size: 0.875rem;
          text-transform: uppercase;
          margin-bottom: 0.25rem;
        }

        .top-row {
          margin-bottom: 1.5rem;

          .input-wrapper {
            flex: 1;

            &:first-of-type {
              padding-right: 1.5rem;
            }

            input {
              width: 100%;
            }
          }
        }

        textarea {
          width: 100%;
          min-height: 125px;
          resize: none;
        }

        input,
        textarea {
          background-color: ${props => props.theme.colors.lighter};
        }

        input,
        textarea,
        button {
          border: none;
          border-radius: ${props => props.theme.br};
          box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
          font-size: 1rem;
        }

        .button-wrapper {
          text-align: right;
        }

        button[type='submit'] {
          background-color: ${props => props.theme.colors.gold};
          color: ${props => props.theme.colors.dark};
          cursor: pointer;

          transition: 0.25s ease-in-out;

          &:hover {
            background-color: ${props => props.theme.colors.darker};
            color: ${props => props.theme.colors.light};
          }
        }
      }
    }

    .online {
      .social-icons {
        .link {
          color: ${props => props.theme.colors.light};
          margin-right: 1rem;
          width: 25px;

          svg {
            height: 25px;
          }

          .platform {
            visibility: hidden;
          }

          &:hover {
            color: ${props => props.theme.colors.blue};
          }
        }
      }
    }
  }
`;
