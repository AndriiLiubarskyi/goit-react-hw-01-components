import React from "react";

import Profile from "./components/Social-profile/Social-profile";
import userData from "./user.json";

import statisticalData from "./statistical-data.json";
import Statistics from "./components/Statistics/Statistics";

import friends from "./friends.json";
import FriendList from "./components/Friends/Friends";

import transactions from "./transactions.json";
import Transactions from "./components/Transactions/Transactions";

const App = () => {
    return (
        <div>
        <Profile
            key={userData.tag}
            avatar={userData.avatar}
            name={userData.name}
            tag={userData.tag}
            location={userData.location}
            stats={userData.stats}
        />

             <Statistics
                title='Upload stats'
                stats={statisticalData}   
            />

            <FriendList
                friends={friends}
            />

            <Transactions
            items={transactions}
            />
            
        </div>
    );
};

export default App;
