import styled from "styled-components";

interface CardProps {
  classes?: String;
  children: JSX.Element | JSX.Element[];
  id?: string;
}

const StyledCard = styled.div`
  margin: 0 auto;

  &.logo-section {
    padding-top: 10%;

    &.dark {
      color: #ffffff;
    }
  }

  &.header-section {
    padding: 0 7%;
    text-align: left;
    padding-top: 10%;
  }

  &.social-media-section {
    display: flex;
    padding: 0 7%;
    padding-top: 7%;

    &.dark {
      color: #ffffff;
    }
  }

  &.app-link-section {
    background: #201f3e;
    padding: 9% 0;
    color: #ffffff;
    position: relative;
    top: -65px;
  }

  &.app-overview-section {
    margin-top: -5%;
    margin-bottom: 10%;
  }
`;

const Card = ({ classes, children, id }: CardProps) => {
  return (
    <StyledCard className={`card ${classes}`} id={id}>
      {children}
    </StyledCard>
  );
};

export default Card;
