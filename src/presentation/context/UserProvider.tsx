import React, { useState } from 'react';
import UserContext from './UserContext.tsx';
import { Task } from '../../interfaces/Task.tsx';

const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [tasks, settasks] = useState<Task[]>(Array<Task>());
    const state = {
        tasks,
        settasks,
    }

    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;