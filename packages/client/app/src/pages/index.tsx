import React from 'react';

import { Image, Button, Flex, Spinner } from '@theme-ui/components';

import useSearch from 'src/hooks/useSearch';
import { Box } from '@theme-ui/components';

const Index = () => {
  const { isLoading, error, data, isFetching, refetch } = useSearch();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>An error has occurred: {JSON.stringify(error)} </p>;

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <Image sx={{ maxHeight: '600px' }} src={data?.data.image} />
      <Button
        sx={{
          marginTop: 4,
          backgroundColor: '#ffd5c2',
          color: '#444',
          cursor: 'pointer',
        }}
        onClick={() => refetch()}
      >
        Refesh
      </Button>
      <Box sx={{ margin: '32px auto', minHeight: 5 }}>
        {isFetching ? <Spinner color="#c8553d" /> : ''}
      </Box>
    </Flex>
  );
};

export default Index;
