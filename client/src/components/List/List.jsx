import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import enhance from './enhance';


const propTypes = {
  showDetailItem: PropTypes.func.isRequired,
  titles: PropTypes.arrayOf(PropTypes.object)
};

const defaultProps = {
  titles: []
};

export const PlainList = ({ showDetailItem, titles }) => (
  <table className="table table-striped table-bordered">
    <tbody>
      <tr >
        <th scope="col">Title</th>
        <th scope="col">Release Year</th>
        <th scope="col">Details</th>
      </tr>
      {titles.map(title =>
    (
      <tr key={title.TitleId}>
        <td>{title.TitleName}</td>
        <td>{title.ReleaseYear}</td>
        <td><Button onClick={() => showDetailItem(title.TitleId)}>Details</Button></td>
      </tr>
    ))
  }
    </tbody>
  </table>
);

export const EnhancedList = enhance(PlainList);
export const List = props => <EnhancedList {...props} />;

PlainList.propTypes = propTypes;
PlainList.defaultProps = defaultProps;

List.propTypes = propTypes;
List.defaultProps = defaultProps;

PlainList.displayName = 'Titles List';


export default List;
