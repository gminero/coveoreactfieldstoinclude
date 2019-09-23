import React, { useEffect } from 'react';
import './App.css';
import * as Coveo from 'coveo-search-ui';
import 'coveo-search-ui/bin/js/CoveoJsSearch.Lazy';
import 'coveo-search-ui/bin/js/templates/templatesNew.js';

function App() {
  useEffect(() => {
    const root = document.querySelector('#search');
    Coveo.SearchEndpoint.configureSampleEndpoint();
    Coveo.init(root, {
      ResultLink: {
        onClick: (e) => {
          e.preventDefault();

        }
      }
    });
  });

  return (
    <div className="App">
      <div id="search" className='CoveoSearchInterface'>

        <div className="CoveoAnalytics"></div>
        <div className="coveo-tab-section">
          <a className="CoveoTab" data-id="All" data-caption="All Content"></a>
        </div>
        <div className="coveo-main-section">
          <div className="coveo-results-column">

            <div className="CoveoPreferencesPanel">
              <div className="CoveoResultsPreferences"></div>
              <div className="CoveoResultsFiltersPreferences"></div>
            </div>
            <div className="CoveoTriggers"></div>

            <div className="coveo-results-header">
              <div className="coveo-result-layout-section">
                <span className="CoveoResultLayout"></span>
              </div>

            </div>
            <div className="CoveoHiddenQuery"></div>
            <div className="CoveoDidYouMean"></div>
            <div className="CoveoErrorReport" data-pop-up="false"></div>
            <div className="CoveoResultList" data-layout="list" data-wait-animation="fade">
            </div>
          </div>
        </div>
        <div className="coveo-bottom">
          <div className="CoveoPager"></div>
          <div className="CoveoLogo"></div>
          <div className="CoveoResultsPerPage"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
