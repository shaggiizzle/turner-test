import { compose, withHandlers, withState, lifecycle } from 'recompose';

const enhance = compose(
  withState('titleDetail', 'setTitleDetails', null),
  withHandlers({
    onCloseModal: ({ setDetailId, setTitleDetails }) => () => {
      setDetailId(null);
      setTitleDetails(null);
    }
  }),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (nextProps.detailId && this.props.detailId !== nextProps.detailId) {
        fetch(`/search/detail/${nextProps.detailId}`)
          .then(response => response.json())
          .then((details) => {
            this.props.setTitleDetails(details);
          });
      }
    }
  })
);

export default enhance;
