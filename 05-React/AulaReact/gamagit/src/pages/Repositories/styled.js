import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 1.8rem;
  font-family: sans-serif;
  color: #333;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  font-family: sans-serif;
`;

export const ListItem = styled.li`
  margin: 2px 0;
  padding: 0.5rem;
  color: #333;
  border-top: 0.1px solid #f2f2f2;
  border-bottom: 0.1px solid #f2f2f2;
  background-color: #f7f7f7;
  font-size: 0.9rem;

  &:hover {
    background-color: #feffe8;
  }
`;

export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  background-color: #333;
  padding: 0.5rem 0;
  color: #f7f7f7;
  text-decoration: none;
  font-family: sans-serif;
  font-size: 0.95rem;
  height: 1.2rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;

  &:hover {
    background: #f7f7f7;
    color: #333;
  }
`;
