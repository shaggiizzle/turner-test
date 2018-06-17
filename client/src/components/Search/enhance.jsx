import { compose, withState, withHandlers, lifecycle } from 'recompose';

const enhance = compose(
  withState('searchText', 'setSearchText', ''),
  withHandlers({
    onSearch: ({ searchCallback, searchText }) => () => {
      console.log(encodeURIComponent(searchText));
      fetch(`/search/${encodeURIComponent(searchText)}`)
        .then(response => response.json())
        .then((details) => {
          searchCallback(details);
        });
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.onSearch();
    }
  })

);

export default enhance;
