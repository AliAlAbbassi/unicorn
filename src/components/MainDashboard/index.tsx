import { Grid, useMediaQuery } from "@chakra-ui/react";
import styled from 'styled-components';
import { MainDashboardCardData } from "../../../data";
import MainDashboardCard from "../MainDashboardCard";

interface MainDashboardProps { }

const MainDashboard: React.FC<MainDashboardProps> = ({ }) => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

  if (MainDashboardCardData)
    if (isLargerThan1280)
      return (
        <Grid templateColumns={
          'repeat(auto-fill, minmax(300px, 1fr))'
        } rowGap={50} p={10} mt={50} >
          {
            MainDashboardCardData.map(cardData => (
              <MainDashboardCard cardData={cardData} key={cardData.imageURL} />
            ))
          }
        </Grid >
      )
    else
      return (
        <Grid templateColumns={
          'repeat(auto-fill, minmax(150px, 1fr))'
        } rowGap={50} p={10} mt={25} mb={10}>
          {
            MainDashboardCardData.map(cardData => (
              <MainDashboardCard cardData={cardData} key={cardData.imageURL} />
            ))
          }
        </Grid >
      )
  else
    return <P>No Apps Installed</P>
}

// <Grid templateColumns='repeat(auto-fill, minmax(150px, 1fr))' mt={50} rowGap={50} p={10}></Grid>
const P = styled.p({
  textAlign: 'center'
})
export default MainDashboard;
