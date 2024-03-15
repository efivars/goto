import React, { Suspense } from 'react';
import { Route, Switch } from 'wouter';

import HomePage from '../../pages/home-page';
import MakeLinkPage from '../../pages/make-link-page';
const LazyHelloPage = React.lazy(() => import('../../pages/hello-page'));

import styles from './app-page.module.scss';

export const AppPage: React.FC = () => {
  return (
    <div className={styles.Page}>
      <Suspense fallback="Loading">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/hello" component={LazyHelloPage} />
          <Route path="/make-link" component={MakeLinkPage} />
        </Switch>
      </Suspense>
    </div>
  );
};
