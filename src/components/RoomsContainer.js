import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { withRoomConsumer } from '../context';

const RoomsContainer = ({ context }) => {
  const { Loading, sortedRooms, rooms } = context;
  if (Loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
};

export default withRoomConsumer(RoomsContainer);
