import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import Spinner from './components/common/spinner/spinner';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store } from './store';
import './index.css';

const LazyApp = lazy(() => import('./components/app/App'));

ReactDOM.render(
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
          <LazyApp />
      </Suspense>
    </Provider>
  ,document.getElementById('root')
);

reportWebVitals();
