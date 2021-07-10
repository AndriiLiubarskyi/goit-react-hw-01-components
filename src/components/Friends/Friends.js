import React from "react";
import PropTypes from 'prop-types';
import styles from './Friends.module.css'


const Friends = ({friends}) => (
    <ul className={styles.friendList}>
        {friends.map((friend) => (
            <li key={friend.name}
                className={`${styles.friendBlock} ${friend.isOnline ? styles.online : styles.offline}`}>
                {/* <span>"&bull"</span> */}
                <img src={friend.avatar} alt="avatar" width="80" />
                <p>{friend.name}</p>
            </li>))}
    </ul>
    
);

Friends.propTypes = {
    friends: PropTypes.array.isRequired,
};

export default Friends;