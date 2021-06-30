import * as React from 'react';
import * as _ from 'lodash';
import { Helmet } from "react-helmet";
import { HorizontalNav, PageHeading } from "@console/dynamic-plugin-sdk/provisional";
import { Grid, GridItem } from "@patternfly/react-core";

//import InventoryCard from './components/dashboard-page/storage-dashboard-odf/inventory-card';
import DetailsCard from './components/details-card/details-card';
import StatusCard from './components/status-card/status-card';
import StorageEfficiencyCard from './components/storage-efficiency-card/storage-efficiency-card';
//import UtilizationCard from './components/dashboard-page/storage-dashboard-odf/utilization-card/utilization-card';
//import RawCapacityCard from './components/dashboard-page/storage-dashboard-odf/raw-capacity-card/raw-capacity-card';
//import CapacityBreakdownCard from './components/dashboard-page/storage-dashboard-odf/capacity-breakdown/capacity-breakdown-card';
//import ActivityCard from './components/activity-card/activity-card';
//import {StorageInstanceModel} from './models';
//import {StorageInstanceKind} from './types';
//import {StorageInstanceStatus} from './types';

const UpperSection: React.FC = (props) => {
  return (
    <Grid hasGutter>
      <GridItem span={3}>
        <Grid hasGutter>
          <GridItem>
            <DetailsCard {...props}/>
          </GridItem>
          <GridItem>
            <StorageEfficiencyCard/>
          </GridItem>
          {/* <GridItem>
            <InventoryCard/>
          </GridItem> */}
        </Grid>        
      </GridItem>
      <GridItem span={6}>
        <Grid hasGutter>
          <GridItem>
            <StatusCard {...props}/>
          </GridItem>
          <GridItem>
            {/* <RawCapacityCard {...props}/> */}
          </GridItem>
          <GridItem>
            {/* <CapacityBreakdownCard {...props}/> */}
          </GridItem>
          <GridItem>
            {/* <UtilizationCard {...props}/> */}
          </GridItem>
        </Grid>        
      </GridItem>
      <GridItem span={3} >
        {/* <ActivityCard {...props}/> */}
      </GridItem>
    </Grid>
  );
};

const FlashsystemDashboard: React.FC = (props) => {
  return (
    <>
      <div className="co-dashboard-body">
        <UpperSection {...props}/>
      </div>
    </>
  );
};

const FlashsystemDashboardPage: React.FC<any> = (props) => {
  const title = "IBM FlashSystem";
  const allPages = [
    {
      href: "",
      name: "Overview",
      component: FlashsystemDashboard,
    },
  ];
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <PageHeading title={title} detail={true} />
      <HorizontalNav match={props?.match} pages={allPages} noStatusBox />
    </>
  );
};

export default FlashsystemDashboardPage;


