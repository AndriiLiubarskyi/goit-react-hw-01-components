import React from "react";
import PropTypes from 'prop-types';
import styles from './Friends.module.css'


const FriendListItem = ({avatar, name, isOnline, id }) => (
    <li key={id}
        className={`${styles.friendBlock} ${isOnline ? styles.online : styles.offline}`}>
        <img src={avatar} alt="avatar" width="80" />
        <p>{name}</p>
    </li>
);

const Friends = ({friends}) => (
    <ul className={styles.friendList}>
        {friends.map((friend) => (
            <FriendListItem 
              key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
        ))
        }
    </ul>
);

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default Friends;