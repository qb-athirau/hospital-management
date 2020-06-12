import React from 'react';
import { HeaderSection } from '../style';

const SubHeader = (props) => (
  <HeaderSection.NavigationListWrapper visible={props.showNavbar}>
    <HeaderSection.NavigationList>
      {props.navigationList.map((item) => (
        <a href={item.redirectTo}>
          <HeaderSection.NavItem key={item.id}>{item.label}</HeaderSection.NavItem>
        </a>
      ))}
    </HeaderSection.NavigationList>
  </HeaderSection.NavigationListWrapper>
);

export default SubHeader;
