import React, {useState} from 'react';
import ImageSlider from './ImageSlider';
import styled from 'styled-components';
import Write from '../../images/Write.png';
import Location from '../../images/Location.png';
import RecordDialog from './RecordDialog';
import { withRouter } from 'react-router-dom';

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
  position: absolute;
  display: flex;
  button.back {
    width: 10%;
    height: 45%;
    margin: 3% 0 0 4%;
    background-color: rgba(0, 0, 0, 0);;
    border: 0;
    outline: 0;
    cursor: pointer;
  }
  button.edit {
    width: 10%;
    height: 45%;
    margin: 3% 0 0 60%;
    background-color: rgba(0, 0, 0, 0);;
    border: 0;
    outline: none;
    outline: 0;
    img.editImg {
      width: 100%;
      height: 100%;
    }
    cursor: pointer;
  }
  button.delete {
    width: 10%;
    height: 45%;
    margin: 3% 4% 0 0;
    background-color: rgba(0, 0, 0, 0);;
    border: 0;
    outline: 0;
    cursor: pointer;
  }
`;

const RecordBlock = styled.div`
  font-family:'Noto Sans KR';
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: scroll;
  margin: 4% 0 4% 0;
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.4);
  }
  h2 {
    margin: 0;
    padding: 0;
  }
  h5.date{
    color: gray;
    margin: 5% 0 0 0;
    padding: 0;
    font-weight: 500;
  }
  p.location{
    text-align: center;
    font-size: 13px;
    margin: 3% 0 5% 0;
    font-size: 12px;
    vertical-align: middle;
    img {
      vertical-align: middle;
      width: 10%;
      margin: 0 2% 0 0;
    }
    color: #6fcf97;
    font-weight: 500;
  }
  p.content {
    font-size: 12px;
    width: 80%;
    font-weight: 500;
    letter-spacing: normal;
  }
  hr {
    width: 300px;
    background-color: gray;
  }
`;

function ViewRecord({ history }) {
  const [deleteDialog, setDelete] = useState(false);
  const [editDialog, setEdit] = useState(false);
  const [completeDialog, setComplete] = useState(false);
  // 다이얼로그 열기
  const onDelete = () => setDelete(true); 
  const onEdit = () => setEdit(true);
  // 예, 아니오
  const onDConfirm = () => {
    setDelete(false);
    setComplete(true);
  }
  const onDCancel = () => setDelete(false);
  const onEConfirm = () => {
    setEdit(false);
  }
  const onECancel = () => setEdit(false);
  const onCConfirm = () => setComplete(false);
  const goBack = () => history.goBack();

  const contentElement = "새해가 된지 이틀.\n부모님이랑 함께 오랜만에 광화문으로 가서 산책을 하기로 했다. 마침 날씨도 좋아서 기분이 좋았다.\n아침겸 점심으로 부모님이랑 함께 한식을 먹었다.부모님과 함께 식당에서 오순도순 이야기를 해서 행복했다.부모님이랑 함께 있는 것만으로도 행복했다.부모님이랑 함께 있는것만으로도 이렇게 힐링이 된다니!그동안 바쁘다는 핑계로 부모님과 함께 여행을 못갔는데 다음에는 부모님과 함께 망설이지 말고 같이 여행가고 싶다는 생각이 들었다.\n밥을 먹고난 뒤 광화문에서 산책을 하면서 부모님과 함께 이런 저런 이야기를 많이했다. 내 생각엔 요즘 부모님께서 내 직장에 관심이 많으신가보다. 앞으로 평소보다 부모님과 대화하는 시간을 더 늘릴까 싶다."
    return (
        <MainPageBlock>
          <ImageSlider>
          </ImageSlider>
          <HeadButtonBlock>
                <button onClick={goBack}className="back">back</button>
                <button onClick={onEdit} className="edit"><img src={Write} alt="editImg" className="editImg"/></button>
                <button onClick={onDelete} className="delete">delete</button>
          </HeadButtonBlock>
          <RecordBlock>
            <h5 className="date">2021년 2월 10일</h5>
            <h2>광화문에서</h2>
            <p className="location"><img alt="location" src={Location} />서울특별시 종로구</p>
            <hr/>
            {contentElement.split('\n').map((line, index)=>{
              return <p key={index} className="content">{line}</p>
            })}
          </RecordBlock>
          <RecordDialog 
          visible={deleteDialog} 
          complete={false}
          onConfirm={onDConfirm}
          onCancel={onDCancel} >정말 삭제하시겠습니까?</RecordDialog>
          <RecordDialog 
          visible={editDialog} 
          complete={false}
          onConfirm={onEConfirm}
          onCancel={onECancel}>이 글을 편집하시겠습니까?</RecordDialog>
          <RecordDialog 
          visible={completeDialog} 
          complete
          onConfirm={onCConfirm}>삭제가 완료되었습니다.</RecordDialog>
        </MainPageBlock>
    );
}

export default withRouter(ViewRecord);