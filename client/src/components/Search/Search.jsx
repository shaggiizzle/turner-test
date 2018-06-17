import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import enhance from './enhance';

const propTypes = {
  onSearch: PropTypes.func,
  searchCallback: PropTypes.func.isRequired,
  searchText: PropTypes.string,
  setSearchText: PropTypes.func,
};


const styles = {
  searchContainer: {
    display: 'flex',
    flexDireaction: 'row'
  },
  containerItems: {
    paddingRight: 20
  }
};

export const PlainSearch = ({ setSearchText, searchText, onSearch }) =>
  (
    <div style={styles.searchContainer}>
      <div style={styles.containerItems}>
        <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} />
      </div>
      <div>
        <Button onClick={onSearch} bsStyle="primary">Search</Button>
      </div>
    </div>
  );


export const EnhancedSearch = enhance(PlainSearch);
export const Search = props => <EnhancedSearch {...props} />;

PlainSearch.propTypes = propTypes;

Search.propTypes = propTypes;


PlainSearch.displayName = 'Search';


export default Search;

