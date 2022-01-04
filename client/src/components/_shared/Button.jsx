import styled from "styled-components";

const Button = ({
  backgroundColor = "#000",
  outline,
  link,
  children,
  width,
  onClick,
  borderRadius,
  padding
}) => {
  if (outline) {
    return (
      <OutLinedButton
        backgroundColor={backgroundColor}
        width={width}
        onClick={onClick}
        borderRadius={borderRadius}
        padding={padding}
      >
        {children}
      </OutLinedButton>
    );
  }

  if (link) {
    return (
      <Link backgroundColor={backgroundColor} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <PrimaryButton
      backgroundColor={backgroundColor}
      width={width}
      onClick={onClick}
      borderRadius={borderRadius}
      padding={padding}
    >
      {children}
    </PrimaryButton>
  );
};

const PrimaryButton = styled.button`
  padding: ${(props) => props.padding || "14px 24px"};
  border-radius: ${(props) => props.borderRadius || "100px"};
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  outline: none;
  border: none;
  cursor: pointer;
`;

const OutLinedButton = styled.button`
  padding: ${(props) => props.padding || "14px 24px"};
  border-radius: ${(props) => props.borderRadius || "100px"};
  background-color: transparent;
  border: 2px solid ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  outline: none;
  cursor: pointer;
`;

const Link = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

export default Button;
