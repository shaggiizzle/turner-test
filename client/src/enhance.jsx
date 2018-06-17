import { compose, withState, lifecycle } from 'recompose';


const enhance = compose(
  withState('searchName', 'setSearchName', null),
  withState('detailId', 'setDetailId', null),
  withState('searchResults', 'setSearchResults', []),
  withState('title', 'setTitle', ''),
  lifecycle({
    componentDidMount() {
      this.props.setSearchName('');
    }
  })
);

export default enhance;
