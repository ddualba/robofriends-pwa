import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  // alternate approach is to map through in separate function
  // const cardArray = robots.map((use, i) => {
  //   return (
  //     <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />
  //   );
  // });

  return (
    <div>
      {/* {cardArray} */}
      {robots.map(robot => (
        <Card
          key={robot.id}
          id={robot.id}
          name={robot.name}
          email={robot.email}
        />
      ))}
    </div>
  );
};

export default CardList;
