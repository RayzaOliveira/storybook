import React from 'react';
import NotificationsSystem, {
  atalhoTheme,
  useNotifications,
  setUpNotifications,
} from 'reapop';
import { toast } from 'react-toastify';

import { Image, Button, Flex, Spinner } from '@theme-ui/components';

import useSearch from 'src/hooks/useSearch';
import { Box } from '@theme-ui/components';

// run this function when your application starts before creating any notifications
setUpNotifications({
  defaultProps: {
    position: 'top-left',
    dismissible: true,
    dismissAfter: 3000,
    image: '/images/favicon.ico',
  },
});

const Index = () => {
  const { notifications, dismissNotification, notify } = useNotifications();
  const { isLoading, error, data, isFetching, refetch } = useSearch();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>An error has occurred: {JSON.stringify(error)} </p>;

  const onRefresh = () => {
    refetch();
    notify({ title: 'Reapop Notification', message: 'Next little fox' });
    toast('React-Toastify Notification');
  };

  return (
    <>
      <NotificationsSystem
        // 2. Pass the notifications you want Reapop to display.
        notifications={notifications}
        // 3. Pass the function used to dismiss a notification.
        dismissNotification={(id) => dismissNotification(id)}
        // 4. Pass a builtIn theme or a custom theme.
        theme={atalhoTheme}
      />
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
          onClick={() => onRefresh()}
        >
          Refresh
        </Button>
        <Box sx={{ margin: '32px auto', minHeight: 5 }}>
          {isFetching ? <Spinner color="#c8553d" /> : ''}
        </Box>
      </Flex>
    </>
  );
};

export default Index;
