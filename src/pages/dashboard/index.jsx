import React from 'react';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import MonthlyBarChart from './MonthlyBarChart';
import ReportAreaChart from './ReportAreaChart';
import UniqueVisitorCard from './UniqueVisitorCard';
import SaleReportCard from './SaleReportCard';
import OrdersTable from './OrdersTable';

import GiftOutlined from '@ant-design/icons/GiftOutlined';
import MessageOutlined from '@ant-design/icons/MessageOutlined';
import SettingOutlined from '@ant-design/icons/SettingOutlined';

import dashboardData from '../../components/faizData/DashBoardData.json';

const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem',
};

const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none',
};

export default function DashboardDefault() {
  const theme = useTheme();
  const { analytics, transactions, statistics } = dashboardData;

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* Row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography className="faiz-dashboard-container" variant="h5">
          faiz-dashboard-container
        </Typography>
      </Grid>
      {analytics.map((item, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
          <AnalyticEcommerce {...item} />
        </Grid>
      ))}

      {/* Row 2 */}
      <Grid item xs={12} md={7} lg={8}>
        <UniqueVisitorCard />
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="text.secondary">
                This Week Statistics
              </Typography>
              <Typography variant="h3">{statistics.weeklyIncome}</Typography>
            </Stack>
          </Box>
          <MonthlyBarChart />
        </MainCard>
      </Grid>

      {/* Row 3 */}
      <Grid item xs={12} md={7} lg={8}>
        <MainCard sx={{ mt: 2 }} content={false}>
          <OrdersTable />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List
            sx={{
              p: 0,
              '& .MuiListItemButton-root': { py: 2 },
            }}
          >
            {transactions.map((transaction, index) => (
              <ListItemButton key={index} divider>
                <ListItemAvatar>
                  <Avatar
                    sx={{ color: theme.palette.success.main, bgcolor: theme.palette.success.lighter }}
                  >
                    {React.createElement(
                      { GiftOutlined, MessageOutlined, SettingOutlined }[transaction.icon]
                    )}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={<Typography variant="subtitle1">{transaction.id}</Typography>} secondary={transaction.time} />
                <ListItemSecondaryAction>
                  <Stack alignItems="flex-end">
                    <Typography variant="subtitle1">{transaction.amount}</Typography>
                    <Typography variant="h6" color="secondary">
                      {transaction.percentage}
                    </Typography>
                  </Stack>
                </ListItemSecondaryAction>
              </ListItemButton>
            ))}
          </List>
        </MainCard>
      </Grid>

      {/* Row 4 */}
      <Grid item xs={12} md={7} lg={8}>
        <SaleReportCard />
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <MainCard sx={{ mt: 2 }}>
          <Stack spacing={3}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Stack>
                  <Typography variant="h5">{statistics.helpSupport.title}</Typography>
                  <Typography variant="caption" color="secondary">
                    {statistics.helpSupport.description}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <AvatarGroup sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
                  {statistics.helpSupport.avatars.map((avatar, index) => (
                    <Avatar key={index} alt={avatar.name} src={avatar.src} />
                  ))}
                </AvatarGroup>
              </Grid>
            </Grid>
            <Button size="small" variant="contained">
              Need Help?
            </Button>
          </Stack>
        </MainCard>
      </Grid>
    </Grid>
  );
}
