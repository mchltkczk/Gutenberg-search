import { StyledNavBtn } from "./BookListNav.Styled";

export const BookListNav = ({ listPage, setListPage }) => {
  return (
    <div>
      <StyledNavBtn onClick={() => setListPage(listPage - 1)}>prev</StyledNavBtn> {listPage}{" "}
      <StyledNavBtn onClick={() => setListPage(listPage + 1)}>next</StyledNavBtn>
    </div>
  );
};
