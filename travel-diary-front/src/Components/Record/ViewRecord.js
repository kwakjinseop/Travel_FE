import React, {useState} from 'react';
import ImageSlider from './ImageSlider';
import styled from 'styled-components';
import Write from '../../images/Write.png';
import Location from '../../images/Location.png';
import RecordDialog from './RecordDialog';

const MainPageBlock = styled.div`
  width: 360px;
  height: 760px;
  border: solid 3px #c9c9c9;
  background-color: #ffffff;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeadButtonBlock = styled.div`
  width: 360px;
  height: 56px;
  padding-top: 8px;
  display: flex;
  button.back {
    width: 30px;
    height: 30px;
    margin: 2% 0 0 4%;
    cursor: pointer;
  }
  button.edit {
    width: 30px;
    height: 30px;
    margin: 2% 0 0 62%;
    background-color: white;
    border: 0;
    outline: none;
    img.editImg {
      width: 30px;
      height: 30px;
    }
    cursor: pointer;
  }
  button.delete {
    width: 30px;
    height: 30px;
    margin: 2% 0 0 4%;
    cursor: pointer;
  }
`;

const RecordBlock = styled.div`
  margin: 10% 0 0 0;
  font-family:'Noto Sans KR';
  text-align: center;
  h2 {
    margin: 0;
    padding: 0;
  }
  h5.date{
    color: gray;
    margin: 10% 0 2% 0;
    padding: 0;
    font-weight: 500;
  }
  p.location{
    font-size: 13px;
    margin: 2% 0 10% 0;
    img {
      width: 5%;
      margin: 3% 1% 0 0;
    }
    color: #6fcf97;
    font-weight: 500;
  }
  h5.content {
    font-weight: 500;
  }
  hr {
    width: 300px;
    background-color: gray;
  }
`;

function Record() {
  const [deleteDialog, setDelete] = useState(false);
  const [editDialog, setEdit] = useState(false);
  const [completeDialog, setComplete] = useState(false);
  const onDelete = () => {
    setDelete(true);
  }
  const onEdit = () => {
    setEdit(true);
  }
  const onDConfirm = () => {
    setDelete(false);
    setComplete(true);
  }
  const onDCancel = () => {
    setDelete(false);
  }
  const onEConfirm = () => {
    setEdit(false);
  }
  const onECancel = () => {
    setEdit(false);
  }
  const onCConfirm = () => {
    setComplete(false);
  }
    return (
        <MainPageBlock>
          <HeadButtonBlock>
              <button className="back"></button>
              <button onClick={onEdit} className="edit"><img src={Write} alt="editImg" className="editImg"/></button>
              <button onClick={onDelete} className="delete"></button>
          </HeadButtonBlock>
          <ImageSlider>
          </ImageSlider>
          <RecordBlock>
            <h5 className="date">2021년 2월 10일</h5>
            <h2>광화문에서</h2>
            <p className="location"><img alt="location" src={Location} />서울특별시 종로구</p>
            <hr />
            <h5 className="content">어쩌구 저쩌구</h5>
          </RecordBlock>
          <RecordDialog 
          visible={deleteDialog} 
          complete="false"
          onConfirm={onDConfirm}
          onCancel={onDCancel} >정말 삭제하시겠습니까?</RecordDialog>
          <RecordDialog 
          visible={editDialog} 
          complete="false" 
          onConfirm={onEConfirm}
          onCancel={onECancel}>이 글을 편집하시겠습니까?</RecordDialog>
          <RecordDialog 
          visible={completeDialog} 
          complete="true"
          onConfirm={onCConfirm}>삭제가 완료되었습니다.</RecordDialog>
        </MainPageBlock>
    );
}

export default Record;