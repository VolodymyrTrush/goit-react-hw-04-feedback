import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

export const FeedbackItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const FeedbackBtn = styled.button`
  padding: 5px 10px;
  border: 2px solid #d8d3d3;
  border-radius: 5px;
  background-color: #fff;
  font-weight: 500;
  text-transform: capitalize;
  transition: all 250ms linear;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #d8d3d3;
    color: #6b6b6b;
    transition: all 250ms linear;
  }
`;    