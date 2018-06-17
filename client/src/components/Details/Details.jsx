import React from 'react';
import PropTypes from 'prop-types';
import { Label, Modal, Well } from 'react-bootstrap';
import _ from 'lodash';

import enhance from './enhance';


const propTypes = {
  detailId: PropTypes.number,
  onCloseModal: PropTypes.func,
  show: PropTypes.bool,
  setDetailId: PropTypes.func,
  titleDetail: PropTypes.object
};

const defaultProps = {
  show: false,
  titleDetail: null
};

const styles = {
  modalStyle: {
    minidth: 'min-content'
  },
  spanStyle: {
    paddingLeft: '12px'
  },
  flexDiv: {
    maxHeight: 400,
    overflow: 'auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(auto,auto))',

  }
};

export const PlainDetail = ({
  onCloseModal, show, titleDetail
}) => (
  <div>
    {titleDetail &&
     (
     <Modal style={styles.modalStyle} show={show} onHide={onCloseModal}>
       <Modal.Header closeButton>
         <Modal.Title>{titleDetail.TitleName}</Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <Well>
           <Label>
            Release Year
           </Label>
           <span style={styles.spanStyle}> {titleDetail.ReleaseYear}</span>
           <br />
           <Label>
            Genres
           </Label>
           <span style={styles.spanStyle}> {titleDetail.Genres.join(', ')}</span>
         </Well>
         <Well>
           <br />
           <Label>
            Summary
           </Label>
           <br />
           <span style={styles.spanStyle}> {titleDetail.Storylines[0].Description}</span>
         </Well>
         <br />
         <Well>
           <Label>
             {'Cast & Crew'}
           </Label>
           <br />


           <div style={styles.flexDiv}>
             {_.orderBy(titleDetail.Participants, 'RoleType').map((part, index) =>
                (
                  <span key={`${part.ParticipantId}_${part.RoleType}_${index}`}>{`${part.RoleType}  ·  ${part.Name}`}</span> // eslint-disable-line
                ))


              }
           </div>

         </Well>
       </Modal.Body>
     </Modal>
     )
    }
  </div>);


export const EnhancedDetail = enhance(PlainDetail);
export const Detail = props => <EnhancedDetail {...props} />;

PlainDetail.propTypes = propTypes;
PlainDetail.defaultProps = defaultProps;

Detail.propTypes = propTypes;
Detail.defaultProps = defaultProps;

PlainDetail.displayName = 'Title Detail';


export default Detail;
