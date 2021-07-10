import React from "react";

import SocialProfile from "./components/Social-profile/Social-profile";
import userData from "./user.json";

import statistics from "./statistical-data.json";
import Statistics from "./components/Statistics/Statistics";

import friends from "./friends.json";
import Friends from "./components/Friends/Friends";

import transactions from "./transactions.json";
import Transactions from "./components/Transactions/Transactions";

const App = () => {
    return (
        <div>
        <SocialProfile
            key={userData.tag}
            avatar={userData.avatar}
            name={userData.name}
            tag={userData.tag}
            location={userData.location}
            followers={userData.stats.followers}
            views={userData.stats.views}
            likes={userData.stats.likes}
        />

             <Statistics
                title='Upload stats'
                stats={statistics}   
            />

            <Friends
                friends={friends}
            />

            <Transactions
            items={transactions}
            />
            
        </div>
    );
};

export default App;
