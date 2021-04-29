import React from 'react'
import { Switch, Route } from "react-router-dom";
import MainLayout from './views/MainLayout'
import Home from './views/Home';
import Region from './views/Region';
import Country from './views/Country';

const MainRouter = () => {
  return (<>
    <Switch>
      <MainLayout >

        <Route exact path="/hr/dashboard/" component={Home} />
        <Route exact path="/hr/region/" component={Region} />
        <Route exact path="/hr/country/" component={Country} />
       
      </MainLayout>
    </Switch>


  </>)
}

export default MainRouter