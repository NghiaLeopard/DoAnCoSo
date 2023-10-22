import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import HobbyList from 'components/Home/HobbyList';
import { addNewHobby, setActiveHobby } from 'actions/hobby';

HomePage.propTypes = {};

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};

function HomePage(props) {
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);
  const dispatch = useDispatch();

  const handleAddHobbyClick = () => {
    const newId = randomNumber();
    const newHobby = {
      id: newId,
      title: `Hobby ${newId}`,
    };

    const action = addNewHobby(newHobby);
    dispatch(action);
  };

  const handleHobbyClick = (hobby) => {
    console.log(hobby);
    const action = setActiveHobby(hobby);
    dispatch(action);
  };
  return (
    <div>
      <h1>REDUX HOOKS - Home page</h1>

      <button onClick={handleAddHobbyClick}>Random Hobby</button>
      <HobbyList hobbyList={hobbyList} activeId={activeId} onHobbyClick={handleHobbyClick}></HobbyList>
    </div>
  );
}

export default HomePage;
