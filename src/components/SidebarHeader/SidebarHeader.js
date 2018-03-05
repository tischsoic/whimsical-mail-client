// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

type Props = {
  height: number,
};

class SidebarHeader extends Component<Props> {
  render() {
    const { height } = this.props;

    return (
      <Wrapper height={height}>
        <SidebarHeaderLink isSelected={true}>Inbox</SidebarHeaderLink>
        <SidebarHeaderLink isSelected={false}>Outbox</SidebarHeaderLink>
        <SidebarHeaderLink isSelected={false}>Drafts</SidebarHeaderLink>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: ${props => props.height}px;
  line-height: ${props => props.height}px;
  font-size: 20px;
  /* color: white;
  background: ${COLORS.gray[800]}; */
  color: ${COLORS.red[500]};
  /* background: white; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.075);
  /* border-right: 1px solid rgba(0, 0, 0, 0.2); */
`;

const SidebarHeaderLink = styled.h2`
  font-weight: 700;
  opacity: ${props => (props.isSelected ? 1 : 0.5)};
  cursor: pointer;
`;

export default SidebarHeader;