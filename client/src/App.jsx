import React from 'react';
import PropTypes from 'prop-types';

import PlainList from './components/List/List';
import logo from './logo.svg';
import './App.css';
import enhance from './enhance';
import Detail from './components/Details/Details';
import Search from './components/Search/Search';

const propTypes = {
  detailId: PropTypes.number,
  searchResults: PropTypes.array,
  setDetailId: PropTypes.func,
  setSearchResults: PropTypes.func
};

const defaultProps = {
  searchResults: []
};

const PlainTitleSearch = ({
  detailId, searchResults, setDetailId, setSearchResults
}) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Titles Search</h1>
    </header>
    <div style={{ width: 400, margin: '0 auto', padding: 12 }}>
      <Search minSearchLength={2} searchDelay={1500} searchCallback={setSearchResults} />
    </div>
    <PlainList titles={searchResults} showDetailItem={id => setDetailId(id)} />
    <Detail detailId={detailId} show={detailId !== null} setDetailId={setDetailId} />
  </div>
);

export const EnhancedTitleSearch = enhance(PlainTitleSearch);
export const TitleSearch = props => <EnhancedTitleSearch {...props} />;

PlainTitleSearch.propTypes = propTypes;
PlainTitleSearch.defaultProps = defaultProps;

TitleSearch.propTypes = propTypes;
TitleSearch.defaultProps = defaultProps;

PlainTitleSearch.displayName = 'Title Search';

export default TitleSearch;
