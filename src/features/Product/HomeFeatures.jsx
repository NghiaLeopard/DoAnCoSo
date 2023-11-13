import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { Route, Switch, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import HomeScreen from './pages/homescreen/HomeScreen';
import ReturnPolicy from './components/ReturnPolicy/ReturnPolicy';
import ThanhToan from './components/ThanhToan/ThanhToan';
import DieuKhoan from './components/DieuKhoan/DieuKhoan';
import BaoHanh from './components/BaoHanh.jsx/BaoHanh';

HomeFeatures.propTypes = {};

function HomeFeatures(props) {
  const match = useRouteMatch();

  return (
    <Box pt={4}>
      <Switch>
        <Route path={match.url} exact component={HomeScreen} />
        <Route path={`${match.url}/returnPolicy`} component={ReturnPolicy} />
        <Route path={`${match.url}/SellPolicy`} component={ThanhToan} />
        <Route path={`${match.url}/khoanPolicy`} component={DieuKhoan} />
        <Route path={`${match.url}/BaoPolicy`} component={BaoHanh} />
      </Switch>
    </Box>
  );
}

export default HomeFeatures;
