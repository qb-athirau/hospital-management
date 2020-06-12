import React from 'react';
import { DashboardLayout, DashboardSection, ItemWrap, CardWrapper } from './style';
import { Container } from '../../configs/styles/globalStyles';
import Header from '../../components/Header';
import { headerList, DashboardCardDetails } from '../../configs/constants';
import Card from '../../components/Card';
import { useMedia } from '../../utils/domUtils';

const Dashboard = (props) => {
  const isMobile = useMedia('(max-width: 831px)');

  return (
    <DashboardLayout>
      <Header navigationList={headerList} history={props.history} />
      <Container>
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
      </Container>
    </DashboardLayout>
  );
};

export default Dashboard;
