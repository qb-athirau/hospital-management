import React from 'react';
import { DashboardLayout, DashboardSection, ItemWrap, CardWrapper } from './style';
import Header from '../../components/Header';
import { headerList, DashboardCardDetails } from '../../configs/constants';
import Card from '../../components/Card';
import { useMedia } from '../../utils/domUtils';

const Dashboard = (props) => {
  const isMobile = useMedia('(max-width: 831px)');
  
  return (
    <DashboardLayout>
      <Header navigationList={headerList} history={props.history} />
      <DashboardSection>
        <CardWrapper>
          {DashboardCardDetails.map((item, index) => (
            <ItemWrap href={item.link}>
              <Card key={index} nomargin={isMobile} noPadding={isMobile} animated primary>
                {item.label}
              </Card>
            </ItemWrap>
          ))}
        </CardWrapper>
      </DashboardSection>
    </DashboardLayout>
  );
};

export default Dashboard;
