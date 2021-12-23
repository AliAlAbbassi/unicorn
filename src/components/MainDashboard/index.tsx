import { MainDashboardCardData } from "../../../data";
import MainDashboardCard from "../MainDashboardCard";
import styled from 'styled-components'
import { Flex } from "@chakra-ui/react";

interface MainDashboardProps { }

const MainDashboard: React.FC<MainDashboardProps> = ({ }) => {
  if (MainDashboardCardData)
    return (
      <Flex p={30} justifyContent={'center'} alignItems={'center'} mt={30}>
        {MainDashboardCardData.map(cardData => (
          <MainDashboardCard cardData={cardData} key={cardData.imageURL} />
        ))}
      </Flex>
    )
  else
    return <P>No Apps Installed</P>
}

const P = styled.p({
  textAlign: 'center'
})
export default MainDashboard;
