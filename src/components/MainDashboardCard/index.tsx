import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import styled from 'styled-components';
import { MainDashboardCardData } from '../../../data';

interface MainDashboardCardProps {
  cardData: MainDashboardCardData
}

const MainDashboardCard: React.FC<MainDashboardCardProps> = ({ cardData }) => {
  const { imageURL, title } = cardData
  return (
    <Flex flexDir={'column'}>
      <ImageStyle src={imageURL} height={100} width={100} />
      <Title>{title}</Title>
    </Flex >
  )
};

const Title = styled.p({
  fontSize: '20px',
  padding: 0,
  margin: 0,
  textAlign: 'center',
  textDecoration: 'none',
  cursor: 'pointer'
})

const ImageStyle = styled(Image)`
  margin: 0px;
  padding: 0px;
  cursor: pointer;
`

export default MainDashboardCard;
