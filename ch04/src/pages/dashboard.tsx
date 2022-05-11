import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { theme } from '../styles/theme';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  tooltip: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      dataLabels: {
        position: 'top',
      },
    },
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[500]
    },
    axisTicks: {
      color: theme.colors.gray[500]
    },
    categories: [
      '2022-05-02T00:00:00.000Z',
      '2022-05-03T00:00:00.000Z',
      '2022-05-04T00:00:00.000Z',
      '2022-05-05T00:00:00.000Z',
      '2022-05-06T00:00:00.000Z',
      '2022-05-07T00:00:00.000Z',
    ],
  },
};
const series = [
  {
    name: 'serie1',
    data: [1150, 1500, 1350, 4020, 1250, 5000],
  },
];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px">
          <Box p={['6', '8']} bg="gray.800" borderRadius={8} pb='4'>
            <Text fontSize="lg" mb="4">
              Week Sales
            </Text>
            <Chart series={series} options={options} type="bar" height={160} />
          </Box>
          <Box p={['6', '8']} bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Production
            </Text>
            <Chart series={series} options={options} type="bar" height={160} />

          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
